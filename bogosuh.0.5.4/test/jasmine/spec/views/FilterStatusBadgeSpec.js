describe('Set up FilterStatusBadge View', function () {
    var EventBus, Criterion, FilterStatusBadge;

    beforeEach(function() {
        this.addMatchers(sinonJasmine.getMatchers());
        if (_.isUndefined(FilterStatusBadge)) {
            var done = false;

            require([
                'apps/EventBus',
                'models/Criterion',
                'views/FilterStatusBadge'
            ], function (_EventBus, _Criterion, _FilterStatusBadge) {
                // load the classes
                EventBus = _EventBus;
                FilterStatusBadge = _FilterStatusBadge;
                Criterion = _Criterion;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get SUD");
        }
    });

    afterEach(function() {
    });

    describe('FilterStatusBadge view', function () {
        var criterion, filterStatusBadge,
            spyOnRemoveFilter, spyOnModelRemoveFilter, spyOnShowFilter;

        beforeEach(function () {
            // create spies
            spyOnRemoveFilter = sinon.spy(FilterStatusBadge.prototype, 'removeFilter');
            spyOnShowFilter = sinon.spy(FilterStatusBadge.prototype, 'showFilter');
            spyOnModelRemoveFilter = sinon.spy(Criterion.prototype, 'removeFilter');

            // create objects
            criterion = new Criterion({
                name: 'filter-name',
                title: 'filter-title'
            });

            filterStatusBadge = new FilterStatusBadge({
                model: criterion
            });

            // enable tooltips
            $('#sandbox').tooltip({ selector: '[rel=tooltip]' });
            // render view
            $('#sandbox').html(filterStatusBadge.render().el);
        });

        afterEach(function () {
            $('#sandbox').tooltip('destroy');
            filterStatusBadge.remove();
            spyOnRemoveFilter.restore();
            spyOnModelRemoveFilter.restore();
            spyOnShowFilter.restore();
        });

        describe('when initialize and render with a criterion', function () {
            it('has filter badge with split buttons', function () {
                var $buttons = $('#sandbox .btn-group a.btn');
                expect($buttons.length).toBe(2);
            });

            it('has filter button with filter title', function () {
                var $filterBadge = $('#sandbox .btn-group a.btn:first');
                expect($filterBadge).toHaveText('filter-title');
            });

            it('has remove button with "x"', function () {
                var $removeBadge = $('#sandbox .btn-group a.btn:last');
                expect($removeBadge).toHaveHtml('<em>×</em>');
            });
        });

        describe('when hover over filter badge', function () {
            it('shows the tooltip', function () {
                var $buttons = $('#sandbox .btn-group a.btn'),
                    filterButton = $buttons.first();

                filterButton.mouseenter();

                var tooltip = filterButton.siblings('.tooltip');
                expect(tooltip.length).toBe(1);
                expect(tooltip).toBeVisible();
                expect(tooltip.find('.tooltip-inner').text()).toBe('Show filter values');
            });
        });

        describe('when hover over remove badge', function () {
            it('shows the tooltip', function () {
                var $buttons = $('#sandbox .btn-group a.btn'),
                    removeBadge = $buttons.last();

                removeBadge.mouseenter();

                var tooltip = removeBadge.siblings('.tooltip');
                expect(tooltip.length).toBe(1);
                expect(tooltip).toBeVisible();
                expect(tooltip.find('.tooltip-inner').text()).toBe('Remove this filter');
            });
        });

        describe('when click on remove badge', function () {
            it('should call removeFilter()', function () {
                var removeBadge = $('#sandbox a.btn:nth-child(2)');
                removeBadge.click();
                expect(spyOnRemoveFilter).toHaveBeenCalledOnce();
            });
        });

        describe('when invoking removeFilter', function () {
            it('should call removeFilter on the model', function () {
                filterStatusBadge.removeFilter();
                expect(spyOnModelRemoveFilter).toHaveBeenCalledOnce();
            });
        });

        describe('when click on filter badge', function () {
            it('should call showFilter()', function () {
                var filterBadge = $('#sandbox a.btn').first();
                filterBadge.click();
                expect(spyOnShowFilter).toHaveBeenCalledOnce();
            });
        });

        describe('when invoking showFilter', function () {
            it('should trigger showFilters event with criterion name', function () {
                var tigger = sinon.spy(EventBus, 'trigger');
                filterStatusBadge.showFilter();
                expect(tigger).toHaveBeenCalledOnce();
                expect(tigger).toHaveBeenCalledWithExactly('showFilters', 'filter-name');
                tigger.restore();
            });
        });

    });
});