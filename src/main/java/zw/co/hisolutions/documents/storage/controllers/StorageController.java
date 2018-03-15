package zw.co.hisolutions.documents.storage.controllers;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.documents.storage.exceptions.StorageFileNotFoundException;
import zw.co.hisolutions.documents.storage.service.StorageService;

/**
 *
 * @author denzil
 */
@RestController
@RequestMapping("/storage")
public class StorageController {
     /**
     * Injected just so we can return information about it.  If Spring's multipart support is enabled in
     * {@code application.properties}, and/or we add back CommonsMultipartResolver in our configuration,
     * re-autowire this so we get more information.
     */
    @Autowired
    private MultipartResolver multipartResolver;

    private final StorageService storageService;

    @Autowired
    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/")
    @ResponseBody
    public String StorageIndexHandler() {
        return "<p>Storage Service Storage Location : " + storageService.getStorageLocation() + "</p>";
    }

    @GetMapping("/list")
    public ResponseEntity<?> listUploadedFiles(Model model) throws IOException {
        List<String> files = storageService.loadAll().map(
                path -> MvcUriComponentsBuilder.fromMethodName(StorageController.class,
                        "serveFile", path.getFileName().toString()).build().toString())
                .collect(Collectors.toList());

        return new ResponseEntity<>(files, HttpStatus.OK);
    }

    @GetMapping("/viewfile/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);

        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @PostMapping(value = "/upload") //, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<DocumentMetadata> UploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("filename") String filename
    ) {
        System.out.println("zw.co.hisolutions.core.controllers.rest.ServiceCategoryController.getResource()");

        System.out.println("filename : " + filename);

        String fileName = file.getOriginalFilename();
        System.out.println(fileName);
        System.out.println("file.getSize() : " + file.getSize());
        System.out.println("file.getContentType() : " + file.getContentType());

        DocumentMetadata documentMetadata = storageService.storeFile(file);

        return new ResponseEntity<>(documentMetadata, HttpStatus.OK);
    }

    @PostMapping(path = "/uploadfile"
            /*, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}
            , produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"} */
    )
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
            @RequestParam("filename") String filename,
            RedirectAttributes redirectAttributes) {

        storageService.store(file);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }
}
