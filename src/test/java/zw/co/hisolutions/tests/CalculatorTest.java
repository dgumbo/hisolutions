package zw.co.hisolutions.tests;

import static org.junit.Assert.*;
import org.junit.*;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;
import zw.co.hisolutions.tutorials.Calculator;

public class CalculatorTest {
    @Mock
    Calculator calc;  
    
    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
    }
    
    @Test
    public void testAbs() {
        when (calc.abs(-20)).thenReturn(20);
        int actual = calc.abs(-20);
        assertEquals(20 , actual);
    }
}
