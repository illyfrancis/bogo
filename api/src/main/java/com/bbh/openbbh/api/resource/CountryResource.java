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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.types.ObjectId;

import com.bbh.openbbh.api.dao.Country;
import com.sun.jersey.api.NotFoundException;

@Path("country")
public class CountryResource {
    
    public static class Model {
        ObjectId _id;
        String code;
        String desc;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") String id) {
        Model account = Country.get(id);

        if (account == null)
            throw new NotFoundException();

        return Response.ok(account).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response put(Model country) {
        return post(country);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response post(Model country) {
        Country.put(country);
        return Response.ok(country).build();
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") String id) {
        Country.delete(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get() {
        List<Model> country = Country.find();
        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(country) {};
        return Response.ok(entity).build();
    }
    
    @GET
    @Path("search")
    @Produces(MediaType.APPLICATION_JSON)
    public Response search(@QueryParam("q") String query) {
        List<Model> country = Country.findBy(query);
        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(country) {};
        return Response.ok(entity).build();
    }
    
    @GET
    @Path("codes/{codes}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response searchByCode(@PathParam("codes") String codes) {
        List<Model> country = Country.findByCodes(codes);
        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(country) {};
        return Response.ok(entity).build();
    }

}
