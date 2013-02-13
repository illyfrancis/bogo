package com.bbh.openbbh.api.dao;

import static com.google.common.collect.Lists.newArrayList;

import java.util.List;

import org.jongo.Jongo;
import org.jongo.MongoCollection;

import com.bbh.openbbh.api.resource.ReportSchemaResource.Model;

public class ReportSchema {
	static MongoCollection reportSchema;

	static {
		Jongo jongo = new Jongo(MongoDB.getDB());
		reportSchema = jongo.getCollection("reportschema");
	}

	public static List<Model> findAll() {
		return newArrayList(reportSchema.find().as(Model.class));
	}
}
