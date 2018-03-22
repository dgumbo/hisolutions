package zw.co.hisolutions.init.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import zw.co.hisolutions.init.InitializeStartData;

/**
 *
 * @author dgumbo
 */
@Controller
@RequestMapping("init")
public class InitController { 

    private final InitializeStartData initializeStartData;

    public InitController(InitializeStartData initializeStartData) {
        this.initializeStartData = initializeStartData;
    }
    
    @GetMapping("")
    @ResponseBody
    public String initData(){
        initializeStartData.init();
        return "Data Succesifully initialiazed !!";
    }    
}
