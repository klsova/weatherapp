package com.esimerkki;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

@RegisterRestClient(configKey = "weather-api")
public interface WeatherClient {

    @GET
    @Path("/weather")
    Object getWeather(@QueryParam("q") String city, @QueryParam("appid") String apiKey, @QueryParam("units") String units);
}

