define(['collections/Tree', 'models/TreeNode', 'backbone',
    'jasmine-sinon', 'sinon'], function (Tree, TreeNode, Backbone, sinonJasmine, sinon) {

    describe('Given TreeNode Model', function () {
    
        beforeEach(function () {
            // use jasmine-sinon matchers
            this.addMatchers(sinonJasmine.getMatchers());
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

            it('has children', function () {
                expect(treeNode.get('subTree').length).toBe(2);
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

            it('should trigger "change:selected" if toggled', function () {
                treeNode.toggle();
                expect(doSelectionChange).toHaveBeenCalledOnce();
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

            it('has updated on toggle leaf', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                level31.toggle();

                expect(level31.get('selected')).toBe(true);
                expect(level21.get('selected')).toBe(true);
                expect(level22.get('selected')).toBe(false);
                expect(treeNode.get('selected')).toBeNull();
            });

            it('has updated on toggle middle', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                level21.toggle();

                expect(level31.get('selected')).toBe(true);
                expect(level21.get('selected')).toBe(true);
                expect(level22.get('selected')).toBe(false);
                expect(treeNode.get('selected')).toBeNull();
            });

            it('has updated on toggle both middles', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                level21.toggle();
                level22.toggle();

                expect(level31.get('selected')).toBe(true);
                expect(level21.get('selected')).toBe(true);
                expect(level22.get('selected')).toBe(true);
                expect(treeNode.get('selected')).toBe(true);
            });

            it('has updated on toggle middle and leaf', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                level31.toggle();
                level22.toggle();

                expect(level31.get('selected')).toBe(true);
                expect(level21.get('selected')).toBe(true);
                expect(level22.get('selected')).toBe(true);
                expect(treeNode.get('selected')).toBe(true);
            });

            it('has updated on toggle leaf then toggle middle', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                level31.toggle();
                level21.toggle();

                expect(level31.get('selected')).toBe(false);
                expect(level21.get('selected')).toBe(false);
                expect(level22.get('selected')).toBe(false);
                expect(treeNode.get('selected')).toBe(false);
            });

            it('has all descendants selected', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                treeNode.toggle();

                expect(level31.get('selected')).toBe(true);
                expect(level21.get('selected')).toBe(true);
                expect(level22.get('selected')).toBe(true);
                expect(treeNode.get('selected')).toBe(true);
            });

            it('has no descendants selected', function () {
                var level21 = treeNode.get('subTree').at(0),
                    level22 = treeNode.get('subTree').at(1),
                    level31 = level21.get('subTree').at(0);

                treeNode.toggle();
                treeNode.toggle();

                expect(level31.get('selected')).toBe(false);
                expect(level21.get('selected')).toBe(false);
                expect(level22.get('selected')).toBe(false);
                expect(treeNode.get('selected')).toBe(false);
            });

        });

    });
});
