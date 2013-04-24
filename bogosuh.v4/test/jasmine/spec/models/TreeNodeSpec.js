describe('Given TreeNode Model', function () {

    var TreeNode, Tree;

    beforeEach(function () {

        // use jasmine-sinon matchers
        // TODO - check if this gets descoped or clobbered if called more than once
        // the idea is to set it up once, and only once
        this.addMatchers(sinonJasmine.getMatchers());

        if (_.isUndefined(TreeNode)) {
            var done = false;

            require(['collections/Tree', 'models/TreeNode'], function (tree, node) {
                Tree = tree;
                TreeNode = node;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get model class");
        }
    });

    afterEach(function () {
    });

    describe('when toggle selection', function () {
        var treeNode, events, doSelectionChange, doChildChange;

        beforeEach(function () {
            treeNode = new TreeNode({
                name: 'foo',
                value: 'bar',
                selected: false
            });

            events = _.extend({}, Backbone.Events, {
                selectionChange: function () {}
            });

            // stub out listeners
            doSelectionChange = sinon.stub(events, 'selectionChange');

            events.listenTo(treeNode, 'change:selected', events.selectionChange);
        });

        it('should update selected and trigger change event once', function () {
            treeNode.toggle();
            expect(treeNode.get('selected')).toBe(true);
            expect(doSelectionChange).toHaveBeenCalledOnce();
        });

        it('should update selected and trigger change event twice', function () {
            treeNode.toggle();
            treeNode.toggle();
            expect(treeNode.get('selected')).toBe(false);
            expect(doSelectionChange).toHaveBeenCalledTwice();
        });
    });

    describe('when handling event changes', function () {
        var treeNode, events, doSelectionChange, doChildChange;

        beforeEach(function () {
            treeNode = new TreeNode({
                name: 'foo',
                value: 'bar',
                selected: false
            });

            events = _.extend({}, Backbone.Events, {
                selectionChange: function () {}
            });

            // stub out listeners
            doSelectionChange = sinon.stub(events, 'selectionChange');

            events.listenTo(treeNode, 'change:selected', events.selectionChange);
        });
        
        it('should trigger "change:selected" if selection changes', function () {
            treeNode.set('selected', true);
            expect(doSelectionChange).toHaveBeenCalledOnce();
        });

        it('should not trigger "change:selected" if selection doesn\'t change', function () {
            treeNode.set('selected', false);
            expect(doSelectionChange).not.toHaveBeenCalled();
        });

        it('should not trigger "change:selected" if selection doesn\'t change', function () {
            treeNode.set('value', 'baz');
            expect(doSelectionChange).not.toHaveBeenCalled();
        });

    });

});