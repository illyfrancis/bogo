package com.bbh.openbbh.api.resource;

import java.util.Date;
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

import com.bbh.openbbh.api.dao.Transactions;
import com.sun.jersey.api.NotFoundException;

@Path("transactions")
public class TransactionResource {
    
    public static class Model {
        ObjectId _id;
        String name;
        Date date;

        String accountNumber;
        String accountName;
        String clientRefId;
        String transactionRefId;
        String transactionType;
        String transactionTypeDesc;
        String securityId;
        String securityIdType;
        String securityDesc;
        String location;

        String instructionDate;
        String tradeDate;
        String settlementDate;

        Date _instructionDate;
        Date _tradeDate;
        Date _settlementDate;

        String units;
        double _units;
        String currency;
        String amount;
        double _amount;

        String transactionStatus;
        String transactionStatusDesc;
        String matchStatus;
        String reason;

        String tradingBroker;
        String clearingBroker;

        String clearedDate;
        String exDate;
        String paymentDate;
        String recordDate;
        String statusDate;
        String valueDate;

        Date _clearedDate;
        Date _exDate;
        Date _paymentDate;
        Date _recordDate;
        Date _statusDate;
        Date _valueDate;

    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") String id) {
        Model transaction = Transactions.get(id);

        if (transaction == null)
            throw new NotFoundException();

        return Response.ok(transaction).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response put(Model transaction) {
        return post(transaction);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response post(Model transaction) {
        Transactions.put(transaction);
        return Response.ok(transaction).build();
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") String id) {
        Transactions.delete(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get() {
    	
        List<Model> transactions = Transactions.get();

        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(transactions) {};
        return Response.ok(entity).build();
    }
}
