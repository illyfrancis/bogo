describe("Given Account model", function() {

	describe("When instantiating an account", function() {

		it("should not be selected with default constructor", function() {
			var account = new app.models.Account();
			expect(account.get("selected")).toBe(false);
		});

		it("can be created with object literal", function() {
			var account = new app.models.Account({
				name: "ABC",
				number: "123"
			});

			expect(account.get("name")).toBe("ABC");
			expect(account.get("number")).toBe("123");
			expect(account.get("selected")).toBe(false);

			account = new app.models.Account({
				name: "XYZ",
				number: "123",
				selected: true
			});

			expect(account.get("name")).toBe("XYZ");
			expect(account.get("number")).toBe("123");
			expect(account.get("selected")).toBe(true);
		});

		it("toggles selected with select call", function() {
			var account = new app.models.Account();

			account.toggle();
			expect(account.get("selected")).toBe(true);

			account.toggle();
			expect(account.get("selected")).toBe(false);
		});

	});

});