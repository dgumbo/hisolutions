package zw.co.hisolutions.tutorials.core.repositories;

import com.google.gson.JsonObject;
import org.hamcrest.Matchers;
import static org.hamcrest.Matchers.*;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;
import zw.co.hisolutions.tutorials.core.services.BlogEntryService;
import zw.co.hisolutions.tutorials.rest.controllers.BlogEntryController; 

public class BlogEntryRepositoryTest {

   @InjectMocks
   BlogEntryController blogEntryController;

   private MockMvc mockMvc;

    @Mock
    BlogEntryService blogEntryService;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        //mockMvc = MockMvcBuilders.standaloneSetup(blogEntryService).build();
        mockMvc = MockMvcBuilders.standaloneSetup(blogEntryController).build();
    }

    //@Test
    public void getExistingBlogEntry() throws Exception {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setTitle("Test Title");
        blogEntry.setId(1L);

        when(blogEntryService.findBlogEntry(1L)).thenReturn(blogEntry);

        JsonObject js = new JsonObject();

        js.addProperty("id", 2018);
        js.addProperty("title", "Next Year With Decoy");
        js.addProperty("decoy", "Next Year Decoy");

        mockMvc.perform(get("/testBlogEntry"))//.content(js.toString()).contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.title", Matchers.is("Next Year With Decoy")))
                .andDo(print());
    }

    //@Test
    public void getExistingBlogEntryMain() throws Exception {
        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setTitle("Test Title");
        blogEntry.setId(1L);

        when(blogEntryService.findBlogEntry(1L)).thenReturn(blogEntry);
//        System.out.println("blogEntryService.find(1L).getTitle() : " + blogEntryService.find(1L).getTitle());

        mockMvc.perform(get("/rest/blog-entry/1"))
                .andDo(print())
                .andExpect(jsonPath("$.title", is(blogEntry.getTitle())))
                .andExpect(jsonPath("$.links[*].href", hasItem(endsWith("/blog-entry/1"))))
                .andExpect(status().isOk());

    }

    @Test
    public void getNonExistingBlogEntryMain() throws Exception {
        when(blogEntryService.findBlogEntry(1L)).thenReturn(null);
        
        mockMvc.perform(get("/rest/blog-entry/1"))
                .andExpect(status().isNotFound());

    }

}
