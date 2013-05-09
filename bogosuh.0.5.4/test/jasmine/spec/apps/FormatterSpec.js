describe('Given a Formatter', function () {

    var formatter;

    beforeEach(function () {
        if (_.isUndefined(formatter)) {
            var done = false;

            require(['apps/Formatter'], function (util) {
                formatter = util;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get class");
        }
    });

    afterEach(function () {
    });

    describe('when format dates', function () {

        it('should return empty string for no arg', function () {
            var formatted = formatter.formatDate();
            expect(formatted).toBe('');
        });

        it('should return empty string for an object', function () {
            var formatted = formatter.formatDate({});
            expect(formatted).toBe('');
        });

        it('should return empty string for NaN', function () {
            var formatted = formatter.formatDate(NaN);
            expect(formatted).toBe('');
        });

        it('should return empty string for a function', function () {
            var formatted = formatter.formatDate(function () {});
            expect(formatted).toBe('');
        });

        it('should return formatted string', function () {
            var time = new Date().getTime(),
                expected = moment(time).format(formatter.dateFormat),
                formatted = formatter.formatDate(time);

            expect(formatted).toBe(expected);
        });
    });

});