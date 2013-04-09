package com.bbh.openbbh.api.dao;

import static com.google.common.collect.Lists.newArrayList;
import static java.util.regex.Pattern.*;

import java.util.List;
import java.util.regex.Pattern;

import org.jongo.Jongo;
import org.jongo.MongoCollection;

import com.bbh.openbbh.api.resource.SecurityResource.Model;
import com.bbh.openbbh.api.resource.SecurityResource.SecurityId;

public class Securities {

	private static MongoCollection securities;

	static {
		Jongo jongo = new Jongo(MongoDB.getDB());
		securities = jongo.getCollection("securities");
	}

	public static List<Model> findBySecurityId(String secId) {
		Pattern idPattern = Pattern.compile("^" + secId, CASE_INSENSITIVE);
		String query = "{$or: [{cusip: #}, {sedol: #}, {isin: #}, {custody: #}]}";
		
		return newArrayList(securities.find(query, idPattern, idPattern,
				idPattern, idPattern).limit(5).as(Model.class));
	}

	public static List<SecurityId> findBySecurityId2(String secId) {
		Pattern idPartial = Pattern.compile("^" + secId, CASE_INSENSITIVE);
		List<SecurityId> securityIds = findByCusip(idPartial);
		if (securityIds.isEmpty()) {
			securityIds = findBySedol(idPartial);
		}
		
		if (securityIds.isEmpty()) {
			securityIds = findByIsin(idPartial);
		}
		
		if (securityIds.isEmpty()) {
			securityIds = findByCustody(idPartial);
		}
		
		return securityIds;
	}

	public static List<Model> findAll() {
		return newArrayList(securities.find().as(Model.class));
	}

	private static List<SecurityId> findByCusip(Pattern cusip) {
		Iterable<Model> models = securities.find("{cusip: #}", cusip)
				.projection("{cusip: 1}").limit(5).as(Model.class);

		List<SecurityId> securityIds = newArrayList();
		for (Model model : models) {
			securityIds.add(SecurityId.buildWithCusip(model));
		}
		return securityIds;
	}

	private static List<SecurityId> findBySedol(Pattern sedol) {
		Iterable<Model> models = securities.find("{sedol: #}", sedol)
				.projection("{sedol: 1}").limit(5).as(Model.class);

		List<SecurityId> securityIds = newArrayList();
		for (Model model : models) {
			securityIds.add(SecurityId.buildWithSedol(model));
		}
		return securityIds;
	}

	private static List<SecurityId> findByIsin(Pattern isin) {
		Iterable<Model> models = securities.find("{isin: #}", isin)
				.projection("{isin: 1}").limit(5).as(Model.class);

		List<SecurityId> securityIds = newArrayList();
		for (Model model : models) {
			securityIds.add(SecurityId.buildWithIsin(model));
		}
		return securityIds;
	}

	private static List<SecurityId> findByCustody(Pattern custody) {
		Iterable<Model> models = securities.find("{custody: #}", custody)
				.projection("{custody: 1}").limit(5).as(Model.class);

		List<SecurityId> securityIds = newArrayList();
		for (Model model : models) {
			securityIds.add(SecurityId.buildWithCustody(model));
		}
		return securityIds;
	}
}
