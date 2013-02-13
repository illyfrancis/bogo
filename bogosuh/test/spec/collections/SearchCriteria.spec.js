describe("Given SearchCriteria collection", function() {

	var searchCriteria,
		accountCriteria,
		securityCriteria;

	beforeEach(function() {
		searchCriteria = new app.collections.SearchCriteria();
		accountCriteria = new app.models.ReportCriteria();
		securityCriteria = new app.models.ReportCriteria();
	});

	it("test getCriteria", function() {

		accountCriteria.set("isApplied", true);
		securityCriteria.set("isApplied", true);

		// mock out the criteria() function
		spyOn(accountCriteria, "query").andReturn("some test val");
		
		searchCriteria.add(accountCriteria);
		searchCriteria.add(securityCriteria);

		var reducer = searchCriteria.query();

		console.log("criteria : " + JSON.stringify(reducer));

		// expect(reducer.length).toBe(2);

	});

});