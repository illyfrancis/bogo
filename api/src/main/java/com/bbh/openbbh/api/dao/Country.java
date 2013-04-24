package com.bbh.openbbh.api.dao;

import static com.google.common.collect.Lists.newArrayList;

import java.util.List;

import org.bson.types.ObjectId;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import com.bbh.openbbh.api.resource.CountryResource.Model;

public class Country {

	private static MongoCollection country;

	static {
		Jongo jongo = new Jongo(MongoDB.getDB());
		country = jongo.getCollection("country");
	}

	public static List<Model> find() {
		return newArrayList(country.find().as(Model.class));
	}
	
	public static List<Model> findBy(String q) {
		String pattern = "^" + q + ".*";
		String query = "{$or: [{code: {$regex: #, $options: 'i'}}, {desc: {$regex: #, $options: 'i'}}]}";
		return newArrayList(country.find(query, pattern, pattern).as(Model.class));
	}

	public static Model get(String id) {
		if (ObjectId.isValid(id)) {
			return country.findOne(new ObjectId(id)).as(Model.class);
		}
		else {
			return null;
		}
	}

	public static Model put(Model account) {
		country.save(account);
		return account;
	}

	public static void delete(String id) {
		country.remove(new ObjectId(id));
	}
}
