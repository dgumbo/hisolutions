package zw.co.hisolutions.documents.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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




//    @GetMapping(value = "view")
//    public void viewDocument(@RequestParam(value = "filename") String filename, HttpServletResponse response) {
//        getFileFromStorage(filename, response);
//    }

//    @GetMapping(value = "viewtest/{filename:.*}")
//    public void viewDocumentTest(@PathVariable String filename, HttpServletResponse response) {
//        // System.out.println("Starting ViewFileServlet. filename : " + filename + "." + ext);
//        getFileFromStorage(filename, response);
//    }
//
//    private void getFileFromStorage(String filename, HttpServletResponse response) {
//        //System.out.println("Starting ViewFileServlet");
//        try {
//            //DocumentMetadata documentMetadata ;// = fileSystemDocumentStorageService.getMetadata(filename);
//            //Status downStatus = gfr.getStatus();
//            // String message = gfr.getMessage();
//            //String fileName = documentMetadata.getFilename();
//
//            File document = fileSystemDocumentStorageService.getDocument(filename);
//            byte[] bytes = fileSystemDocumentStorageService.documentToByteArray(document);
//            String mimeType = fileSystemDocumentStorageService.getMimeType(bytes);
//
//            // System.out.println("mimeType : " + mimeType + ". For file : " + fileName  + "\n");
//            response.setContentType(mimeType);
//            response.setHeader("Content-Disposition", "inline; filename=\"" + filename + "\"; name=\"" + filename + "\"");
//            response.addHeader("content-length", String.valueOf(bytes.length));
//
//            OutputStream os = response.getOutputStream();
//            os.write(bytes);
//            os.flush();
//            os.close();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    @GetMapping(value = "download")
//    public void downloadDocument(@RequestParam(value = "filename") String filename, HttpServletResponse response) {
//        // System.out.println("Starting ViewFileServlet");
//        try {
//            DocumentMetadata documentMetadata = fileSystemDocumentStorageService.getMetadata(filename);
//            //Status downStatus = gfr.getStatus();
//            // String message = gfr.getMessage();
//            String fileName = documentMetadata.getFilename();
//            String mimeType = documentMetadata.getMimeType();
//
//            File document = fileSystemDocumentStorageService.getDocument(filename);
//            byte[] bytes = fileSystemDocumentStorageService.documentToByteArray(document);
//
//            // System.out.println("mimeType : " + mimeType + ". For file : " + fileName  + "\n");
//            response.setContentType(mimeType);
//            response.setHeader("Content-Disposition", "inline; filename=\"" + fileName + "\"; name=\"" + fileName + "\"");
//            response.addHeader("content-length", String.valueOf(bytes.length));
//
//            OutputStream os = response.getOutputStream();
//            os.write(bytes);
//            os.flush();
//            os.close();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

}
