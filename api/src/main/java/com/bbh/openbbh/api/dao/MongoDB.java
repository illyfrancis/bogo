package com.bbh.openbbh.api.dao;

import java.net.UnknownHostException;

import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;

class MongoDB {
	
	static MongoClient mongo;

    static {
        try {
            mongo = new MongoClient("127.0.0.1", 27017);
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
