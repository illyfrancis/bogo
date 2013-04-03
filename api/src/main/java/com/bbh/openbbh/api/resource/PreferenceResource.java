package com.bbh.openbbh.api.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.types.ObjectId;

import com.bbh.openbbh.api.dao.Preferences;
import com.sun.jersey.api.NotFoundException;

@Path("preferences")
public class PreferenceResource {
    
    public static class Model {
        ObjectId _id;
        String name;
        String description;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") String id) {
        Model preference = Preferences.get(id);

        if (preference == null)
            throw new NotFoundException();

        return Response.ok(preference).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response put(Model preference) {
        return post(preference);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response post(Model preference) {
        Preferences.put(preference);
        return Response.ok(preference).build();
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") String id) {
        Preferences.delete(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get() {
    	
        List<Model> preferences = Preferences.get();

        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(preferences) {};
        return Response.ok(entity).build();
    }
}
