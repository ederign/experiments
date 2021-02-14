package me.ederign;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/wad")
public class GreetingResource {

    @Inject
    Greeter greater;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello  " + this.greater.opinion();
    }
}