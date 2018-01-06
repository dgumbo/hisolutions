package zw.co.hisolutions.tutorials;

public class Car {

    private  Engine engine;
    private  String warningMsg;

    public Car(Engine engine) {
        this.engine = engine;
    }    
    
    public void accelerate(){
        engine.increaseRpm();
        
        if (engine.getRpm() > 5000){
            warningMsg = "Slow Down" ;
        }
    }

    public String getWarningMsg() {
        return warningMsg;
    }

    public void setWarningMsg(String warningMsg) {
        this.warningMsg = warningMsg;
    }
}
