var app = app || {};

// collections
app.collections = app.collections || {};

/*

- What is JSON structure for report result?
    {
        accountNumber: "8110192", accountName: "LOREM IPSUM DOLOR SIT AMET",
        clientRefID: "ABDC-XYZT", transactionRefID: "39483028930000000000",
        transactionType: "REC", transactionTypeDesc: "RECEIVE FREE",
        securityID: "G12345675", securityDesc: "PERCIPIT MNESARCHUM EAM EA",
        securityIDType: "CUSIP", location: "US"
    }

- If we assume the same ReportColumn's name is used in the JSON response (report),
  we can generate schema using the same name.

- How should the report columns be persisted and hydrated?

*/

app.collections.ReportSchema = Backbone.Collection.extend({

    // collection of ReportColumns
    model: app.models.ReportColumn,

    availableColumns: function() {
        return this.where({selected: false});
    },

    selectedColumns: function() {
        return this.where({selected: true});
    },

    reportTemplate: function() {
        // produce a template string from the list of selected columns
        return "";
    }

});