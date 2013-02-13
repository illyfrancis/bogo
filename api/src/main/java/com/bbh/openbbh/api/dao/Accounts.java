package com.bbh.openbbh.api.dao;

import static com.google.common.collect.Lists.newArrayList;

import java.util.List;

import org.bson.types.ObjectId;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import com.bbh.openbbh.api.resource.AccountResource.Model;

public class Accounts {

	private static MongoCollection accounts;

	static {
		Jongo jongo = new Jongo(MongoDB.getDB());
		accounts = jongo.getCollection("accounts");
	}

	public static List<Model> get() {
		return newArrayList(accounts.find().as(Model.class));
	}

	public static Model get(String id) {
		if (ObjectId.isValid(id)) {
			return accounts.findOne(new ObjectId(id)).as(Model.class);
		}
		else {
			return null;
		}
	}

	public static Model put(Model account) {
		accounts.save(account);
		return account;
	}

	public static void delete(String id) {
		accounts.remove(new ObjectId(id));
	}
}
