define(['models/AccountCriterion', 'collections/Accounts', 'sinon'], function (AccountCriterion, Accounts, sinon) {

    describe('Given AccountCriterion Model', function () {
        describe('when initialize', function () {
            it('should have defaults', function () {
                var accountCriterion = new AccountCriterion();
                expect(accountCriterion.get('name')).toBe('Account');
                expect(accountCriterion.get('title')).toBe('Account');
                expect(accountCriterion.accounts).toBeDefined();
            });
        });

        describe('when applying filter', function () {
            it('should not set filter if no accounts selected', function () {
                var accountCriterion = new AccountCriterion();
                accountCriterion.setFilter(true);
                expect(accountCriterion.accounts.hasSelection()).toBe(false);
                expect(accountCriterion.accounts.length).toBe(0);
                expect(accountCriterion.get('isApplied')).toBe(false);
            });

            it('sets filter if some accounts selected', function () {
                var accountCriterion = new AccountCriterion(),
                    stub = sinon.stub(accountCriterion.accounts, 'hasSelection', function () { return true; });

                accountCriterion.setFilter(true);
                expect(accountCriterion.get('isApplied')).toBe(true);
                stub.restore();
            });

            it('sets filter state by input', function () {
                var accountCriterion = new AccountCriterion(),
                    stub = sinon.stub(accountCriterion.accounts, 'hasSelection', function () { return true; });

                accountCriterion.setFilter(false);
                expect(accountCriterion.get('isApplied')).toBe(false);

                accountCriterion.setFilter({});
                expect(accountCriterion.get('isApplied')).toBe(false);

                accountCriterion.setFilter('true');
                expect(accountCriterion.get('isApplied')).toBe(false);

                accountCriterion.setFilter(1);
                expect(accountCriterion.get('isApplied')).toBe(false);

                stub.restore();
            });
        });

        describe('when preserving', function () {
            it('should return initial state', function () {
                var accountNumbers = [3,1,4,1,5,9],
                    accountCriterion = new AccountCriterion(),
                    stub = sinon.stub(accountCriterion.accounts, 'selectedAccountNumbers').returns(accountNumbers);

                var data = accountCriterion.preserve();

                expect(data.name).toBe('Account');
                expect(data.isApplied).toBe(false);
                expect(data.accountNumbers).toBe(accountNumbers);

                stub.restore();
            });

            it('should return current state', function () {
                var accountNumbers = [3,1,4,1,5,9],
                    accountCriterion = new AccountCriterion(),
                    stub = sinon.stub(accountCriterion.accounts, 'selectedAccountNumbers').returns(accountNumbers),
                    hasSelection = sinon.stub(accountCriterion.accounts, 'hasSelection', function () { return true; });

                accountCriterion.setFilter(true);

                var data = accountCriterion.preserve();

                expect(data.name).toBe('Account');
                expect(data.isApplied).toBe(true);
                expect(data.accountNumbers).toBe(accountNumbers);

                stub.restore();
            });
        });

        describe('when hydrating', function () {
            it('should select the account numbers and update filter state', function () {

                var accountCriterion = new AccountCriterion(),
                    mockAccounts = sinon.mock(accountCriterion.accounts),
                    data = {
                        isApplied: true,
                        accountNumbers: [2,3,5,8,13]
                    };

                mockAccounts.expects('selectBy').once().withArgs(data.accountNumbers);
                expect(accountCriterion.get('isApplied')).toBe(false);

                accountCriterion.hydrate(data);

                expect(accountCriterion.get('isApplied')).toBe(true);
                mockAccounts.verify();
                mockAccounts.restore();
            });

            it('should not hydrate with no data', function () {
                var accountCriterion = new AccountCriterion(),
                    spyAccountsSelectBy = sinon.spy(accountCriterion.accounts, 'selectBy'),
                    spySetFilter = sinon.spy(accountCriterion, 'setFilter');

                accountCriterion.hydrate();
                sinon.assert.notCalled(spyAccountsSelectBy);
                sinon.assert.notCalled(spySetFilter);

                spyAccountsSelectBy.restore();
                spySetFilter.restore();
            });

            it('should not hydrate with empty data', function () {
                var accountCriterion = new AccountCriterion(),
                    spyAccountsSelectBy = sinon.spy(accountCriterion.accounts, 'selectBy'),
                    spySetFilter = sinon.spy(accountCriterion, 'setFilter');

                accountCriterion.hydrate({});
                sinon.assert.notCalled(spyAccountsSelectBy);
                sinon.assert.notCalled(spySetFilter);

                spyAccountsSelectBy.restore();
                spySetFilter.restore();
            });

            it('should not hydrate with partial data', function () {
                var accountCriterion = new AccountCriterion(),
                    spyAccountsSelectBy = sinon.spy(accountCriterion.accounts, 'selectBy'),
                    spySetFilter = sinon.spy(accountCriterion, 'setFilter'),
                    data = {
                        accountNumbers: [1]
                    };

                accountCriterion.hydrate(data);
                sinon.assert.notCalled(spyAccountsSelectBy);
                sinon.assert.notCalled(spySetFilter);

                data = {
                    isApplied: false
                };
                accountCriterion.hydrate(data);
                sinon.assert.notCalled(spyAccountsSelectBy);
                sinon.assert.notCalled(spySetFilter);

                spyAccountsSelectBy.restore();
                spySetFilter.restore();
            });

            it('should not hydrate with invalid data', function () {
                var accountCriterion = new AccountCriterion(),
                    spyAccountsSelectBy = sinon.spy(accountCriterion.accounts, 'selectBy'),
                    spySetFilter = sinon.spy(accountCriterion, 'setFilter');

                var data = {
                    accountNumbers: 'foo',
                    isApplied: 'bar'
                };

                accountCriterion.hydrate(data);

                data = {
                    accountNumbers: [1],
                    isApplied: 'bar'
                };

                accountCriterion.hydrate(data);

                data = {
                    accountNumbers: 1,
                    isApplied: false
                };

                accountCriterion.hydrate(data);

                sinon.assert.notCalled(spyAccountsSelectBy);
                sinon.assert.notCalled(spySetFilter);

                spyAccountsSelectBy.restore();
                spySetFilter.restore();
            });
        });

        // TODO - the rest. queryCriteria, reset, validate ...

    });
});
