package com.esimerkki;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

@Path("/api/weather")
public class WeatherResource {
    
    @RestClient
    WeatherClient weatherClient;

    @ConfigProperty(name = "weather.api.key")
    String apiKey;

    @GET
    public Object getCityWeather(@QueryParam("city") String city) {
        System.out.println("Api key in use: " + apiKey);
        System.out.println("City thats being fetched: " + city);
        
        return weatherClient.getWeather(city, apiKey, "metric");
    }
}
