describe('Load AccountList View', function () {
    var Accounts, AccountList;

    beforeEach(function() {

        this.addMatchers(sinonJasmine.getMatchers());

        if (_.isUndefined(AccountList)) {
            var done = false;

            require([
                'collections/Accounts',
                'views/AccountList'
            ], function (_Accounts, _AccountList) {
                // load the classes
                Accounts = _Accounts;
                AccountList = _AccountList;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get SUD");
        }
    });

    afterEach(function() {
    });

    describe('Given AccountList view', function () {
        var accounts, accountList,
            spyAppendEmptyRow, spyAppendRow;

        beforeEach(function () {
            // create spy
            spyAppendRow = sinon.spy(AccountList.prototype, 'appendAccountRow');
            spyAppendEmptyRow = sinon.spy(AccountList.prototype, 'appendAccountEmptyRow');

            // create objects
/*            accounts = new Accounts();
            accountList = new AccountList({
                collection: accounts
            });

            // render view
            $('#sandbox').html(accountList.render().el);
            spyAppendRow.reset();
            spyAppendEmptyRow.reset();
*/
        });

        afterEach(function () {
            accountList.remove();
            spyAppendRow.restore();
            spyAppendEmptyRow.restore();
        });

        describe('when initialize and render with no accounts', function () {

            it('should call appendAccountEmptyRow', function () {
                accounts = new Accounts();
                accountList = new AccountList({
                    collection: accounts
                });

                // render view
                $('#sandbox').html(accountList.render().el);

                expect(spyAppendEmptyRow).toHaveBeenCalled();
            });

            it('should show "no accounts" message', function () {
                accounts = new Accounts();
                accountList = new AccountList({
                    collection: accounts
                });

                // render view
                $('#sandbox').html(accountList.render().el);

                var text = $('#sandbox td').text();
                expect(text).toBe('No accounts');   // too brittle!! just as an example only
            });

        });

        describe('when initialize and render with some accounts', function () {
            it('should call appendAccountRow but not appendAccountEmptyRow', function () {
                accounts = new Accounts([
                    {number: '111', name: 'one'},
                    {number: '222', name: 'two'}
                ]);
                accountList = new AccountList({
                    collection: accounts
                });

                // render view
                $('#sandbox').html(accountList.render().el);

                expect(spyAppendRow).toHaveBeenCalledTwice();
                expect(spyAppendEmptyRow).not.toHaveBeenCalled();
            });

            it('should show some rows', function () {
                accounts = new Accounts([
                    {number: '111', name: 'one'},
                    {number: '222', name: 'two'}
                ]);
                accountList = new AccountList({
                    collection: accounts
                });

                // render view
                $('#sandbox').html(accountList.render().el);
                var $rows = $('#sandbox tr');

                expect($rows.length).toBe(2);
            });
        });

        describe('when "reset" the accounts', function () {
            it('should call render', function () {
                var spyRender = sinon.spy(AccountList.prototype, 'render');
                accounts = new Accounts();
                accountList = new AccountList({
                    collection: accounts
                });

                accounts.reset();
                expect(spyRender).toHaveBeenCalled();
                spyRender.restore();
            });
        });

        describe('when calling updateSelections', function () {
            it('should trigger "account-filter:update" event', function () {
                accounts = new Accounts();
                accountList = new AccountList({
                    collection: accounts
                });

                var listener = _.extend({}, Backbone.Events),
                    onUpdate = sinon.spy();
                listener.listenTo(accountList, 'account-filter:update', onUpdate);

                accountList.updateSelections(true);
                expect(onUpdate).toHaveBeenCalled();
            });
        });

        describe('when calling updateSelections on two accounts', function () {
            it('should show "icon-ok" on both accounts with "true" argument', function () {
                accounts = new Accounts([
                    {number: '111', name: 'one', selected: false},
                    {number: '222', name: 'two', selected: true}
                ]);
                accountList = new AccountList({
                    collection: accounts
                });

                // render view
                $('#sandbox').html(accountList.render().el);

                accountList.updateSelections(true);

                var $rows = $('#sandbox tr');
                expect($($rows[0]).find('i').hasClass('icon-ok')).toBe(true);
                expect($($rows[1]).find('i').hasClass('icon-ok')).toBe(true);
            });

            it('should not show "icon-ok" on both accounts with "false" argument', function () {
                accounts = new Accounts([
                    {number: '111', name: 'one', selected: false},
                    {number: '222', name: 'two', selected: true}
                ]);
                accountList = new AccountList({
                    collection: accounts
                });

                // render view
                $('#sandbox').html(accountList.render().el);

                accountList.updateSelections(false);

                var $rows = $('#sandbox tr');
                expect($($rows[0]).find('i').hasClass('icon-ok')).toBe(false);
                expect($($rows[1]).find('i').hasClass('icon-ok')).toBe(false);
            });
        });
    });
});