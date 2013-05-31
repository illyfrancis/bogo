define(['models/Account'], function (Account) {

    describe('Account Model', function () {

        var account,
            mockData = {
                name: "TestAccount",
                number: "A12345"
            };

        beforeEach(function () {
            account = new Account(mockData);
        });

        describe('when initialize', function () {
            it('should be initialized with mock data and not selected', function () {
                expect(account.get('name')).toEqual('TestAccount');
                expect(account.get('number')).toEqual('A12345');
                expect(account.get('selected')).toEqual(false);
            });
        });

        describe('when toggle()', function () {
            it('should select when toggled once', function () {
                account.toggle();
                expect(account.get('selected')).toEqual(true);
            });

            it('should not select when toggled twice', function () {
                account.toggle();
                account.toggle();
                expect(account.get('selected')).toEqual(false);
            });

            it('should trigger change event when toggled', function () {
                var triggered = false;
                account.on("change:selected", function () {
                    triggered = true;
                });

                account.toggle();
                expect(triggered).toEqual(true);
            });
        });

        describe('when select()', function () {
            it('should select with true', function () {
                account.select(true);
                expect(account.get('selected')).toEqual(true);
            });

            it('should not select when called with false', function () {
                account.select(false);
                expect(account.get('selected')).toEqual(false);
            });

            it('should not select when called with non-boolean', function () {
                account.select("true");
                expect(account.get('selected')).toEqual(false);
            });

            it('should trigger change event', function () {
                var triggered = false;
                account.on("change:selected", function () {
                    triggered = true;
                });

                account.select(true);
                expect(triggered).toEqual(true);
            });

            it('should not trigger change event when state does not change', function () {
                var triggered = false;
                account.on("change:selected", function () {
                    triggered = true;
                });

                account.select(false);
                expect(triggered).toEqual(false);
            });
        });

    });
});
