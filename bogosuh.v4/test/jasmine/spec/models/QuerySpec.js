describe('Given Query Model', function () {

    var Query,
        defaultLimit = 10,
        defaultOffset = 0;

    var data = {
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

        it('should have default limit and given offset value', function () {
            var options = {
                offset: 5
            };

            var query = new Query({}, options);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(options.offset);
        });

        it('should have limit and offset as given values', function () {
            var options = {
                limit: 30,
                offset: 7
            };

            var query = new Query({}, options);
            expect(query.limit).toEqual(options.limit);
            expect(query.offset).toEqual(options.offset);
        });

        it('should have limit, offset and searchUrl with given value', function () {
            var options = {
                limit: 31,
                offset: 17,
                searchUrl: '/some/search/url/'
            };

            var query = new Query({}, options);
            expect(query.limit).toEqual(options.limit);
            expect(query.offset).toEqual(options.offset);
            expect(query.searchUrl).toContain(options.searchUrl);
        });

        it('should be created with attributes set and default limit, offset', function () {
            var query = new Query(data);

            expect(query.get('criteria')).toEqual(data.criteria);
            expect(query.get('fields')).toEqual(data.fields);
            expect(query.get('sort')).toEqual(data.sort);

            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);

            expect(query.callbacks.success).toBeUndefined();
            expect(query.callbacks.error).toBeUndefined();
        });

        it('should be created with attributes and options', function () {
            var querySuccess = sinon.spy(),
                queryError = sinon.spy();

            var options = {
                limit: 13,
                offset: 71,
                searchUrl: '/some/search/url/',
                success: querySuccess,
                error: queryError
            };

            var query = new Query(data, options);

            expect(query.get('criteria')).toEqual(data.criteria);
            expect(query.get('fields')).toEqual(data.fields);
            expect(query.get('sort')).toEqual(data.sort);

            expect(query.limit).toEqual(options.limit);
            expect(query.offset).toEqual(options.offset);
            expect(query.searchUrl).toContain(options.searchUrl);

            expect(query.callbacks.success).toBe(querySuccess);
            expect(query.callbacks.error).toBe(queryError);
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

        it('should contain specified limit and offset', function () {
            var options = {
                limit: 25,
                offset: 3,
                searchUrl: '/some/search/url'
            };
            var query = new Query({}, options);
            var url = query.urlRoot();
            expect(url).toContain(options.searchUrl);
            expect(url).toContain('limit=' + options.limit);
            expect(url).toContain('offset=' + options.offset);
        });
    });

    describe('when execute the query with page number', function () {

        var query;

        beforeEach(function () {
            query = new Query();
            sinon.stub(query, 'save');
        });

        // afterEach(function () {
        //     Query.save.restore();
        // });

        it('should match offset with positive, non-zero page number', function () {
            query.execute(1);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(1);

            query.execute(49);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(49);

            query.execute(17);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(17);
        });

        it('should have zero offset when page is not a number', function () {
            query.execute('hello');
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute(NaN);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute({});
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.execute(function () {});
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);
        });

        it('should have zero offset when zero or negative page number', function () {
            query.execute();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

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

    describe('when execute the query - using mock', function () {
        var mock;

        beforeEach(function () {
            mock = sinon.mock(Backbone);
        });

        afterEach(function () {
            mock.restore();
        });

        it('calls Backbone.sync with method "create" with default limit and offset', function () {
            var query = new Query();
            mock.expects('sync').once().withArgs('create', query);
            query.execute();

            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);
            mock.verify();
        });

        it('calls Backbone.sync with method "create" with default limit and specified page/offset', function () {
            var offset = 2,
                query = new Query();

            mock.expects('sync').once().withArgs('create', query);

            query.execute(offset);

            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);
            mock.verify();
        });

        it('should continue to call Backbone.sync with "create", when execute is called multiple times', function () {
            var offset = 2,
                query = new Query();

            mock.expects('sync').exactly(3).withArgs('create', query);

            query.execute(offset);
            query.execute(offset);
            query.execute(offset);

            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);
            mock.verify();
        });

    });

    describe('when navigating through records', function () {
        var mock;

        beforeEach(function () {
            mock = sinon.mock(Backbone);
        });

        afterEach(function () {
            mock.restore();
        });

        it('increments offset when fetching next lot of records', function () {
            var query = new Query();
            mock.expects('sync').exactly(3).withArgs('create', query);

            query.execute();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);

            query.next();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset + 1);

            query.next();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset + 2);

            mock.verify();
        });

        it('decrements offset until zerowhen fetching previous records', function () {
            var query = new Query();
            mock.expects('sync').exactly(4).withArgs('create', query);

            query.execute(2);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(2);

            query.previous();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(1);

            query.previous();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.previous();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            mock.verify();
        });

        it('maintains zero offset when fetching previous records with initial zero offset', function () {
            var query = new Query();
            mock.expects('sync').exactly(3).withArgs('create', query);

            query.execute(0);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.previous();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            query.previous();
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(0);

            mock.verify();
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

        it('calls Backbone.sync with method "create" with default limit and offset', function () {
            var query = new Query();
            query.execute();

            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);
        });

        it('calls Backbone.sync with method "create" with default limit and specified page/offset', function () {
            var offset = 2,
                query = new Query();
            query.execute(offset);

            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);
        });

        it('should continue to call Backbone.sync with "create", when execute() is called multiple times', function () {
            var offset = 2,
                query = new Query();
            query.execute(offset);

            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);

            Backbone.sync.reset();

            query.execute(offset);
            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);

            Backbone.sync.reset();

            query.execute(offset);
            expect(Backbone.sync.calledOnce).toBe(true);
            expect(Backbone.sync.calledWith('create', query)).toBe(true);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);
        });
    });

    describe('when foo', function () {

        var xhr, requests;

        beforeEach(function () {
            xhr = sinon.useFakeXMLHttpRequest();
            requests = [];
            xhr.onCreate = function (req) {
                requests.push(req);
            };
        });

        afterEach(function () {
            xhr.restore();
        });

        it('should call success callback', function () {
            var querySuccess = sinon.spy(),
                queryError = sinon.spy();

            var options = {
                success: querySuccess,
                error: queryError
            };

            var query = new Query({}, options);

            query.execute();

            expect(requests.length).toBe(1);
            expect(requests[0].url).toBe(query.urlRoot());
        });

    });

    describe('when query executes successfully', function () {
        var server;

        beforeEach(function () {
            server = sinon.fakeServer.create();
        });

        afterEach(function () {
            server.restore();
        });

        it('should call success callback', function () {
            var querySuccess = sinon.spy(),
                queryError = sinon.spy();

            var options = {
                success: querySuccess,
                error: queryError
            };

            var query = new Query({}, options);

            server.respondWith('POST', query.urlRoot(), //'/some/url/data.json',
                                [200, { "Content-Type": "application/json" },
                                '[{ "id": 12, "comment": "Hey there" }]']);

            query.execute();
            server.respond();

            debugger;

            expect(querySuccess.calledOnce).toBe(true);
            // expect(queryError.calledOnce).toBe(true);

        });
    });

});