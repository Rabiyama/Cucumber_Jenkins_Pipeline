package runners;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/test/java/feature/",glue ="src/test/java/",
        plugin = { "pretty","html:target/cucumber-reports"}, 
        monochrome = true
                )

public class testRunner {
	
	  @AfterClass public static void writeExtentReport() {
	  Reporter.loadXMLConfig(new File("config/report.xml"));
	  
	  }
	 
}