package zw.co.hisolutions.tutorials.services.util;

import lombok.Data;

@Data
public class Results {
   private DBActionResult result;
   private String message;
   private String keyReturned;
   private Class entityClass;
   
   public Results(){}
   
   public Results(    DBActionResult result,    String message,    String keyReturned, Class entityClass){
    this.result=result;
    this.message=message;
    this.keyReturned=keyReturned;
    this.entityClass = entityClass;
   }
}
