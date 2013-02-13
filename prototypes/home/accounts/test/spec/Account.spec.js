describe("Tests for Account model", function() {

	it("can be created with default values for its attributes.", function() {
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
	});

	it("toggles selected with select call", function() {
		var account = new app.models.Account();
		account.toggle();
		expect(account.get("selected")).toBe(true);
		account.toggle();
		expect(account.get("selected")).toBe(false);
	});
});