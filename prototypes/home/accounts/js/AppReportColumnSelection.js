var app = app || {};
app.models = app.models || {};
app.collections = app.collections || {};
app.views = app.views || {};

// define console for IE8
if (window.console === undefined) {
	window.console = {};
	window.console.log = function(msg) { alert(msg); };
}

// main app
$(function() {

	var reportSchema = new app.collections.ReportSchema();
	reportSchema.reset([
		{title:"Apple", name:"apple", selected: false, position: 0},
		{title:"Orange", name:"orange", selected: false, position: 0},
		{title:"Banana", name:"banana", selected: true, position: 0},
		{title:"Pineapple", name:"pineapple", selected: false, position: 0},
		{title:"Mango", name:"mango", selected: false, position: 0}
	]);

	var view = new app.views.ReportColumnSelector({collection: reportSchema});
	view.render();

	// enable tooltip
	$("a[rel=tooltip]").tooltip();
	$("[rel=popover]").popover();

	$("span.foo").tooltip({
		title: "some tip",
		placement: right
	});

/*	$("i").tooltip({
		title: "some info"
	});
*/
});


/*
    defaults: {
        title: "",  // for displaying - e.g. Account Name
        name: "",   // for rendering JSON response - e.g. accountName
        selected: false,
        position: 0
    }
*/