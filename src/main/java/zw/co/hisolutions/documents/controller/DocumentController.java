package zw.co.hisolutions.documents.controller;

import java.io.File;
import java.io.OutputStream;
import java.nio.file.Path;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.documents.service.DocumentMetadataService;
import zw.co.hisolutions.documents.service.FileSystemDocumentStorageService;

@RestController
@RequestMapping("/documents")
public class DocumentController {

    private final FileSystemDocumentStorageService fileSystemDocumentStorageService;
    private final DocumentMetadataService documentMetadataService;

    @Autowired
    public DocumentController(FileSystemDocumentStorageService fileSystemDocumentStorageService, DocumentMetadataService documentMetadataService) {
        this.fileSystemDocumentStorageService = fileSystemDocumentStorageService;
        this.documentMetadataService = documentMetadataService;
    }


    @GetMapping(value = "/getmetadata/{filename}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Object> getMetadata(@RequestParam(value = "filename") String filename) {
        //System.out.println("zw.co.hisolutions.core.controllers.rest.ServiceCategoryController.getAllFiles()");

        Path data = fileSystemDocumentStorageService.load(filename);

        return new ResponseEntity<>(data, HttpStatus.OK);

        // return new ResponseEntity<>("entity", HttpStatus.OK);
    }

    @GetMapping(value = "/getallmetadata", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Object> getAllMetadata() {
        //System.out.println("zw.co.hisolutions.core.controllers.rest.ServiceCategoryController.getAllFiles()");
        //Stream<Path> data = fileSystemDocumentStorageService.loadAll();

        List<DocumentMetadata> data = documentMetadataService.findAll();
        return new ResponseEntity<>(data, HttpStatus.OK);

        // return new ResponseEntity<>("entity", HttpStatus.OK);
    }

    @GetMapping(value = "view")
    public void viewDocument(@RequestParam(value = "filename") String filename, HttpServletResponse response) {
        getFileFromStorage(filename, response);
    }

    @GetMapping(value = "viewtest/{filename:.*}")
    public void viewDocumentTest(@PathVariable String filename, HttpServletResponse response) {
        // System.out.println("Starting ViewFileServlet. filename : " + filename + "." + ext);
        getFileFromStorage(filename, response);
    }

    private void getFileFromStorage(String filename, HttpServletResponse response) {
        //System.out.println("Starting ViewFileServlet");
        try {
            //DocumentMetadata documentMetadata ;// = fileSystemDocumentStorageService.getMetadata(filename);
            //Status downStatus = gfr.getStatus();
            // String message = gfr.getMessage();
            //String fileName = documentMetadata.getFilename();

            File document = fileSystemDocumentStorageService.getDocument(filename);
            byte[] bytes = fileSystemDocumentStorageService.documentToByteArray(document);
            String mimeType = fileSystemDocumentStorageService.getMimeType(bytes);

            // System.out.println("mimeType : " + mimeType + ". For file : " + fileName  + "\n");
            response.setContentType(mimeType);
            response.setHeader("Content-Disposition", "inline; filename=\"" + filename + "\"; name=\"" + filename + "\"");
            response.addHeader("content-length", String.valueOf(bytes.length));

            OutputStream os = response.getOutputStream();
            os.write(bytes);
            os.flush();
            os.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping(value = "download")
    public void downloadDocument(@RequestParam(value = "filename") String filename, HttpServletResponse response) {
        // System.out.println("Starting ViewFileServlet");
        try {
            DocumentMetadata documentMetadata = fileSystemDocumentStorageService.getMetadata(filename);
            //Status downStatus = gfr.getStatus();
            // String message = gfr.getMessage();
            String fileName = documentMetadata.getFilename();
            String mimeType = documentMetadata.getMimeType();

            File document = fileSystemDocumentStorageService.getDocument(filename);
            byte[] bytes = fileSystemDocumentStorageService.documentToByteArray(document);

            // System.out.println("mimeType : " + mimeType + ". For file : " + fileName  + "\n");
            response.setContentType(mimeType);
            response.setHeader("Content-Disposition", "inline; filename=\"" + fileName + "\"; name=\"" + fileName + "\"");
            response.addHeader("content-length", String.valueOf(bytes.length));

            OutputStream os = response.getOutputStream();
            os.write(bytes);
            os.flush();
            os.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
