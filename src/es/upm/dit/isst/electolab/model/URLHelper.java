package es.upm.dit.isst.electolab.model;

public class URLHelper {
	public static String getURL() {

        String envValue = System.getenv("ELECTOLAB_SRV_SERVICE_HOST");

        if(envValue == null)

                return "http://localhost:8080/Electolab/rest/USUARIOs";

        else

                return envValue;

}

}