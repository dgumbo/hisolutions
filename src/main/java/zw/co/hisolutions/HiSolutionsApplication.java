package zw.co.hisolutions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication//(scanBasePackages = {"zw.co.hisolutions"})
//@EnableJpaRepositories(basePackages = {"zw.co.hisolutions"})
public class HiSolutionsApplication{

    //@SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsApplication.class, args);
    }
}