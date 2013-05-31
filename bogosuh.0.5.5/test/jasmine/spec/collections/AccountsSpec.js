define(['collections/Accounts', 'models/Account'], function (Accounts, Account) {

    describe('Given Accounts Collection', function () {

        describe('when initialize', function () {
            it('must invoke init first', function () {
                var accounts = new Accounts();

                expect(accounts.firstPage).not.toBeDefined();
                expect(accounts.currentPage).not.toBeDefined();
                expect(accounts.perPage).not.toBeDefined();
                expect(accounts.totalPages).not.toBeDefined();

                accounts.init();

                expect(accounts.firstPage).toBeDefined();
                expect(accounts.currentPage).toBeDefined();
                expect(accounts.perPage).toBeDefined();
                expect(accounts.totalPages).toBeDefined();
            });

            it('should default to predefined configuration', function () {
                var accounts = new Accounts(),
                    config = accounts.paginator_ui;

                accounts.init();
                expect(accounts.firstPage).toEqual(config.firstPage);
                expect(accounts.currentPage).toEqual(config.currentPage);
                expect(accounts.perPage).toEqual(config.perPage);
                expect(accounts.totalPages).toEqual(config.totalPages);
            });
        });

        describe('hasSelection()', function () {

            var accounts, accountOne, accountTwo, accountThree, accountFour;

            beforeEach(function () {
                accounts = new Accounts();
                accountOne = new Account({name:"one"});
                accountTwo = new Account();
                accountThree = new Account();
                accountFour = new Account();

                // accounts.init(); <--- no longer needed after upgrade to 0.7.0
                accounts.reset([accountOne, accountTwo, accountThree, accountFour]);
                accounts.pager();
            });

            afterEach(function () {
                accounts = null;
                accountOne = null;
                accountTwo = null;
                accountThree = null;
                accountFour = null;
            });

            it('should return false when there is no account', function () {
                accounts.reset();
                expect(accounts.length).toEqual(0);
                expect(accounts.hasSelection()).toEqual(false);
            });

            it('should return false if no account is selected', function () {
                expect(accounts.hasSelection()).toEqual(false);
            });

            it('should return true if one account is selected', function () {
                accountTwo.select(true);
                expect(accounts.hasSelection()).toEqual(true);

                accountTwo.toggle();
                expect(accounts.hasSelection()).toEqual(false);
            });

            it('should return false if one account is selected then toggled', function () {
                accountTwo.select(true);
                accountTwo.toggle();
                expect(accounts.hasSelection()).toEqual(false);
            });

            it('should return true if two accounts are selected', function () {
                accountTwo.select(true);
                accountFour.select(true);
                expect(accounts.hasSelection()).toEqual(true);
            });

            it('should return true if all accounts are selected', function () {
                accountOne.select(true);
                accountTwo.select(true);
                accountThree.select(true);
                accountFour.select(true);
                expect(accounts.hasSelection()).toEqual(true);
            });

            it('should return false if all accounts are selected then toggled', function () {
                accountOne.select(true);
                accountTwo.select(true);
                accountThree.select(true);
                accountFour.select(true);

                accountOne.toggle();
                accountTwo.toggle();
                accountThree.toggle();
                accountFour.toggle();
                expect(accounts.hasSelection()).toEqual(false);
            });

        });

        describe('selectAll()', function () {

            var accounts, accountOne, accountTwo, accountThree, accountFour;

            beforeEach(function () {
                accounts = new Accounts();
                accountOne = new Account();
                accountTwo = new Account();
                accountThree = new Account();
                accountFour = new Account();

                accounts.init(); //<--- no longer needed after upgrade to 0.7.0
                accounts.reset([accountOne, accountTwo, accountThree, accountFour]);
                accounts.pager();
            });

            afterEach(function () {
                accounts = null;
                accountOne = null;
                accountTwo = null;
                accountThree = null;
                accountFour = null;
            });

            it('should only select on sortedAndFilteredModels', function () {
                accounts.selectAll(true);
                expect(accounts.sortedAndFilteredModels.length).toBe(4);
                expect(accountOne.attributes.selected).toEqual(true);
                expect(accountTwo.attributes.selected).toEqual(true);
                expect(accountThree.attributes.selected).toEqual(true);
                expect(accountFour.attributes.selected).toEqual(true);
            });

            it('should un-select with false', function () {
                accounts.selectAll(false);
                expect(accounts.sortedAndFilteredModels.length).toBe(4);
                expect(accountOne.attributes.selected).toEqual(false);
                expect(accountTwo.attributes.selected).toEqual(false);
                expect(accountThree.attributes.selected).toEqual(false);
                expect(accountFour.attributes.selected).toEqual(false);
            });

            it('should still select when nothing is passed in', function () {
                accounts.selectAll();
                expect(accounts.sortedAndFilteredModels.length).toBe(4);
                expect(accountOne.attributes.selected).toEqual(true);
                expect(accountTwo.attributes.selected).toEqual(true);
                expect(accountThree.attributes.selected).toEqual(true);
                expect(accountFour.attributes.selected).toEqual(true);
            });

            it('should still select when non-boolean is passed in', function () {
                accounts.selectAll("hello");
                expect(accounts.sortedAndFilteredModels.length).toBe(4);
                expect(accountOne.attributes.selected).toEqual(true);
                expect(accountTwo.attributes.selected).toEqual(true);
                expect(accountThree.attributes.selected).toEqual(true);
                expect(accountFour.attributes.selected).toEqual(true);
            });

            it('should trigger change event', function () {
                var eventHandler = jasmine.createSpy('eventHandler');

                accountOne.on("change", eventHandler, this);
                accounts.on("change", eventHandler, this);

                accountOne.toggle();
                expect(eventHandler).toHaveBeenCalled();
                expect(eventHandler.calls.length).toEqual(2);
            });

            it('should not trigger change event', function () {
                var eventHandler = jasmine.createSpy('eventHandler');

                accountOne.on("change", eventHandler, this);
                accounts.on("change", eventHandler, this);

                accounts.selectAll(true);
                expect(eventHandler).not.toHaveBeenCalled();
            });
        });

        describe('selectedAccountNumbers()', function () {

            var accounts, accountOne, accountTwo, accountThree, accountFour;

            beforeEach(function () {
                accounts = new Accounts();
                accountOne = new Account({name: "One", number: "111"});
                accountTwo = new Account({name: "Two", number: "222"});
                accountThree = new Account({name: "Three", number: "333"});
                accountFour = new Account({name: "Four", number: "444"});

                // accounts.init(); <--- no longer needed after upgrade to 0.7.0
                accounts.reset([accountOne, accountTwo, accountThree, accountFour]);
                accounts.pager();
            });

            afterEach(function () {
                accounts = null;
                accountOne = null;
                accountTwo = null;
                accountThree = null;
                accountFour = null;
            });

            it('should return an empty array when there is no account', function () {
                accounts.reset();
                expect(accounts.selectedAccountNumbers().length).toEqual(0);
            });

            it('should return an empty array when nothing is selected', function () {
                expect(accounts.selectedAccountNumbers().length).toEqual(0);
            });

            it('should return the selected account numbers', function () {
                accountOne.select(true);
                accountFour.select(true);
                var selected = accounts.selectedAccountNumbers();
                expect(selected.length).toEqual(2);
                expect(selected).toContain(accountOne.get("number"));
                expect(selected).toContain(accountFour.get("number"));
                expect(selected).not.toContain(accountTwo.get("number"));
                expect(selected).not.toContain(accountThree.get("number"));
            });

        });

        describe('selectBy()', function() {
            var accounts, accountOne, accountTwo, accountThree, accountFour;

            beforeEach(function () {
                accounts = new Accounts();
                accountOne = new Account({name: "One", number: "111"});
                accountTwo = new Account({name: "Two", number: "222"});
                accountThree = new Account({name: "Three", number: "333"});
                accountFour = new Account({name: "Four", number: "444"});

                // accounts.init(); <--- no longer needed after upgrade to 0.7.0
                accounts.reset([accountOne, accountTwo, accountThree, accountFour]);
                accounts.pager();
            });

            afterEach(function () {
                accounts = null;
                accountOne = null;
                accountTwo = null;
                accountThree = null;
                accountFour = null;
            });

            it('should select specified account', function () {
                accounts.selectBy(["222"]);
                expect(accountTwo.get("selected")).toEqual(true);

                expect(accountOne.get("selected")).toEqual(false);
                expect(accountThree.get("selected")).toEqual(false);
                expect(accountFour.get("selected")).toEqual(false);
            });

            it('should select specified accounts', function () {
                accounts.selectBy(["444", "222"]);
                expect(accountTwo.get("selected")).toEqual(true);
                expect(accountFour.get("selected")).toEqual(true);

                expect(accountOne.get("selected")).toEqual(false);
                expect(accountThree.get("selected")).toEqual(false);
            });

            it('should not select when passing non array', function () {
                accounts.selectBy("111");
                expect(accountOne.get("selected")).toEqual(false);
                expect(accountTwo.get("selected")).toEqual(false);
                expect(accountThree.get("selected")).toEqual(false);
                expect(accountFour.get("selected")).toEqual(false);
            });
        });

    });
});
