describe("Given SearchCriteria collection", function() {

	var searchCriteria,
		accountCriteria,
		securityCriteria;

	beforeEach(function() {
		searchCriteria = new app.collections.SearchCriteria();
		accountCriteria = new app.models.AccountCriteria();
		securityCriteria = new app.models.SecurityCriteria();
	});

	it("test getCriteria", function() {

		accountCriteria.set("isApplied", true);
		securityCriteria.set("isApplied", true);

		// mock out the criteria() function
		spyOn(accountCriteria, "criteria").andReturn("some test val");
		
		searchCriteria.add(accountCriteria);
		searchCriteria.add(securityCriteria);

		var reducer = searchCriteria.getCriteria();

		console.log("criteria : " + JSON.stringify(reducer));

		// expect(reducer.length).toBe(2);

	});

});