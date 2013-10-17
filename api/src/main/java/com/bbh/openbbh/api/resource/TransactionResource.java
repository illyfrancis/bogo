package com.bbh.openbbh.api.resource;

import static com.google.common.collect.Lists.newArrayList;

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
import javax.ws.rs.QueryParam;
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

        // String instructionDate;
        // String tradeDate;
        // String settlementDate;

        Date instructionDate;
        Date tradeDate;
        Date settlementDate;

        // String units;
        double units;
        String currency;
        // String amount;
        double transactionAmount;

        String transactionStatus;
        String transactionStatusDesc;
        String matchStatus;
        String reason;

        String tradingBroker;
        String clearingBroker;

        // String clearedDate;
        // String exDate;
        // String paymentDate;
        // String recordDate;
        // String statusDate;
        // String valueDate;

        Date clearedDate;
        Date exDate;
        Date paymentDate;
        Date recordDate;
        Date statusDate;
        Date valueDate;
    }

    public static class Query {
        private String criteria;
        private String fields;
        private String sort;
        private int offset = 0;
        private int limit = 10;
        
        public String getFields() {
        	String projection = "";
        	if (fields != null && !fields.isEmpty()) {
        		// convert ["field1","field2",...] to {"field1":1,"field2":1,...}
        		projection = fields.replaceAll("^\\[(.*?)\\]$", "{$1}").replaceAll("(\".+?\")", "$1:1");
        	}
        	return projection;
        }

		public String getCriteria() {
			String template = "";
			if (this.criteria != null && !this.criteria.isEmpty()) {
				template = this.criteria.replaceAll("\"\\#date(.+?)\"", "#");
			}

			return template;
		}
		
		// convert criteria values into array of objects.
		public Object[] getTemplateParams() {
			
			// work on dates.
			String token = "#date";
			int begin = 0,
				end = 0,
				index = 0,
				datelength = 13;
			List<Date> dates = newArrayList();

			do {
				index = this.criteria.indexOf(token, begin);

				if (index >= 0) {
					begin = index + token.length();
					end = begin + datelength;
					String date = this.criteria.substring(begin, end);
					dates.add(new Date((new Long(date)).longValue()));
					begin = end;
				}
			} while (index >= 0);
			
			return dates.toArray();
		}
		
		public String getSort() {
			return this.sort;
		}

        public int getSkipOffset() {
            return this.offset * this.limit;
        }

        public int getLimit() {
            return this.limit;
        }
    }

    static class QueryResponse {
        List<Model> transactions;
        long total;
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

    @POST
    @Path("search")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response queryByPost(
        @QueryParam("limit") Integer limit,
        @QueryParam("offset") Integer offset,
        Query query) {

        if (query == null) {
            // return null;
            return Response.noContent().build();
        }

        if (limit != null) {
            query.limit = limit.intValue();
        }

        if (offset != null) {
            query.offset = offset.intValue();
        }

        long count = Transactions.count(query);

        System.out.println("> in queryByPost limit [" + limit
                + "] offset [" + offset
                + "] count [" + count
                // + "] query.criteria [" + query.criteria 
                + "] query.fields [" + query.fields 
                + "] query.sort [" + query.sort 
                + "]");

        QueryResponse response = new QueryResponse();
        response.transactions = Transactions.findBy(query);
        response.total = count;
        return Response.ok(response).build();
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
    	
        List<Model> transactions = Transactions.find();

        GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(transactions) {};
        return Response.ok(entity).build();
    }
}
