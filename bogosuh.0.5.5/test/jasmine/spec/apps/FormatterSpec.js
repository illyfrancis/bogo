// define(['apps/Formatter', 'moment'], function (Formatter, moment) {
define(['apps/Formatter'], function (Formatter) {

    describe('Formatter', function () {
        describe('when format dates with no argument', function () {
            it('should return empty string', function () {
                var formatted = Formatter.formatDate();
                expect(formatted).toBe('');
            });
        });

        describe('when format dates with an object', function () {
            it('should return empty string', function () {
                var formatted = Formatter.formatDate({});
                expect(formatted).toBe('');
            });
        });

        describe('when format dates with NaN', function () {
            it('should return empty string', function () {
                var formatted = Formatter.formatDate(NaN);
                expect(formatted).toBe('');
            });
        });

        describe('when format dates with a function', function () {
            it('should return empty string', function () {
                var formatted = Formatter.formatDate(function () {});
                expect(formatted).toBe('');
            });
        });

        describe('when format dates with current date time', function () {
            it('should return formatted string', function () {
                var time = new Date().getTime(),
                    expected = moment(time).format(Formatter.dateFormat),
                    formatted = Formatter.formatDate(time);

                expect(formatted).toBe(expected);
            });
        });
    });

});