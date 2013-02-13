var app = app || {};

// models
app.models = app.models || {};

app.models.ReportColumn = Backbone.Model.extend({
    defaults: {
        title: "",  // for displaying - e.g. Account Name
        name: "",   // for rendering JSON response - e.g. accountName
        selected: false,    // boolean test for including in report
        position: 0
//        filterable: true   // some columns may not 
    }
});