describe('Given Query Model', function () {

    var Query,
        defaultLimit = 10,
        defaultOffset = 0;

    var mockData = {
        criteria: "dummy criteria",
        fields: "dummy fields 123",
        sort: "dummy sort field"
    };

    beforeEach(function () {
        if (_.isUndefined(Query)) {
            var done = false;

            require(['models/Query'], function (model) {
                Query = model;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get model class");
        }
    });

    afterEach(function () {
    });

    describe('when initializing objects', function () {
        it('should have default limit and offset', function () {
            var query = new Query();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);
        });

        it('should have default limit and offset with given value', function () {
            var options = {
                offset: 5
            };

            var query = new Query({}, options);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(options.offset);
        });

        it('should have default limit and offset with given value', function () {
            var options = {
                limit: 30,
                offset: 7
            };

            var query = new Query({}, options);
            expect(query.limit).toEqual(options.limit);
            expect(query.offset).toEqual(options.offset);
        });

        it('should be created with attributes set and default limit, offset', function () {
            var query = new Query(mockData);
            expect(query.get('criteria')).toEqual(mockData.criteria);
            expect(query.get('fields')).toEqual(mockData.fields);
            expect(query.get('sort')).toEqual(mockData.sort);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);
        });
    });

    describe('when the model returns urlRoot', function () {
        it('should contain default limit and offset', function () {
            var query = new Query();
            var url = query.urlRoot();
            expect(url).toContain('limit=' + defaultLimit);
            expect(url).toContain('offset=' + defaultOffset);
        });

        it('should contain specified limit and offset', function () {
            var options = {
                limit: 25,
                offset: 3
            };
            var query = new Query({}, options);
            var url = query.urlRoot();
            expect(url).toContain('limit=' + options.limit);
            expect(url).toContain('offset=' + options.offset);
        });
    });

    describe('when execute the query with page number', function () {
        // beforeEach(function () {
        //     sinon.stub(Query, 'save');
        // });

        // afterEach(function () {
        //     Query.save.restore();
        // });

        it('should have offset = (page - 1) when positive page number', function () {
            var query = new Query();
            sinon.stub(query, 'save');

            query.execute(1);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute(49);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(48);

            query.execute(17);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(16);
        });

        it('should have zero offset when page is not a number', function () {
            var query = new Query();
            sinon.stub(query, 'save');

            query.execute('hello');
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute(NaN);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute({});
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);
        });

        it('should have zero offset when zero or negative page number', function () {
            var query = new Query();
            sinon.stub(query, 'save');

            query.execute(0);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute(-49);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute(-17);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);
        });
    });

    xdescribe('when execute the query', function () {
        it('should POST with default limit and offset', function () {
            spyOn(Backbone, 'sync');
            var query = new Query();
            query.execute();

            expect(Backbone.sync.calls.length).toEqual(1);
            // expect(Backbone.sync).toHaveBeenCalledWith('create');
        });
    });

    // using sinon spy instead of jasmine spy, toHaveBeenCalledWith didn't work!
    describe('when execute the query', function () {
        beforeEach(function () {
            sinon.stub(Backbone, 'sync');
        });

        afterEach(function () {
            Backbone.sync.restore();
        });

        it('should call Backbone.sync with create default limit and offset', function () {
            var query = new Query();
            query.execute();

            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);
        });

        it('should call Backbone.sync with create default limit and specified page/offset', function () {
            var page = 2,
                query = new Query();
            query.execute(page);

            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(page-1);
        });

        it('should continue to call Backbone.sync with create, when multiple execute() is called', function () {
            var page = 2,
                query = new Query();
            query.execute(page);

            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(page-1);

            Backbone.sync.reset();

            query.execute(page);
            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(page-1);

            Backbone.sync.reset();

            query.execute(page);
            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(page-1);
        });
    });

});