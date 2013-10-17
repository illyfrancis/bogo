package com.bbh.openbbh.api.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.types.ObjectId;

import com.bbh.openbbh.api.dao.Securities;

@Path("securities")
public class SecurityResource {

	public static class SecurityId {
		String secId;
		String type;

		public static SecurityId buildWithCusip(Model model) {
			SecurityId securityId = new SecurityId();
			securityId.type = "cusip";
			securityId.secId = model.cusip;
			return securityId;
		}

		public static SecurityId buildWithSedol(Model model) {
			SecurityId securityId = new SecurityId();
			securityId.type = "sedol";
			securityId.secId = model.sedol;
			return securityId;
		}

		public static SecurityId buildWithIsin(Model model) {
			SecurityId securityId = new SecurityId();
			securityId.type = "isin";
			securityId.secId = model.isin;
			return securityId;
		}

		public static SecurityId buildWithCustody(Model model) {
			SecurityId securityId = new SecurityId();
			securityId.type = "custody";
			securityId.secId = model.custody;
			return securityId;
		}
	}

	public static class Model {
		ObjectId _id;
		String desc;
		String category;
		String iso;
		String multi;
		String cusip;
		String sedol;
		String isin;
		String custody;
		String ticker;
		String sico;
		String valoren;
		String origin;
	}

	@GET
	@Path("search/{secId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findBySecurityId3(@PathParam("secId") String secId) {
		List<SecurityId> secIds = Securities.findBySecurityId2(secId);
		GenericEntity<List<SecurityId>> entity = new GenericEntity<List<SecurityId>>(secIds) {};
		return Response.ok(entity).build();
	}

	@GET
	@Path("search2/{secId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findBySecurityId(@PathParam("secId") String secId) {
		List<Model> secIds = Securities.findBySecurityId(secId);
		GenericEntity<List<Model>> entity = new GenericEntity<List<Model>>(secIds) {};
		return Response.ok(entity).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Model> findAll() {
		return Securities.findAll();
	}

}
