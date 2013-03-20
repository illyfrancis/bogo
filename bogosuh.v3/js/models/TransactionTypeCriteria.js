/*global define*/
define(["collections/TreeCollection"], function (TreeCollection) {

    var TransactionTypeCriteria = {

        transactionTypes: function () {
            if (this.types === undefined) {
                this.types = new TreeCollection();
                this.types.reset(app.data.transactionTypes);
            }
            return this.types;
        },

        hydrate: function (selections) {
            var types = selections.types; // array
            var refId = selections.id;

            // get all leaves.
            // TODO - if (types && !_.isEmpty(types)) { do below }
            this.transactionTypes().selectByValues(types);
        },
        preserve: function () {
            console.log("> TransactionTypeCriteria: preserve");
            // this.get("restrictions").accountNumbers = [2];
            // this.transactionTypes().selectedValues()
        },

        query: function () {
            console.log("> TransactionTypeCriteria: query");
        },

        validate: function (attrs) {
            console.log("> TransactionTypeCriteria: validate");
            // when the criteria is applied, confirm if the criteria are set
            if (attrs.isApplied) {
                if (!this.transactionTypes().hasSelection()) {
                    return "Cannot apply filter, nothing selected";
                }
            }
        }
    };

    return TransactionTypeCriteria;
    
});
