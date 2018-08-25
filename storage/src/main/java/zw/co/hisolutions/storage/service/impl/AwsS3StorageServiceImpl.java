package zw.co.hisolutions.storage.service.impl;

import com.amazonaws.AmazonClientException;
import java.io.File;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CreateBucketRequest;
import com.amazonaws.services.s3.model.GetBucketLocationRequest;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.amazonaws.services.s3.transfer.Download;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.Upload;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Stream;
import org.apache.tika.Tika;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import zw.co.hisolutions.storage.entity.DocumentMetadata;
import zw.co.hisolutions.storage.entity.Status;
import zw.co.hisolutions.storage.exceptions.StorageException;
import zw.co.hisolutions.storage.exceptions.StorageFileNotFoundException;
import zw.co.hisolutions.storage.properties.StorageProperties;
import zw.co.hisolutions.storage.service.StorageService;
import zw.co.hisolutions.storage.service.DocumentMetadataService;

/**
 *
 * @author dgumbo
 */
@Service
@Profile("!development")
public class AwsS3StorageServiceImpl implements StorageService {

    private final Tika tika = new Tika();
    private final String s3BucketName;
    private final DocumentMetadataService documentMetadataService;
    private final String STORAGE_FOLDER = "Uploaded/";
    private final Path rootLocation = Paths.get(STORAGE_FOLDER);
    private final TransferManager transferManager;
    private final String awsRegion;

    public AwsS3StorageServiceImpl(TransferManager transferManager, StorageProperties storageProperties, DocumentMetadataService documentMetadataService) {
        this.s3BucketName = storageProperties.getAwsS3BucketName();
        this.awsRegion = storageProperties.getAwsRegion();
        this.documentMetadataService = documentMetadataService;
        this.transferManager = transferManager;
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            System.out.println("Downloading an object. With filename : " + filename);

            File file = null;
            Download download = transferManager.download(s3BucketName, filename, file);
            download.waitForCompletion();

            Resource resource = new FileSystemResource(file);

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException("Could not read file: " + filename);
            }
        } catch (AmazonServiceException ase) {
            System.err.println("Exception was thrown by the service");
            throw new AmazonServiceException("Exception was thrown by the service");
        } catch (AmazonClientException ace) {
            System.err.println("Exception was thrown by the client");
            throw new AmazonClientException("Exception was thrown by the client");
        } catch (InterruptedException ex) {
            Logger.getLogger(AwsS3StorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            throw new UnsupportedOperationException("Exception was thrown by the client - " + ex.getMessage());
        }
    }

    @Override
    public void deleteAll() {
        transferManager.getAmazonS3Client().deleteObject(s3BucketName, s3BucketName);
    }

    @Override
    @Transactional
    public DocumentMetadata store(MultipartFile file) {
        System.out.println("Starting Save");
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        if (file.isEmpty()) {
            throw new StorageException("Failed to store empty file " + filename);
        }

        DocumentMetadata documentMetadata = null;
        try {
            documentMetadata = getDocumentMetadata(filename);
            if (documentMetadata != null) {
                documentMetadata.setStatus(Status.DocumentAlreadyExists);
            } else {
                documentMetadata = new DocumentMetadata();

                if (filename.contains("..")) {
                    // This is a security check
                    throw new StorageException("Cannot store file with relative path outside current directory " + filename);
                }

                System.out.println("this.rootLocation.resolve(filename) : " + STORAGE_FOLDER + filename);

                String uploadedFilename = upload(file, filename);

                String mimeType = getMimeType(file.getBytes());
                
                String documentMetadataFilename = "https://s3-"+awsRegion+".amazonaws.com/"+s3BucketName+"/" + uploadedFilename;

                documentMetadata.setActiveStatus(true);
                documentMetadata.setFilename(documentMetadataFilename);
                documentMetadata.setFilePath(STORAGE_FOLDER + filename);
                documentMetadata.setStatus(Status.Success);
                documentMetadata.setMimeType(mimeType);

                documentMetadata = documentMetadataService.save(documentMetadata);
            }

        } catch (IOException e) {
            e.printStackTrace();
            throw new StorageException("Failed to store file " + filename, e);
        } catch (AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process 
            // it, so it returned an error response.
            e.printStackTrace();
            throw new UnsupportedOperationException("Not supported yet.");
        } catch (SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            e.printStackTrace();
            throw new UnsupportedOperationException(e.getMessage());
        } catch (AmazonClientException | InterruptedException | IllegalArgumentException ex) {
            ex.printStackTrace();
            Logger.getLogger(AwsS3StorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            throw new UnsupportedOperationException(ex.getMessage());
        }

        System.out.println("Finishing Save");
        return documentMetadata;
    }

    @Override
    @Transactional
    public DocumentMetadata store(File file) {
        System.out.println("Starting Save");
        String filename = file.getName();

        DocumentMetadata documentMetadata = null;
        try {
            documentMetadata = getDocumentMetadata(filename);
            if (documentMetadata != null) {
                documentMetadata.setStatus(Status.DocumentAlreadyExists);
            } else {
                documentMetadata = new DocumentMetadata();

                if (filename.contains("..")) {
                    // This is a security check
                    throw new StorageException("Cannot store file with relative path outside current directory " + filename);
                }

                System.out.println("this.rootLocation.resolve(filename) : " + STORAGE_FOLDER + filename);

                String uploadedFilename = upload(file, filename);

                String mimeType = getMimeType(file);

                documentMetadata.setActiveStatus(true);
                String documentMetadataFilename = "https://s3-"+awsRegion+".amazonaws.com/"+s3BucketName+"/" + uploadedFilename;
                documentMetadata.setFilename(documentMetadataFilename);
                documentMetadata.setFilePath(STORAGE_FOLDER + filename);
                documentMetadata.setStatus(Status.Success);
                documentMetadata.setMimeType(mimeType);

                documentMetadata = documentMetadataService.save(documentMetadata);
            }

        } catch (IOException e) {
            e.printStackTrace();
            throw new StorageException("Failed to store file " + filename, e);
        } catch (AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process 
            // it, so it returned an error response.
            e.printStackTrace();
            throw new UnsupportedOperationException("Not supported yet.");
        } catch (SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            e.printStackTrace();
            throw new UnsupportedOperationException(e.getMessage());
        } catch (AmazonClientException | InterruptedException | IllegalArgumentException ex) {
            ex.printStackTrace();
            Logger.getLogger(AwsS3StorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            throw new UnsupportedOperationException(ex.getMessage());
        }

        System.out.println("Finishing Save");
        return documentMetadata;
    }

    public String upload(MultipartFile file, String filename) throws IOException, AmazonClientException, InterruptedException {
        // TransferManager processes all transfers asynchronously, 
        // so this call returns immediately. 
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(file.getSize());
        objectMetadata.setContentType(file.getContentType());

        Upload upload = transferManager.upload(s3BucketName, filename, file.getInputStream(), objectMetadata);  //(s3BucketName, filename, file);

        System.out.println("Object upload started");
        // Optionally, wait for the upload to finish before continuing. 
        upload.waitForCompletion();
        System.out.println("Object upload complete");
        return filename;
    }

    public String upload(File file, String filename) throws AmazonClientException, InterruptedException {
        
        Upload upload = transferManager.upload(s3BucketName, filename, file);

        System.out.println("Object upload started");
        // Optionally, wait for the upload to finish before continuing. 
        upload.waitForCompletion();
        System.out.println("Object upload complete");
        return filename;
    }
 

    @Override
    public void scanServerDirectory() {
        try {
            AmazonS3 s3Client = transferManager.getAmazonS3Client();

            System.out.println("Listing objects");

            // maxKeys is set to 2 to demonstrate the use of
            // ListObjectsV2Result.getNextContinuationToken()
            ListObjectsV2Request req = new ListObjectsV2Request().withBucketName(s3BucketName).withMaxKeys(2);
            ListObjectsV2Result result;

            do {
                result = s3Client.listObjectsV2(req);

                for (S3ObjectSummary objectSummary : result.getObjectSummaries()) {
                    System.out.printf(" - %s (size: %d)\n", objectSummary.getKey(), objectSummary.getSize());

                    String filename = objectSummary.getKey();
                    String contentType = "";
                    DocumentMetadata documentMetadata = getDocumentMetadata(filename);
                    if (documentMetadata == null) {

                        documentMetadata = new DocumentMetadata();
                        documentMetadata.setActiveStatus(true);
                        documentMetadata.setFilename(filename);
                        documentMetadata.setFilePath(filename);
                        documentMetadata.setStatus(Status.Success);
                        documentMetadata.setMimeType(contentType);
                        try {
                            documentMetadataService.create(documentMetadata);
                        } catch (Exception ex) {
                            java.util.logging.Logger.getLogger(FileSystemStorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                        }
                    }
                }
                // If there are more than maxKeys keys in the bucket, get a continuation token
                // and list the next objects.
                String token = result.getNextContinuationToken();
                System.out.println("Next Continuation Token: " + token);
                req.setContinuationToken(token);
            } while (result.isTruncated());
        } catch (AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process 
            // it, so it returned an error response.
            e.printStackTrace();
        } catch (SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            e.printStackTrace();
        }
    }
 
    @Override
    public void init() {
        try {
            AmazonS3 s3Client = transferManager.getAmazonS3Client();

            if (!s3Client.doesBucketExistV2(s3BucketName)) {
                // Because the CreateBucketRequest object doesn't specify a region, the
                // bucket is created in the region specified in the client.
                s3Client.createBucket(new CreateBucketRequest(s3BucketName));
                
                // Verify that the bucket was created by retrieving it and checking its location.
                String bucketLocation = s3Client.getBucketLocation(new GetBucketLocationRequest(s3BucketName));
                System.out.println("Bucket location: " + bucketLocation);
            }
        }
        catch(AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process 
            // it and returned an error response.
            e.printStackTrace();
        }
        catch(SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            e.printStackTrace();
        }
    }

     @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));
        } catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }
    }

    @Override
    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    @Override
    public String getStorageLocation() {
        return rootLocation.toString();
    }
 

    @Override
    public DocumentMetadataService getDocumentMetadataService() {
       return documentMetadataService;
    }

    @Override
    public Tika getTika() {
        return tika;
    }

}
