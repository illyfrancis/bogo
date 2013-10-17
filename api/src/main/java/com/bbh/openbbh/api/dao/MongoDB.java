package com.bbh.openbbh.api.dao;

import java.net.UnknownHostException;

import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;

abstract class MongoDB {
	
	private static MongoClient mongo;

    static {
        try {
            String port = System.getProperty("db-port", "27017");
            mongo = new MongoClient("127.0.0.1", Integer.valueOf(port).intValue());
        } catch (UnknownHostException e) {
            throw new RuntimeException(e);
        } catch (MongoException e) {
            throw new RuntimeException(e);
        }
    }

    static DB getDB() {
    	return mongo.getDB("openbbh");
    }
}
