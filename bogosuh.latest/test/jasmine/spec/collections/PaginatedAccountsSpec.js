describe('Collection :: PaginatedAccounts', function () {

    var app = app || {};
    app.collections = app.collections || {};
    app.models = app.models || {};

    require(['collections/PaginatedAccounts', 'models/Account'], function (PaginatedAccounts, Account) {
        app.collections.PaginatedAccounts = PaginatedAccounts;
        app.models.Account = Account;
    });

    beforeEach(function () {
        this.accounts = new app.collections.PaginatedAccounts();
    });

    describe('creation', function () {
        it('must invoke init first', function () {
            expect(this.accounts.firstPage).not.toBeDefined();
            expect(this.accounts.currentPage).not.toBeDefined();
            expect(this.accounts.perPage).not.toBeDefined();
            expect(this.accounts.totalPages).not.toBeDefined();

            this.accounts.init();
            expect(this.accounts.firstPage).toBeDefined();
            expect(this.accounts.currentPage).toBeDefined();
            expect(this.accounts.perPage).toBeDefined();
            expect(this.accounts.totalPages).toBeDefined();
        });
    });

    describe('initialization', function () {
        it('should default to predefined configuration', function () {
            var config = this.accounts.paginator_ui;

            this.accounts.init();
            expect(this.accounts.firstPage).toEqual(config.firstPage);
            expect(this.accounts.currentPage).toEqual(config.currentPage);
            expect(this.accounts.perPage).toEqual(config.perPage);
            expect(this.accounts.totalPages).toEqual(config.totalPages);
        });
    });

    describe('.hasSelection()', function () {

        beforeEach(function () {
            this.accountOne = new app.models.Account({name:"one"});
            this.accountTwo = new app.models.Account();
            this.accountThree = new app.models.Account();
            this.accountFour = new app.models.Account();

            this.accounts.init();
            this.accounts.reset([this.accountOne, this.accountTwo, this.accountThree, this.accountFour]);
            this.accounts.pager();
        });

        it('should return false when there is no account', function () {
            this.accounts.reset();
            expect(this.accounts.length).toEqual(0);
            expect(this.accounts.hasSelection()).toEqual(false);
        });

        it('should return false if no account is selected', function () {
            expect(this.accounts.hasSelection()).toEqual(false);
        });

        it('should return true if one account is selected', function () {
            this.accountTwo.select(true);
            expect(this.accounts.hasSelection()).toEqual(true);

            this.accountTwo.toggle();
            expect(this.accounts.hasSelection()).toEqual(false);
        });

        it('should return false if one account is selected then toggled', function () {
            this.accountTwo.select(true);
            this.accountTwo.toggle();
            expect(this.accounts.hasSelection()).toEqual(false);
        });

        it('should return true if two accounts are selected', function () {
            this.accountTwo.select(true);
            this.accountFour.select(true);
            expect(this.accounts.hasSelection()).toEqual(true);
        });

        it('should return true if all accounts are selected', function () {
            this.accountOne.select(true);
            this.accountTwo.select(true);
            this.accountThree.select(true);
            this.accountFour.select(true);
            expect(this.accounts.hasSelection()).toEqual(true);
        });

        it('should return false if all accounts are selected then toggled', function () {
            this.accountOne.select(true);
            this.accountTwo.select(true);
            this.accountThree.select(true);
            this.accountFour.select(true);

            this.accountOne.toggle();
            this.accountTwo.toggle();
            this.accountThree.toggle();
            this.accountFour.toggle();
            expect(this.accounts.hasSelection()).toEqual(false);
        });

    });

    describe('.selectAll()', function () {
        beforeEach(function () {
            this.accountOne = new app.models.Account();
            this.accountTwo = new app.models.Account();
            this.accountThree = new app.models.Account();
            this.accountFour = new app.models.Account();

            this.accounts.init();
            this.accounts.reset([this.accountOne, this.accountTwo, this.accountThree, this.accountFour]);
            this.accounts.pager();
        });

        it('should only select on sortedAndFilteredModels', function () {
            this.accounts.selectAll(true);
            expect(this.accounts.sortedAndFilteredModels.length).toBe(4);
            expect(this.accountOne.attributes.selected).toEqual(true);
            expect(this.accountTwo.attributes.selected).toEqual(true);
            expect(this.accountThree.attributes.selected).toEqual(true);
            expect(this.accountFour.attributes.selected).toEqual(true);
        });

        it('should un-select with false', function () {
            this.accounts.selectAll(false);
            expect(this.accounts.sortedAndFilteredModels.length).toBe(4);
            expect(this.accountOne.attributes.selected).toEqual(false);
            expect(this.accountTwo.attributes.selected).toEqual(false);
            expect(this.accountThree.attributes.selected).toEqual(false);
            expect(this.accountFour.attributes.selected).toEqual(false);
        });

        it('should still select when nothing is passed in', function () {
            this.accounts.selectAll();
            expect(this.accounts.sortedAndFilteredModels.length).toBe(4);
            expect(this.accountOne.attributes.selected).toEqual(true);
            expect(this.accountTwo.attributes.selected).toEqual(true);
            expect(this.accountThree.attributes.selected).toEqual(true);
            expect(this.accountFour.attributes.selected).toEqual(true);
        });

        it('should still select when non-boolean is passed in', function () {
            this.accounts.selectAll("hello");
            expect(this.accounts.sortedAndFilteredModels.length).toBe(4);
            expect(this.accountOne.attributes.selected).toEqual(true);
            expect(this.accountTwo.attributes.selected).toEqual(true);
            expect(this.accountThree.attributes.selected).toEqual(true);
            expect(this.accountFour.attributes.selected).toEqual(true);
        });

        it('should trigger change event', function () {
            var eventHandler = jasmine.createSpy('eventHandler');

            this.accountOne.on("change", eventHandler, this);
            this.accounts.on("change", eventHandler, this);

            this.accountOne.toggle();
            expect(eventHandler).toHaveBeenCalled();
            expect(eventHandler.calls.length).toEqual(2);
        });

        it('should not trigger change event', function () {
            var eventHandler = jasmine.createSpy('eventHandler');

            this.accountOne.on("change", eventHandler, this);
            this.accounts.on("change", eventHandler, this);

            this.accounts.selectAll(true);
            expect(eventHandler).not.toHaveBeenCalled();
        });
    });

    describe('.selectedAccountNumbers()', function () {
        beforeEach(function () {
            this.accountOne = new app.models.Account({name: "One", number: "111"});
            this.accountTwo = new app.models.Account({name: "Two", number: "222"});
            this.accountThree = new app.models.Account({name: "Three", number: "333"});
            this.accountFour = new app.models.Account({name: "Four", number: "444"});

            this.accounts.init();
            this.accounts.reset([this.accountOne, this.accountTwo, this.accountThree, this.accountFour]);
            this.accounts.pager();
        });

        it('should return an empty array when there is no account', function () {
            this.accounts.reset();
            expect(this.accounts.selectedAccountNumbers().length).toEqual(0);
        });

        it('should return an empty array when nothing is selected', function () {
            expect(this.accounts.selectedAccountNumbers().length).toEqual(0);
        });

        it('should return the selected account numbers', function () {
            this.accountOne.select(true);
            this.accountFour.select(true);
            var selected = this.accounts.selectedAccountNumbers();
            expect(selected.length).toEqual(2);
            expect(selected).toContain(this.accountOne.get("number"));
            expect(selected).toContain(this.accountFour.get("number"));
            expect(selected).not.toContain(this.accountTwo.get("number"));
            expect(selected).not.toContain(this.accountThree.get("number"));
        });

    });

    describe('.selectBy()', function() {
        beforeEach(function () {
            this.accountOne = new app.models.Account({name: "One", number: "111"});
            this.accountTwo = new app.models.Account({name: "Two", number: "222"});
            this.accountThree = new app.models.Account({name: "Three", number: "333"});
            this.accountFour = new app.models.Account({name: "Four", number: "444"});

            this.accounts.init();
            this.accounts.reset([this.accountOne, this.accountTwo, this.accountThree, this.accountFour]);
            this.accounts.pager();
        });

        it('should select specified account', function () {
            this.accounts.selectBy(["222"]);
            expect(this.accountTwo.get("selected")).toEqual(true);

            expect(this.accountOne.get("selected")).toEqual(false);
            expect(this.accountThree.get("selected")).toEqual(false);
            expect(this.accountFour.get("selected")).toEqual(false);
        });

        it('should select specified accounts', function () {
            this.accounts.selectBy(["444", "222"]);
            expect(this.accountTwo.get("selected")).toEqual(true);
            expect(this.accountFour.get("selected")).toEqual(true);

            expect(this.accountOne.get("selected")).toEqual(false);
            expect(this.accountThree.get("selected")).toEqual(false);
        });

        it('should not select when passing non array', function () {
            this.accounts.selectBy("111");
            expect(this.accountOne.get("selected")).toEqual(false);
            expect(this.accountTwo.get("selected")).toEqual(false);
            expect(this.accountThree.get("selected")).toEqual(false);
            expect(this.accountFour.get("selected")).toEqual(false);
        });
    });

});