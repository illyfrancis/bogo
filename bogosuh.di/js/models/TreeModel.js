/*global define*/
define(["underscore", "backbone", "require"], function (_, Backbone, require) {

    var TreeModel = Backbone.Model.extend({

        defaults: {
            name: "default name",
            value: "",
            selected: false
        },

        initialize: function () {
            // resolve circular dependency
            var TreeCollection = require("collections/TreeCollection");

            // replace the list with collection.
            this.subItems = new TreeCollection(this.get("list"));
            // set itself as parent on the subItems.
            this.subItems.invoke("setParent", this);
        },

        toggle: function () {
            this.set("selected", !this.get("selected"));
        },

        setParent: function (parent) {
            if (parent) {
                this.parent = parent;
            }
        },

        isLeaf: function () {
            return this.subItems.length === 0;
        },

        parents: function (ancestor) {
            if (ancestor === undefined) {
                ancestor = [];
            }

            if (this.parent) {
                ancestor.push(this.parent);
                this.parent.parents(ancestor);
            }
            return ancestor;
        },

        descendants: function (offspring) {
            if (offspring === undefined) {
                offspring = [];
            }

            this.subItems.each(function (item) {
                offspring.push(item);
                item.descendants(offspring);
            });
            return offspring;
        },

        allDescendantsSelected: function () {
            return _.all(this.descendants(), function (item) {
                return item.get("selected");
            });
        },

        anyDescendantsSelected: function () {
            return _.any(this.descendants(), function (item) {
                return item.get("selected");
            });
        }

    });

    return TreeModel;
});