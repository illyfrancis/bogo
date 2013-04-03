package com.bbh.openbbh.api.dao;

import static com.google.common.collect.Lists.newArrayList;

import java.util.List;

import org.bson.types.ObjectId;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import com.bbh.openbbh.api.resource.PreferenceResource.Model;

public class Preferences {

	private static MongoCollection preferences;

	static {
		Jongo jongo = new Jongo(MongoDB.getDB());
		preferences = jongo.getCollection("preferences");
	}

	public static List<Model> get() {
		return newArrayList(preferences.find().as(Model.class));
	}

	public static Model get(String id) {
		if (ObjectId.isValid(id)) {
			return preferences.findOne(new ObjectId(id)).as(Model.class);
		}
		else {
			return null;
		}
	}

	public static Model put(Model account) {
		preferences.save(account);
		return account;
	}

	public static void delete(String id) {
		preferences.remove(new ObjectId(id));
	}
}
