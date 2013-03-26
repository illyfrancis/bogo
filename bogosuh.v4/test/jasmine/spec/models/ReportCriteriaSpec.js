describe('Model :: ReportCriteria', function () {

    beforeEach(function () {
        var self = this,
            done = false;

        require(['models/ReportCriteria'], function (ReportCriteria) {
            self.models = {};
            self.models.ReportCriteria = ReportCriteria;
            done = true;
        });

        waitsFor(function () {
            return done;
        }, "Create Models");
    });

    describe('.initialize()', function () {
        it('should hydrate with restrictions on initialize', function () {
            var mockRestriction = { dummy: 123 },
                criteria = new this.models.ReportCriteria({restrictions: mockRestriction});

            spyOn(criteria, "hydrate");
            criteria.initialize();
            expect(criteria.hydrate).toHaveBeenCalledWith(mockRestriction);
        });
    });

    describe('.parse()', function () {
        it('mixin AccountCriteria', function () {
            var accountCriteria = new this.models.ReportCriteria();
            accountCriteria.parse({name: "AccountCriteria"});
            expect(accountCriteria.paginatedAccounts).toBeDefined();
        });
    });
});