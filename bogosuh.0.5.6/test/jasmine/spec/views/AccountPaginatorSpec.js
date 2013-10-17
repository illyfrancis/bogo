define([
    'collections/Accounts',
    'views/AccountPaginator',
    'jasmine-sinon',
    'sinon'], function (Accounts, AccountPaginator, sinonJasmine, sinon) {

    describe('Load AccountPaginator View', function () {

        beforeEach(function() {
            this.addMatchers(sinonJasmine.getMatchers());
        });

        describe('Given AccountPaginator view', function () {
            var accounts,
                paginator,
                accountArray = [
                    {number: '1', name: 'one', selected: false},
                    {number: '2', name: 'two', selected: true},
                    {number: '3', name: 'three', selected: false},
                    {number: '4', name: 'four', selected: true},
                    {number: '5', name: 'five', selected: false},
                    {number: '6', name: 'six', selected: true},
                    {number: '7', name: 'seven', selected: false},
                    {number: '8', name: 'eight', selected: true},
                    {number: '9', name: 'nine', selected: false},
                    {number: '10', name: 'ten', selected: true},
                    {number: '11', name: 'eleven', selected: false},
                    {number: '12', name: 'twelve', selected: true},
                    {number: '13', name: 'thirteen', selected: false},
                    {number: '14', name: 'fourteen', selected: true}
                ];

            beforeEach(function () {
                accounts = new Accounts(accountArray);
                accounts.init();
                accounts.pager();
                accounts.info();

                paginator = new AccountPaginator({
                    collection: accounts
                });

                // add view to sandbox
                $('#sandbox').html(paginator.el);
            });

            afterEach(function () {
                paginator.remove();
            });

            describe('when initialize and render with no accounts', function () {
                it('should be empty', function () {
                    accounts = new Accounts();
                    accounts.init();
                    accounts.pager();
                    accounts.info();
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    // render view
                    $('#sandbox').html(paginator.render().el);

                    expect($('#sandbox div')).toBeEmpty();
                });
            });

            describe('when initialize and render with some accounts', function () {
                it('should render paination', function () {
                    paginator.render();

                    // outer container
                    var $container = $('#sandbox div');
                    // expect($container.is(':empty')).toBe(false); // without jquery matcher.
                    expect($container).not.toBeEmpty();

                    // should have pagination component
                    var $pagination = $container.find('div');
                    expect($pagination).toHaveClass('pagination');
                });

                it('should have pagination with three elements', function () {
                    paginator.render();

                    var $pagination = $('#sandbox div div'),
                        $children = $pagination.children();

                    expect($children).toHaveLength(3);
                    expect($($children[0])).toBe('ul');
                    expect($($children[1])).toBe('select');
                    expect($($children[2])).toBe('ul');
                });

                it('should have "first" and "prev" in the first element', function () {
                    paginator.render();

                    var $pagination = $('#sandbox div div'),
                        $children = $pagination.children(),
                        $el = $($children[0]);

                    expect($el).toBe('ul');
                    expect($el.children()).toHaveLength(2);
                    expect($el.find('li .first')).toBe('a');
                    expect($el.find('li .prev')).toBe('a');
                });

                it('should have "first" and "prev" disabled', function () {
                    paginator.render();

                    var $pagination = $('#sandbox div div'),
                        $children = $pagination.children(),
                        $el = $($children[0]);

                    expect($el).toBe('ul');
                    expect($el.children()).toHaveLength(2);
                    expect($el.find('li .first').parent()).toHaveClass('disabled');
                    expect($el.find('li .prev').parent()).toHaveClass('disabled');
                });

                it('should have "pageNumber" element in the second element', function () {
                    paginator.render();

                    var $container = $('#sandbox div'),
                        $pagination = $container.find('div'),
                        $children = $pagination.children(),
                        $el = $($children[1]);

                    expect($el).toBe('select');
                    expect($el).toHaveClass('pageNumber');
                });

                it('should have "next" and "last" in the last element', function () {
                    paginator.render();

                    var $container = $('#sandbox div'),
                        $pagination = $container.find('div'),
                        $children = $pagination.children(),
                        $el = $($children[2]);

                    expect($el).toBe('ul');
                    expect($el.children()).toHaveLength(2);
                    expect($el.find('li .next')).toBe('a');
                    expect($el.find('li .last')).toBe('a');
                });

                it('should have "next" and "last" not disabled', function () {
                    paginator.render();

                    var $container = $('#sandbox div'),
                        $pagination = $container.find('div'),
                        $children = $pagination.children(),
                        $el = $($children[2]);

                    expect($el).toBe('ul');
                    expect($el.children()).toHaveLength(2);
                    expect($el.find('li .next').parent()).not.toHaveClass('disabled');
                    expect($el.find('li .last').parent()).not.toHaveClass('disabled');
                });
            });

            describe('when navigate to other pages', function () {
                it('enables "first" and "prev" and disables "next" and "last" if "gotoNext" page', function () {
                    paginator.gotoNext();
                    paginator.render();

                    expect($('#sandbox .first').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .prev').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .next').parent()).toHaveClass('disabled');
                    expect($('#sandbox .last').parent()).toHaveClass('disabled');
                });

                it('enables "first" and "prev" and disables "next" and "last" if "gotoLast" page', function () {
                    paginator.gotoLast();
                    paginator.render();

                    expect($('#sandbox .first').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .prev').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .next').parent()).toHaveClass('disabled');
                    expect($('#sandbox .last').parent()).toHaveClass('disabled');
                });

                it('disables "first" and "prev" and enables "next" and "last" if "gotoNext then gotoPrevious" page', function () {
                    paginator.gotoNext();
                    paginator.gotoPrevious();
                    paginator.render();

                    expect($('#sandbox .first').parent()).toHaveClass('disabled');
                    expect($('#sandbox .prev').parent()).toHaveClass('disabled');
                    expect($('#sandbox .next').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .last').parent()).not.toHaveClass('disabled');
                });

                it('disables "first" and "prev" and enables "next" and "last" if "gotoNext then gotoFirst" page', function () {
                    paginator.gotoNext();
                    paginator.gotoFirst();
                    paginator.render();

                    expect($('#sandbox .first').parent()).toHaveClass('disabled');
                    expect($('#sandbox .prev').parent()).toHaveClass('disabled');
                    expect($('#sandbox .next').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .last').parent()).not.toHaveClass('disabled');
                });

                it('disables "first" and "prev" and enables "next" and "last" if "gotoLast then gotoPrevious" page', function () {
                    paginator.gotoLast();
                    paginator.gotoPrevious();
                    paginator.render();

                    expect($('#sandbox .first').parent()).toHaveClass('disabled');
                    expect($('#sandbox .prev').parent()).toHaveClass('disabled');
                    expect($('#sandbox .next').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .last').parent()).not.toHaveClass('disabled');
                });

                it('disables "first" and "prev" and enables "next" and "last" if "gotoLast then gotoFirst" page', function () {
                    paginator.gotoLast();
                    paginator.gotoFirst();
                    paginator.render();

                    expect($('#sandbox .first').parent()).toHaveClass('disabled');
                    expect($('#sandbox .prev').parent()).toHaveClass('disabled');
                    expect($('#sandbox .next').parent()).not.toHaveClass('disabled');
                    expect($('#sandbox .last').parent()).not.toHaveClass('disabled');
                });

            });

            describe('when the accounts "reset"', function () {
                it('should call render', function () {
                    // spy needs to be created before creating an instance
                    var render = sinon.spy(AccountPaginator.prototype, 'render');
                    
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    accounts.reset(accountArray);
                    expect(render).toHaveBeenCalled();

                    // restore the spy
                    render.restore();
                });
            });

            describe('when click on "previous"', function () {
                var gotoPrevious, $prev;

                beforeEach(function () {
                    gotoPrevious = sinon.stub(AccountPaginator.prototype, 'gotoPrevious');
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    // render and add to fixture
                    $('#sandbox').html(paginator.render().el);

                    // previous button
                    $prev = $('#sandbox .prev');
                });

                afterEach(function () {
                    gotoPrevious.restore();
                });

                it('should not call gotoPrevious if disabled', function () {
                    $prev.parent().addClass('disabled');
                    $prev.click();

                    expect(gotoPrevious).not.toHaveBeenCalled();
                });

                it('should call gotoPrevious if not disabled', function () {
                    $prev.parent().removeClass('disabled');
                    $prev.click();

                    expect(gotoPrevious).toHaveBeenCalledOnce();
                });
            });

            describe('when click on "next"', function () {
                var gotoNext, $next;

                beforeEach(function () {
                    gotoNext = sinon.stub(AccountPaginator.prototype, 'gotoNext');
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    // render and add to fixture
                    $('#sandbox').html(paginator.render().el);

                    // previous button
                    $next = $('#sandbox .next');
                });

                afterEach(function () {
                    gotoNext.restore();
                });

                it('should not call gotoNext if disabled', function () {
                    $next.parent().addClass('disabled');
                    $next.click();

                    expect(gotoNext).not.toHaveBeenCalled();
                });

                it('should call gotoNext if not disabled', function () {
                    $next.parent().removeClass('disabled');
                    $next.click();

                    expect(gotoNext).toHaveBeenCalledOnce();
                });
            });

            describe('when click on "first"', function () {
                var gotoFirst, $first;

                beforeEach(function () {
                    gotoFirst = sinon.stub(AccountPaginator.prototype, 'gotoFirst');
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    // render and add to fixture
                    $('#sandbox').html(paginator.render().el);

                    // previous button
                    $first = $('#sandbox .first');
                });

                afterEach(function () {
                    gotoFirst.restore();
                });

                it('should not call gotoFirst if disabled', function () {
                    $first.parent().addClass('disabled');
                    $first.click();

                    expect(gotoFirst).not.toHaveBeenCalled();
                });

                it('should call gotoFirst if not disabled', function () {
                    $first.parent().removeClass('disabled');
                    $first.click();

                    expect(gotoFirst).toHaveBeenCalledOnce();
                });
            });

            describe('when click on "last"', function () {
                var gotoLast, $last;

                beforeEach(function () {
                    gotoLast = sinon.stub(AccountPaginator.prototype, 'gotoLast');
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    // render and add to fixture
                    $('#sandbox').html(paginator.render().el);

                    // previous button
                    $last = $('#sandbox .last');
                });

                afterEach(function () {
                    gotoLast.restore();
                });

                it('should not call gotoLast if disabled', function () {
                    $last.parent().addClass('disabled');
                    $last.click();

                    expect(gotoLast).not.toHaveBeenCalled();
                });

                it('should call gotoLast if not disabled', function () {
                    $last.parent().removeClass('disabled');
                    $last.click();

                    expect(gotoLast).toHaveBeenCalledOnce();
                });
            });

            describe('when page selection changes', function () {
                var gotoPage, $pageNumber;

                beforeEach(function () {
                    gotoPage = sinon.spy(AccountPaginator.prototype, 'gotoPage');
                    paginator = new AccountPaginator({
                        collection: accounts
                    });

                    // render and add to fixture
                    $('#sandbox').html(paginator.render().el);

                    // previous button
                    $pageNumber = $('#sandbox .pageNumber');
                });

                afterEach(function () {
                    gotoPage.restore();
                });

                it('should call gotoPage', function () {
                    $pageNumber.change();
                    expect(gotoPage).toHaveBeenCalledOnce();
                });
            });

        });
    });
});