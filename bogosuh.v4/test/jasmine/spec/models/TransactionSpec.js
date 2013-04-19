describe('Given Transaction Model', function () {

    var Transaction;

    beforeEach(function () {
        if (_.isUndefined(Transaction)) {
            var done = false;

            require(['models/Transaction'], function (model) {
                Transaction = model;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get model class");
        }
    });

    afterEach(function () {
    });

    describe('when formats date', function () {
        var transaction;
        beforeEach(function () {
            transaction = new Transaction();
        });

        it('should return empty string for no arg', function () {
            var formatted = transaction.formatDate();
            expect(formatted).toBe('');
        });

        it('should return empty string for an object', function () {
            var formatted = transaction.formatDate({});
            expect(formatted).toBe('');
        });

        it('should return empty string for NaN', function () {
            var formatted = transaction.formatDate(NaN);
            expect(formatted).toBe('');
        });

        it('should return empty string for a function', function () {
            var formatted = transaction.formatDate(function () {});
            expect(formatted).toBe('');
        });

        it('should return formatted string', function () {
            var time = new Date().getTime(),
                expected = moment(time).format(transaction.dateFormat),
                formatted = transaction.formatDate(time);

            expect(formatted).toBe(expected);
        });
    });

    describe('when invoke toFormattedJSON', function () {
        it('returns empty settlement date', function () {
            var data = {
                    accountNumber: '12345',
                    settlementDate: ''
                },
                transaction = new Transaction(data);

            var formatted = transaction.toFormattedJSON();

            expect(formatted.accountNumber).toBe(data.accountNumber);
            expect(formatted.settlementDate).toBe('');
        });

        it('returns formatted settlement date', function () {
            var time = new Date().getTime(),
                data = {
                    accountNumber: '12345',
                    settlementDate: time
                },
                transaction = new Transaction(data),
                expected = moment(time).format(transaction.dateFormat);

            var formatted = transaction.toFormattedJSON();

            expect(formatted.accountNumber).toBe(data.accountNumber);
            expect(formatted.settlementDate).toBe(expected);
        });
    });

});