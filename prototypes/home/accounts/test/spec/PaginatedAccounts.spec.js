describe("Given PaginatedAccounts", function() {

	beforeEach(function() {
		var fixture = this.fixtures.Accounts.valid;
		var urlPattern = new RegExp("/accounts");
		this.server = sinon.fakeServer.create();
		this.server.respondWith("GET", urlPattern, this.validResponse(fixture));
	});

	afterEach(function() {
		this.server.restore();
	});

	describe("when creating an instance of PaginatedAccounts", function() {

		it("there should be no accounts", function() {
			var accounts = new app.collections.PaginatedAccounts();
			expect(accounts.length).toBe(0);
		});

	});

	describe("when accounts are fetched with valid data", function() {

		var accounts;

		it("should contain accounts", function() {

			accounts = new app.collections.PaginatedAccounts();
			var callback = sinon.spy();

			accounts.on("reset", callback);
			// accounts.on("all", callback);
			accounts.fetch({
				success: function() {
					accounts.pager();
				}
			});

			this.server.respond();

			expect(callback.called).toBeTruthy();
			expect(accounts.length).toBeGreaterThan(0);

			// accounts.off("reset");
		});

		it("should have pagination info", function() {

			var info = accounts.info();
			expect(info).toBeDefined();
			expect(info.currentPage).toBe(1); // just loaded.
		});

		it("should have correct number of account items", function() {

			var pageSize = accounts.info().perPage;
			expect(accounts.length).toBe(pageSize);

		});

		it("fires only 'reset' event when navigating to next page", function() {

			var resetSpy = sinon.spy();
			var addSpy = sinon.spy();
			accounts.on("reset", resetSpy);
			accounts.on("add", addSpy);

			// navigate to the next page
			accounts.nextPage();

			expect(resetSpy.called).toBeTruthy();
			expect(addSpy.called).not.toBeTruthy();
			// console.log(">>>>");
			// console.log("> after" + JSON.stringify(accounts.models));
		});

		describe("when filtered by exact account number", function() {
			it("should find one account", function() {
				var filterField = "number";
				var filterValue = "0015594";

				accounts.setFilter(filterField, filterValue);

				expect(accounts.length).toBe(1);
				expect(accounts.at(0).get("name")).toBe("SHELTON GREATER CHINA FUND");
			});
		});

		describe("when filtered by partial account number", function() {
			it("should find multiple accounts", function() {
				var filterField = "number";
				var filterValue = "^006";	// starting with 006

				// clear previous filter?
				accounts.setFilter(filterField, "");

				accounts.setFieldFilter([
					{field: "number", type: "pattern", value: new RegExp(filterValue, "igm")}
				]);

				expect(accounts.length).toBe(6);
			});
		});

		describe("when filtered by partial account number and partial name", function() {
			it("should find multiple accounts", function() {

				// clear previous filter?
				// accounts.setFilter(filterField, "");

				accounts.setFieldFilter([
					{field: "number", type: "pattern", value: new RegExp("^61", "igm")},
					{field: "name", type: "pattern", value: new RegExp("japan", "igm")}
				]);

				expect(accounts.length).toBe(15);

				// remove filters
				// try #1, clear out fields
				// accounts.fieldFilterRules = [];
				// accounts.pager();
				// accounts.info();

				// try #2. set the field rules again
				accounts.setFieldFilter([
					// {field: "name", type: "pattern", value: new RegExp("")}
					{field: "selected", type: "function", value: function(fieldValue) {
						return !fieldValue;	// selected == true
					}}
				]);

				expect(accounts.information.totalRecords).toBe(5408);
			});
		});

		describe("when sorting by name", function() {

			it("should list the accounts in ascending order", function() {
				accounts.setSort("name", "asc");

				// var prevName, wrongOrder = false;
				accounts.each(function(account, i) {
					if (i > 0) {
						if (account.get("name") < prevName) {
							wrongOrder = true;
						}
					}
					prevName = account.get("name");
				});

				// expect(wrongOrder).toEqual(false);
			});

			it("should list the accounts in descending order", function() {
				accounts.setSort("name", "desc");

				var prevName, wrongOrder = false;
				accounts.each(function(account, i) {
					if (i > 0) {
						if (account.get("name") > prevName) {
							wrongOrder = true;
						}
					}
					prevName = account.get("name");
				});

				expect(wrongOrder).toEqual(false);
			});
		});


	});

	xdescribe("when accounts are feteched", function() {

		beforeEach(function() {
			this.accounts = new app.collections.PaginatedAccounts();
			this.accounts.fetch();
			this.server.respond();
			// this.accounts.pager();
		});

		afterEach(function() {
			// nothing to do yet.
		});

		describe("and sorted by name", function() {

			it("should list the accounts in ascending order", function() {
				expect(true).toBeTruthy();
			});

		});

		describe("and sorted by name", function() {
			
			it("should list the accounts in ascending order", function() {

				// this.accounts.setSort("name", "asc");
				this.accounts.setSort("name", "asc");

				// this.accounts.pager();

				// var i;
				// for (i = 0; i < 20; i++) {
				// 	console.log("First : " + JSON.stringify(this.accounts.at(i)));
				// }

				var prevName, wrongOrder = false;
				this.accounts.each(function(account, i) {
					if (i > 0) {
						if (account.get("name") < prevName) {
							wrongOrder = true;
						}
					}
					prevName = account.get("name");
				});

				expect(wrongOrder).toEqual(false);
			});

		});

	});
});

describe("Given subset of PaginatedAccounts", function() {

	beforeEach(function() {
		var fixture = this.fixtures.AccountsSubset.valid;
		var urlPattern = new RegExp("/accounts");
		this.server = sinon.fakeServer.create();
		this.server.respondWith("GET", urlPattern, this.validResponse(fixture));

		this.accounts = new app.collections.PaginatedAccounts();
		this.accounts.fetch();
		this.server.respond();
		this.accounts.pager();
	});

	afterEach(function() {
		this.server.restore();
	});

	it("does foo", function() {
		var x = this.accounts.length;
		console.log("x : " + x);

		// this.accounts.selectAll();

		this.accounts.filter(function(account) {
			console.log(">> " + account);
		}, this);

		// _.filter(this.accounts, function(account) {
		// 	console.log(":" + account.get("selected"));
		// }, this);

	});
});

describe("when create PaginatedAccounts with reset", function() {

	it("should have correct pagination info", function() {
		var accounts = new app.collections.PaginatedAccounts();
		accounts.reset(this.fixtures.AccountsSubset.valid.values);
	});
});