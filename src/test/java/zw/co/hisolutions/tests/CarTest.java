package zw.co.hisolutions.tests;

import static org.junit.Assert.*;
import org.junit.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;
import zw.co.hisolutions.tutorials.*;

public class CarTest {
    @Mock
    Engine engine;  
    
    @InjectMocks
    private Car car;
    
    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }
    
    @Test
    public void testWarning() {
        when (engine.getRpm()).thenReturn(6000);
        
        car.accelerate();
        
        assertEquals("Slow Down", car.getWarningMsg());
    }
}
