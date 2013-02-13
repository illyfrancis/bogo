describe('Model :: DateRange', function () {

    beforeEach(function () {
        var that = this,
            done = false;

        require(['models/DateRange'], function (DateRange) {
            that.DateRange = DateRange;
            done = true;
        });

        waitsFor(function () {
            return done;
        }, "Create Models");
    });

    afterEach(function () {});

    describe('initialize', function () {
        it('should be initialized with today as default', function () {
            var dateRange = new this.DateRange();
            expect(dateRange.get('type')).toEqual('today');
        });

        it('should initialize with today', function () {
            var dateRange = new this.DateRange({
                type: 'today'
            });
            expect(dateRange.get('type')).toEqual('today');
        });

        it('should initialize with yesterday', function () {
            var dateRange = new this.DateRange({
                type: 'yesterday'
            });
            expect(dateRange.get('type')).toEqual('yesterday');
        });

        it('should initialize with last7days', function () {
            var dateRange = new this.DateRange({
                type: 'last7days'
            });
            expect(dateRange.get('type')).toEqual('last7days');
        });

        it('should initialize with lastweek', function () {
            var dateRange = new this.DateRange({
                type: 'lastweek'
            });
            expect(dateRange.get('type')).toEqual('lastweek');
        });

        it('should initialize with lastmonth', function () {
            var dateRange = new this.DateRange({
                type: 'lastmonth'
            });
            expect(dateRange.get('type')).toEqual('lastmonth');
        });

        it('should initialize with customdate', function () {
            var dateRange = new this.DateRange({
                type: 'customdate'
            });
            expect(dateRange.get('type')).toEqual('customdate');
        });
    });

    describe('.yesterday()', function () {
        it('should be set to yesterday', function () {
            var dateRange = new this.DateRange();
            dateRange.yesterday();
            // TODO - how should I test this?
        });
    });

    describe('.changeType(\'yesterday\')', function () {
        it('should trigger change event and set to yesterday', function () {
            var triggered = false;
            var dateRange = new this.DateRange();
            dateRange.on("change", function () {
                triggered = true;
            });
            dateRange.changeType('yesterday');
            expect(triggered).toEqual(true);
            expect(dateRange.get('type')).toEqual('yesterday');
        });
    });

    describe('.changeType(\'last year\')', function () {
        it('should not trigger change event for unknown type', function () {
            var triggered = false;
            var dateRange = new this.DateRange();
            dateRange.on("change", function () {
                triggered = true;
            });
            dateRange.changeType('last year');
            expect(triggered).toEqual(false);
            expect(dateRange.get('type')).toEqual('today');
        });
    });

});