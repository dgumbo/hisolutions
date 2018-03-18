/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.documents.storage.controllers;

import zw.co.hisolutions.storage.controllers.StorageController;
import com.google.gson.JsonArray;
import java.nio.file.Paths;
import java.util.stream.Stream;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Ignore;
import org.junit.runner.RunWith;
import static org.mockito.BDDMockito.given;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.storage.exceptions.StorageFileNotFoundException;
import zw.co.hisolutions.storage.service.StorageService;

import org.hamcrest.Matchers;
import org.json.JSONArray;
import org.json.JSONObject;
import static org.mockito.BDDMockito.then;
import org.springframework.http.MediaType;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.fileUpload;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 *
 * @author denzil
 */
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
public class StorageControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private StorageService storageService;

    @Before
    public void setUp() {
    }

    /**
     * Test of listUploadedFiles method, of class StorageController.
     *
     * @throws java.lang.Exception
     */
    @Test
    public void shouldListUploadedFiles() throws Exception {
        //System.out.println("listUploadedFiles");

        given(storageService.loadAll())
                .willReturn(Stream.of(Paths.get("first.txt"), Paths.get("second.txt")));

        JsonArray jsonArray = new JsonArray();
        jsonArray.add("http://localhost/storage/files/first.txt");
        jsonArray.add("http://localhost/storage/files/second.txt");

        mvc.perform(get("/storage/list"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json(jsonArray.toString())) //.andDo(print())
                ;
    }

    /**
     * Test of UploadFile method, of class StorageController.
     *
     * @throws java.lang.Exception
     */
    @Test
    public void testUploadFile() throws Exception {
        System.out.println("UploadFile");

        MockMultipartFile multipartFile = new MockMultipartFile("file", "test.txt",
                "text/plain", "Spring Framework".getBytes());

        mvc.perform(fileUpload("/storage/upload").file(multipartFile) 
                .param("filename", "value.txt") 
                /*.flashAttr("filename", "value.txt")
                .requestAttr("filename", "value.txt") 
                .sessionAttr("filename", "value.txt")*/
                    )
                .andExpect(status().isFound())
                .andExpect(header().string("Location", "/"))
                .andDo(print());

        then(storageService).should().store(multipartFile);
    }

    /**
     * Test of index method, of class StorageController.
     *
     * @throws java.lang.Exception
     */
    @Test
    public void testStorageIndexHandler() throws Exception {

        given(storageService.getStorageLocation())
                .willReturn("/upload-path");

        mvc.perform(get("/storage/"))
                .andExpect(status().isOk()) // .andExpect(content().contentType(MediaType.))
                // .andExpect(content().string(Matchers.contains("Storage Service Storage Location :"))) 
                // .andDo(print())
                ;
    }

    /**
     * Test of serveFile method, of class StorageController.
     *
     * @throws java.lang.Exception
     */
    @Test
    @Ignore
    public void testServeFile() throws Exception {
        System.out.println("serveFile");
        String filename = "";
        StorageController instance = null;
        ResponseEntity<Resource> expResult = null;
        ResponseEntity<Resource> result = instance.serveFile(filename);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of handleFileUpload method, of class StorageController.
     *
     * @throws java.lang.Exception
     */
    @Test
    @Ignore
    public void testHandleFileUpload() throws Exception {
        System.out.println("handleFileUpload");
        MultipartFile file = null;
        RedirectAttributes redirectAttributes = null;
        StorageController instance = null;
        String expResult = "";
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of handleStorageFileNotFound method, of class StorageController.
     *
     * @throws java.lang.Exception
     */
    @Test
    @Ignore
    public void testHandleStorageFileNotFound() throws Exception {
        System.out.println("handleStorageFileNotFound");
        StorageFileNotFoundException exc = null;
        StorageController instance = null;
        ResponseEntity expResult = null;
        ResponseEntity result = instance.handleStorageFileNotFound(exc);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

}
