var app = app || {};
app.models = app.models || {};

app.models.SettlementDateCriteria = {

    // related to app.data.paginatedAccounts
    hydrate: function(selections) {
        // map to settlement date range model
        console.log("SettlementDateCriteria: hydrate");
        if (_.isUndefined(this.settlementDates)) {
            this.settlementDates = new app.models.DateRange();
        }
    },

    preserve: function() {
    },

    query: function() {
		return "SettlementDateCriteria:JSON";
    },

    validate: function(attrs) {
        if(attrs.isApplied) {
            console.log("settlement date criteria: validate");
        }
    }

};
