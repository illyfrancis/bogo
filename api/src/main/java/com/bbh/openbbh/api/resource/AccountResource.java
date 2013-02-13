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

import com.bbh.openbbh.api.dao.Accounts;
import com.sun.jersey.api.NotFoundException;

@Path("accounts")
public class AccountResource {
    
    public static class Model {
        ObjectId _id;
        String number;
        String name;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") String id) {
        Model account = Accounts.get(id);

        if (account == null)
            throw new NotFoundException();

        return Response.ok(account).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response put(Model account) {
        return post(account);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response post(Model account) {
        Accounts.put(account);
        return Response.ok(account).build();
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") String id) {
        Accounts.delete(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get() {
    	
        List<Model> accounts = Accounts.get();

        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(accounts) {};
        return Response.ok(entity).build();
    }
}
