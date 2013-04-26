describe('Given TreeNode Model', function () {

    var TreeNode, Tree;

    beforeEach(function () {

        // use jasmine-sinon matchers
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

    describe('when initialize with no attributes', function () {
        it('should have an empty sub tree', function () {
            var treeNode = new TreeNode();
            expect(treeNode.get('subTree')).toBeDefined();
            expect(treeNode.get('subTree').length).toBe(0);
        });

        it('should be a leaf node', function () {
            var treeNode = new TreeNode();
            expect(treeNode.isLeaf()).toBeTruthy();
        });
    });

    describe('when initialize with sub nodes', function () {
        var treeNode;
        beforeEach(function () {
            treeNode = new TreeNode({
                name: 'level 1',
                value: '1',
                list: [{
                    name: 'level 2.1',
                    value: '2.1',
                    list: [{
                        name: 'level 3.1',
                        value: '3.1'
                    }]
                }, {
                    name: 'level 2.2',
                    value: '2.2'
                }]
            });
        });

        it('has a name and not a leaf', function () {
            expect(treeNode.get('name')).toBe('level 1');
            expect(treeNode.isLeaf()).toBeFalsy();
        });

        it('has direct children and descendants', function () {
            expect(treeNode.get('subTree').length).toBe(2);
            expect(treeNode.descendants().length).toBe(3);
        });

        it('has no descendants selected', function () {
            expect(treeNode.allDescendantsSelected()).toBeFalsy();
            expect(treeNode.anyDescendantsSelected()).toBeFalsy();
        });
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

    describe('when children change', function () {
        var treeNode;
        beforeEach(function () {
            treeNode = new TreeNode({
                name: 'level 1',
                value: '1',
                list: [{
                    name: 'level 2.1',
                    value: '2.1',
                    list: [{
                        name: 'level 3.1',
                        value: '3.1'
                    }]
                }, {
                    name: 'level 2.2',
                    value: '2.2'
                }]
            });
        });

        it('has no descendants selected initially', function () {
            expect(treeNode.allDescendantsSelected()).toBeFalsy();
            expect(treeNode.anyDescendantsSelected()).toBeFalsy();
        });

        it('has some descendants selected', function () {
            var level21 = treeNode.get('subTree').at(0);
            
            level21.set('selected', true);

            expect(level21.get('name')).toBe('level 2.1');
            expect(treeNode.allDescendantsSelected()).toBeFalsy();
            expect(treeNode.anyDescendantsSelected()).toBeTruthy();
        });

        it('has all descendants selected', function () {
            var level21 = treeNode.get('subTree').at(0),
                level22 = treeNode.get('subTree').at(1),
                level31 = level21.get('subTree').at(0);

            level21.set('selected', true);
            level22.set('selected', true);
            level31.set('selected', true);
            
            expect(treeNode.allDescendantsSelected()).toBeTruthy();
            expect(treeNode.anyDescendantsSelected()).toBeTruthy();
        });

        xit('has all descendants selected', function () {
            treeNode.set('selected', true);
            expect(treeNode.allDescendantsSelected()).toBeTruthy();
        });

        xit('has no descendants selected', function () {
            treeNode.set('selected', false);
            expect(treeNode.allDescendantsSelected()).toBeFalsy();
            expect(treeNode.anyDescendantsSelected()).toBeFalsy();
        });

    });

});