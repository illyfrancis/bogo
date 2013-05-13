describe('Load AccountRow View', function () {
    var Account, AccountRow;

    beforeEach(function() {
        // this.addMatchers(sinonJasmine.getMatchers());
        if (_.isUndefined(AccountRow)) {
            var done = false;

            require([
                'models/Account',
                'views/AccountRow'
            ], function (_Account, _AccountRow) {
                // load the classes
                AccountRow = _AccountRow;
                Account = _Account;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get SUD");
        }
    });

    afterEach(function() {
    });

    describe('Given AccountRow view', function () {
        var account, accountRow, spyOnToggle, spyOnRender;

        beforeEach(function () {
            // create spies
            spyOnToggle = sinon.spy(AccountRow.prototype, 'toggleSelection');
            spyOnRender = sinon.spy(AccountRow.prototype, 'render');

            // create objects
            account = new Account({
                name: 'OneTwoThree',
                number: '123',
                selected: true
            });

            accountRow = new AccountRow({
                model: account
            });

            // render view
            $('#sandbox').html(accountRow.render().el);
        });

        afterEach(function () {
            accountRow.remove();
            spyOnToggle.restore();
            spyOnRender.restore();
        });

        describe('when initialize and render', function () {
            it('has three cells with correct details', function () {
                var $el = $('#sandbox tr td'),
                numberCell = $el[0],
                nameCell = $el[1],
                selectCell = $el[2];

                expect($el.length).toBe(3);
                expect($(numberCell).text()).toEqual(account.get('number'));
                expect($(nameCell).text()).toEqual(account.get('name'));
                expect($(selectCell).find('i').hasClass('icon-ok')).toEqual(true);
            });
        });

        describe('when updateSelection with false', function () {
            it('should show that account is not selected', function () {
                accountRow.updateSelection(false);
                var $icon = $('#sandbox tr td:nth-child(3) i');
                expect($icon.hasClass('icon-ok')).toBe(false);
            });
        });

        describe('when updateSelection with true', function () {
            it('should show that account is selected', function () {
                accountRow.updateSelection(true);
                var $icon = $('#sandbox tr td:nth-child(3) i');
                expect($icon.hasClass('icon-ok')).toBe(true);
            });
        });

        describe('when toggle selection', function () {
            it('should show that account is not selected', function () {
                accountRow.toggleSelection();
                var $icon = $('#sandbox tr td:nth-child(3) i');
                expect($icon.hasClass('icon-ok')).toBe(false);
            });

            it('should show that account is selected if toggled again', function () {
                accountRow.toggleSelection();
                accountRow.toggleSelection();
                var $icon = $('#sandbox tr td:nth-child(3) i');
                expect($icon.hasClass('icon-ok')).toBe(true);
            });
        });

        describe('when click on the row', function () {
            it('should show that account is not selected', function () {
                $('#sandbox tr').click();

                var $icon = $('#sandbox tr td:nth-child(3) i');
                expect($icon.hasClass('icon-ok')).toBe(false);
            });

            it('should show that account is selected if clicked again', function () {
                $('#sandbox tr').click().click();

                var $icon = $('#sandbox tr td:nth-child(3) i');
                expect($icon.hasClass('icon-ok')).toBe(true);
            });
        });

        // another way using mock
        describe('when click on the row (using spy)', function () {
            it('should toggleSelection', function () {
                $('#sandbox tr').click();
                expect(spyOnToggle.callCount).toBe(1);
                // expect(spyOnToggle).toHaveBeenCalledOnce();
            });

            it('should toggleSelection twice on two clicks', function () {
                $('#sandbox tr').click().click();
                expect(spyOnToggle.callCount).toBe(2);
                // expect(spyOnToggle).toHaveBeenCalledTwice();
            });
        });

        describe('when model changes', function () {
            it('should render', function () {
                spyOnRender.reset();
                account.set('name', 'new name');
                expect(spyOnRender.callCount).toBe(1);
            });
        });

    });
});