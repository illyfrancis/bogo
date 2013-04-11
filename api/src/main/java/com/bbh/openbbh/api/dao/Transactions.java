package com.bbh.openbbh.api.dao;

import static com.google.common.collect.Lists.newArrayList;

import java.util.List;

import org.bson.types.ObjectId;
import org.jongo.Jongo;
import org.jongo.MongoCollection;

import com.bbh.openbbh.api.resource.TransactionResource.Model;

public class Transactions {

	private static MongoCollection transactions;

	static {
		Jongo jongo = new Jongo(MongoDB.getDB());
		transactions = jongo.getCollection("transactions");
	}

	public static List<Model> get() {
		return newArrayList(transactions.find().as(Model.class));
	}

	public static Model get(String id) {
		if (ObjectId.isValid(id)) {
			return transactions.findOne(new ObjectId(id)).as(Model.class);
		}
		else {
			return null;
		}
	}

	public static Model put(Model transaction) {
		transactions.save(transaction);
		return transaction;
	}

	public static void delete(String id) {
		transactions.remove(new ObjectId(id));
	}
}
