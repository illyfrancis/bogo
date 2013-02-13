describe('Model :: AccountCriteria', function () {

    beforeEach(function () {
        var self = this,
            done = false;

        require([
            'models/AccountCriteria',
            'models/ReportCriteria',
            'collections/PaginatedAccounts'            
        ], function (AccountCriteria, ReportCriteria, PaginatedAccounts) {
            self.models = {};
            self.collections = {};
            self.models.AccountCriteria = AccountCriteria;
            self.models.ReportCriteria = ReportCriteria;
            self.collections.PaginatedAccounts = PaginatedAccounts;
            done = true;
        });

        waitsFor(function () {
            return done;
        }, "Create Models");
    });

    describe('.query()', function () {
        it('should invoke selectedAccountNumbers on paginatedAccounts', function () {

            // mock paginated accounts
            var selections = ['1', '2'],
                paginatedAccounts = new this.collections.PaginatedAccounts();

            paginatedAccounts.init();
            paginatedAccounts.reset();
            paginatedAccounts.pager();

            spyOn(this.models.AccountCriteria, "paginatedAccounts").andReturn(paginatedAccounts);
            spyOn(paginatedAccounts, "selectedAccountNumbers").andReturn(selections);

            expect(this.models.AccountCriteria.query()).toEqual(selections);
            expect(this.models.AccountCriteria.paginatedAccounts).toHaveBeenCalled();
            expect(paginatedAccounts.selectedAccountNumbers).toHaveBeenCalled();
        });
    });

    describe('.hydrate()', function () {
        it('should select the accounts in paginatedAccounts by specified account numbers', function () {
            var accountNumbers = ['1','2'],
                // mock paginated accounts
                paginatedAccounts = new this.collections.PaginatedAccounts();

            paginatedAccounts.init();
            paginatedAccounts.reset();
            paginatedAccounts.pager();

            spyOn(this.models.AccountCriteria, "paginatedAccounts").andReturn(paginatedAccounts);
            spyOn(paginatedAccounts, "selectBy");

            this.models.AccountCriteria.hydrate({
                accountNumbers: accountNumbers
            });

            expect(this.models.AccountCriteria.paginatedAccounts).toHaveBeenCalled();
            expect(paginatedAccounts.selectBy).toHaveBeenCalledWith(accountNumbers);
        });
    });

    describe('.xxx()', function () {
        it('some', function () {

        });
    });



});