define(['apps/Formatter','models/Transaction', 'moment'], function (Formatter, Transaction, moment) {

    describe('Given Transaction Model', function () {

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
                    expected = moment(time).format(Formatter.dateFormat);

                var formatted = transaction.toFormattedJSON();

                expect(formatted.accountNumber).toBe(data.accountNumber);
                expect(formatted.settlementDate).toBe(expected);
            });
        });

    });
});