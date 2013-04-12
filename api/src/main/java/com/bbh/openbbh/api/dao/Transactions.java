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

	public static List<Model> find() {
		return newArrayList(transactions.find().as(Model.class));
	}
	
	public static List<Model> findBy(String query) {
		// first cut, assume query looks like - 
		// accountNumber:8123861
		// accountNumber:8123861,6133938;amount:($gt:500),($lt:1000);statusDate:14000000;clientRefId:C371122161
		// String q = String.format("{%s}", query);
		return newArrayList(transactions.find(query).as(Model.class));
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
