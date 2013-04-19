package com.bbh.openbbh.api.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.bson.types.ObjectId;

import com.bbh.openbbh.api.dao.ReportSchema;

@Path("reportschema")
public class ReportSchemaResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Model> findAll() {
		return ReportSchema.findAll();
	}

	public static class Model {
		ObjectId _id;
		String name;
		String label;
		String title;
		boolean selected;
		String criterion;
		int position;
		int sort;
		String align;
	}
}
