/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.documents.controller;

import javax.servlet.http.HttpServletResponse;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import zw.co.hisolutions.documents.entity.DocumentMetadata;

/**
 *
 * @author denzil
 */
public class DocumentControllerTest {
    
    public DocumentControllerTest() {
    } 
    
    @Before
    public void setUp() {
    }

    /**
     * Test of Upload method, of class DocumentController.
     */
    @Test
    public void testUpload() {
        System.out.println("Upload");
        MultipartFile file = null;
        String filename = "";
        DocumentController instance = null;
        ResponseEntity<DocumentMetadata> expResult = null;
        ResponseEntity<DocumentMetadata> result = instance.Upload(file, filename);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getMetadata method, of class DocumentController.
     */
    @Test
    public void testGetMetadata() {
        System.out.println("getMetadata");
        String filename = "";
        DocumentController instance = null;
        ResponseEntity<Object> expResult = null;
        ResponseEntity<Object> result = instance.getMetadata(filename);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getAllMetadata method, of class DocumentController.
     */
    @Test
    public void testGetAllMetadata() {
        System.out.println("getAllMetadata");
        DocumentController instance = null;
        ResponseEntity<Object> expResult = null;
        ResponseEntity<Object> result = instance.getAllMetadata();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of viewDocument method, of class DocumentController.
     */
    @Test
    public void testViewDocument() {
        System.out.println("viewDocument");
        String filename = "";
        HttpServletResponse response = null;
        DocumentController instance = null;
        instance.viewDocument(filename, response);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of viewDocumentTest method, of class DocumentController.
     */
    @Test
    public void testViewDocumentTest() {
        System.out.println("viewDocumentTest");
        String filename = "";
        HttpServletResponse response = null;
        DocumentController instance = null;
        instance.viewDocumentTest(filename, response);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of downloadDocument method, of class DocumentController.
     */
    @Test
    public void testDownloadDocument() {
        System.out.println("downloadDocument");
        String filename = "";
        HttpServletResponse response = null;
        DocumentController instance = null;
        instance.downloadDocument(filename, response);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
