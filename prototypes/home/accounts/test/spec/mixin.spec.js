describe("For mixin test", function() {

    describe("Given AccountCriterion", function() {

        it("can export filter selection", function() {
            var accountCriterion = new AccountCriterion();
            var json = accountCriterion.freeze();
            expect(json.name).toEqual(accountCriterion.get("name"));
        });

        it("can import filter selection", function() {
            var accountCriterion = new AccountCriterion();
            accountCriterion.hydrate();
        });

        it("should know about account selection", function() {
            var accounts = new Accounts([
                {name:"ABC", number:"123", selected:true},
                {name:"XYZ", number:"234"}]);

            var accountCriterion = new AccountCriterion({filter: accounts});

            accountCriterion.getCriterion();
            accountCriterion.setFilter(json);

        });

    });


    describe("Given report Criteria", function() {

        it("can compose account filter and security filter in one", function() {


            var accountCriterion = new AccountCriterion();
            var securityCriterion = new SecurityCriterion();

            var reportCriteria = new Criteria();
            reportCriteria.add(accountCriterion);
            reportCriteria.add(securityCriterion);

            reportCriteria.each(function(filter) {
                filter.freeze();
            });

            expect(reportCriteria.length).toBe(2);

        });

    });

});