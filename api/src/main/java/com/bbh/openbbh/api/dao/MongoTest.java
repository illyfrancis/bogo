package com.bbh.openbbh.api.dao;

import java.net.UnknownHostException;
import java.util.List;
import java.util.Set;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

public class MongoTest {

	public static void main(String[] args) {
		// refer to http://www.mongodb.org/display/DOCS/Java+Tutorial
		try {
			MongoClient mongoClient = new MongoClient();
			// or MongoClient mongoClient = new MongoClient( "localhost" );
			// or MongoClient mongoClient = new MongoClient( "localhost" , 27017
			// );

			DB db = mongoClient.getDB("hello");

			// Getting A List Of Collections
			Set<String> colls = db.getCollectionNames();
			for (String s : colls) {
				System.out.println(s);
			}

			// getting a collection
			DBCollection coll = db.getCollection("testCollection");
			// coll.find()

			// inserting a document
			/*
			 * { "name" : "MongoDB", "type" : "database", "count" : 1, "info" :
			 * { x : 203, y : 102 } }
			 */
			BasicDBObject doc = new BasicDBObject("name", "MongoDB")
					.append("type", "database")
					.append("count", 1)
					.append("info",
							new BasicDBObject("x", 203).append("y", 102));

			coll.insert(doc);

			// finding first document
			DBObject myDoc = coll.findOne();
			System.out.println("> found : " + myDoc);

			// adding multiple documents
			for (int i = 0; i < 100; i++) {
				coll.insert(new BasicDBObject("i", i));
			}

			// counting documents in a collection
			System.out.println("> count : " + coll.getCount());

			// using cursor to get all the documents
			DBCursor cursor = coll.find();
			try {
				while (cursor.hasNext()) {
					System.out.println("> cursor : " + cursor.next());
				}
			} finally {
				cursor.close();
			}

			// getting a single document with a query
			BasicDBObject query = new BasicDBObject("i", 71);

			cursor = coll.find(query);

			try {
				while (cursor.hasNext()) {
					System.out.println("> finding 71 : " + cursor.next());
				}
			} finally {
				cursor.close();
			}

			// getting a set of documents with a query
			// db.testCollection.find({"i": {"$gt": 50}})
			query = new BasicDBObject("i", new BasicDBObject("$gt", 50));
			// e.g. find all  where i > 50
			cursor = coll.find(query);

			try {
				while (cursor.hasNext()) {
					System.out.println("> query, i > 50 : " + cursor.next());
				}
			} finally {
				cursor.close();
			}

			// get a range, say 20 < i <= 30
			query = new BasicDBObject("i", new BasicDBObject("$gt", 20).append(
					"$lte", 30)); // i.e. 20 < i <= 30

			cursor = coll.find(query);

			try {
				while (cursor.hasNext()) {
					System.out.println("> 20 < i <= 30 : " + cursor.next());
				}
			} finally {
				cursor.close();
			}
			
			// create an index, ascending (1) or descending (-1)
			coll.createIndex(new BasicDBObject("i", 1));
			
			// Getting a List of Indexes on a Collection
			List<DBObject> list = coll.getIndexInfo();

	        for (DBObject o : list) {
	            System.out.println("> index info : " + o);
	        }

		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
