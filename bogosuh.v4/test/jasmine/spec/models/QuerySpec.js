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

        // use jasmine-sinon matchers
        // TODO - check if this gets descoped or clobbered if called more than once
        // the idea is to set it up once, and only once
        this.addMatchers(sinonJasmine.getMatchers());

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

    describe('when query executes with a page number', function () {

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
    describe('when query executes', function () {

        beforeEach(function () {
            sinon.stub(Backbone, 'sync');
        });

        afterEach(function () {
            Backbone.sync.restore();
        });

        it('calls Backbone.sync with method "create" with default limit and offset', function () {
            var query = new Query();
            query.execute();

            expect(Backbone.sync).toHaveBeenCalledOnce();
            expect(Backbone.sync).toHaveBeenCalledWith('create', query);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(defaultOffset);
        });

        it('calls Backbone.sync with method "create" with default limit and specified page/offset', function () {
            var offset = 2,
                query = new Query();
            query.execute(offset);

            expect(Backbone.sync).toHaveBeenCalledOnce();
            expect(Backbone.sync).toHaveBeenCalledWith('create', query);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);
        });

        it('should continue to call Backbone.sync with "create", when execute() is called multiple times', function () {
            var offset = 2,
                query = new Query();
            query.execute(offset);

            expect(Backbone.sync).toHaveBeenCalledOnce();
            expect(Backbone.sync).toHaveBeenCalledWith('create', query);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);

            Backbone.sync.reset();

            query.execute(offset);
            expect(Backbone.sync).toHaveBeenCalledOnce();
            expect(Backbone.sync).toHaveBeenCalledWith('create', query);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);

            Backbone.sync.reset();

            query.execute(offset);
            expect(Backbone.sync).toHaveBeenCalledOnce();
            expect(Backbone.sync).toHaveBeenCalledWith('create', query);
            expect(query.limit).toEqual(defaultLimit);
            expect(query.offset).toEqual(offset);
        });
    });

    describe('when query executes - using mock', function () {
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

    xdescribe('when foo', function () {

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

    describe('when query executes and server responds', function () {
        var server,
            query,
            querySuccess = sinon.spy();
            queryError = sinon.spy();

        beforeEach(function () {
            server = sinon.fakeServer.create();
            query = new Query({}, {
                success: querySuccess,
                error: queryError
            });
        });

        afterEach(function () {
            server.restore();
            querySuccess.reset();
            queryError.reset();
        });

        it('should call success callback on 200 successful response', function () {
            var fakeResponse = {foo:'bar'};

            query.execute();
            server.respondWith('POST', query.urlRoot(),
                                [200, { 'Content-Type': 'application/json' },
                                JSON.stringify(fakeResponse)]);
            server.respond();

            // use jasmine-sinon matcher for improved readability
            expect(queryError).not.toHaveBeenCalled(); // same as expect(queryError.callCount).toEqual(0);
            expect(querySuccess).toHaveBeenCalledOnce(); // expect(querySuccess.calledOnce).toBe(true);
            expect(querySuccess).toHaveBeenCalledWith(query, fakeResponse); // expect(querySuccess.calledWith(query, fakeResponse)).toBe(true);
        });

        it('should not set the query with the response on 200', function () {
            var fakeResponse = {foo:'bar'};

            query.execute();
            server.respondWith('POST', query.urlRoot(),
                                [200, { 'Content-Type': 'application/json' },
                                JSON.stringify(fakeResponse)]);
            server.respond();
            // don't want the response to be set on the query object
            expect(query.get('foo')).toBeUndefined();
        });

        // 201 resource created
        it('should call success callback on 201 (created) response', function () {
            var fakeResponse = [{foo:'bar'}, {baz:'buzz'}];

            query.execute();
            server.respondWith('POST', query.urlRoot(),
                                [201, { 'Content-Type': 'application/json' },
                                JSON.stringify(fakeResponse)]);
            server.respond();

            // use jasmine-sinon matcher for improved readability
            expect(queryError).not.toHaveBeenCalled(); // same as expect(queryError.callCount).toEqual(0);
            expect(querySuccess).toHaveBeenCalledOnce(); // expect(querySuccess.calledOnce).toBe(true);
            expect(querySuccess).toHaveBeenCalledWith(query, fakeResponse); // expect(querySuccess.calledWith(query, fakeResponse)).toBe(true);
        });

        // 204 no content
        it('should call success callback on 204 (no content) successful but empty response', function () {
            var fakeResponse = {};

            query.execute();
            server.respondWith('POST', query.urlRoot(),
                                [204, { 'Content-Type': 'application/json' },
                                JSON.stringify(fakeResponse)]);
            server.respond();

            // use jasmine-sinon matcher for improved readability
            expect(queryError).not.toHaveBeenCalled(); // same as expect(queryError.callCount).toEqual(0);
            expect(querySuccess).toHaveBeenCalledOnce(); // expect(querySuccess.calledOnce).toBe(true);
            expect(querySuccess).toHaveBeenCalledWith(query, fakeResponse); // expect(querySuccess.calledWith(query, fakeResponse)).toBe(true);
        });

        // 304 not modified
        it('should call success callback on 304 not modified', function () {

            query.execute();
            server.respondWith(query.urlRoot(), [304, {}, '']);
            server.respond();

            expect(querySuccess).toHaveBeenCalledOnce();
            expect(queryError).not.toHaveBeenCalled();
        });

        // 400 Bad request
        it('should call error callback on 400 bad request', function () {

            query.execute();
            server.respondWith(query.urlRoot(), [400, {}, '']);
            server.respond();

            expect(queryError).toHaveBeenCalledOnce();
            expect(querySuccess).not.toHaveBeenCalled();
        });

        // 401 unauthorized
        it('should call error callback on 401 unauthorized', function () {

            query.execute();
            server.respondWith(query.urlRoot(), [401, {}, '']);
            server.respond();

            expect(queryError).toHaveBeenCalledOnce();
            expect(querySuccess).not.toHaveBeenCalled();
        });

        // 403 unauthorized
        it('should call error callback on 403 forbidden', function () {

            query.execute();
            server.respondWith(query.urlRoot(), [403, {}, '']);
            server.respond();

            expect(queryError).toHaveBeenCalledOnce();
            expect(querySuccess).not.toHaveBeenCalled();
        });

        // 404 not found
        it('should call error callback on 404 not found', function () {

            query.execute();
            server.respondWith(query.urlRoot(), [404, {}, '']);
            server.respond();

            expect(queryError).toHaveBeenCalledOnce();
            expect(querySuccess).not.toHaveBeenCalled();
        });

        // 500 internal server error
        it('should call error callback on 500 server error', function () {

            query.execute();
            server.respondWith(query.urlRoot(), [500, {}, '']);
            server.respond();

            expect(queryError).toHaveBeenCalledOnce();
            expect(querySuccess).not.toHaveBeenCalled();
        });
    });

});