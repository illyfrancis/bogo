package com.bbh.reporting;


public class QueryParser {
	
	// given query = 
	// search?q=accountNumber:($in:"8123861","6133938");amount:($gt:500,$lt:1000);statusDate:14000000;clientRefId:"C371122161"
	
	public static void main(String... args) {
		QueryParser parser = new QueryParser();
		String query = "accountNumber:($in:\"8123861\",\"6133938\");statusDate:14000000";
//		String query = "accountNumber:($in:\"8123861\",\"6133938\");amount:($gt:500,$lt:1000);statusDate:14000000;clientRefId:\"C371122161\"";
		parser.foo(query);
	}

	void foo(String query) {
		String[] criteria = query.split(";");
		
		for (String criterion: criteria) {
			System.out.println("> " + criterion);
			
			int i = criterion.indexOf(":");
			if (i >= 0) {
				bar(criterion.substring(0, i), criterion.substring(i + 1));
			}
		}
	}
	
	private void bar(String name, String value) {
		System.out.println("  " + name + " : " + value);
		
		// check if value contains an operator
		if (value.indexOf("$") < 0) {
			noOps();
		} else {
			parseOps(value);
		}
	}

	private void parseOps(String value) {
		System.out.println("ops yeah");
	}
	
	private void noOps() {
		System.out.println("no ops");
	}
}
