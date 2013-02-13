// place bootstraped models here
// the idea is that we place JSON string within reset(***) for rendering, escape all </ within JSON for security measure (refer to http://backbonejs.org/#FAQ-bootstrap)
// TODO - consider placing class defs in App.Models or App.Collections (depends on how RequireJS expect directory names)
// and place instances under app.models etc. But for now just use lower cases.
var app = app || {};
app.data = app.data || {};

$(function() {
	//-------------------------------------------------------------------------
	// PaginatedAccounts
	//-------------------------------------------------------------------------
	app.data.paginatedAccounts = new app.collections.PaginatedAccounts();
	/*
	paginatedAccounts.fetch({
		success: function() {
			paginatedAccounts.pager();
		}
	});
	*/
	app.data.paginatedAccounts.fetch();
	app.data.paginatedAccounts.reset(response.accounts.valid.values);
	// console.log("count before pager : " + app.data.paginatedAccounts.length);
	app.data.paginatedAccounts.pager();
	// console.log("count after pager : " + app.data.paginatedAccounts.length);
	//-------------------------------------------------------------------------
	// Transaction Types
	//-------------------------------------------------------------------------
	app.data.transactionTypes = new app.collections.TreeCollection();
    app.data.transactionTypes.reset([{
        name: "TRADE",
        list: [{
            name: "RECEIVE",
            list: [
                {name: "RECEIVE VS PAYMENT (RVP)", value: "RVP", selected: false},
                {name: "RECEIVE FREE (REC)", value: "REC", selected: false},
                {name: "PURCHASE (PUR)", value: "PUR", selected: false},
                {name: "MUTUAL FUND PURCHASE (MTP)", value: "MTP", selected: false},
                {name: "RETURN DELIVER (RTD)", value: "RTD", selected: false},
                {name: "RECEIVE NO S F (RCW)", value: "RCW", selected: false},
                {name: "SELL REVERSAL (SRV)", value: "SRV", selected: false}
            ]},{
            name: "DELIVER",
            list: [
                {name: "DELIVER VS PAYMENT (DVP)", value: "DVP", selected: false},
                {name: "DELIVER FREE (DEL)", value: "DEL", selected: false},
                {name: "SELL (SEL)", value: "SEL", selected: false},
                {name: "MUTUAL FUND REDEMPTION (MTR)", value: "MTR", selected: false},
                {name: "RETURN RECEIVE (RTR)", value: "RTR", selected: false},
                {name: "DELIVER NO S F (DLW)", value: "DLW", selected: false},
                {name: "DELIVER VS PAYMENT NO S F (DVW)", value: "DVW", selected: false},
                {name: "RETURN DELIVER NO S F (RWD)", value: "RWD", selected: false},
                {name: "PURCHASE REVERSAL (PRV)", value: "PRV", selected: false}
            ]}
        ]},{
        name: "CORPORATE ACTIONS",
        list: [
            {name: "CONVERSION (CON)", value: "CON", selected: false},
            {name: "DIVIDEND REINVESTMENT (DRV)", value: "DRV", selected: false},
            {name: "REV DIVIDEND REINVESTMENT (DRR)", value: "DRR", selected: false},
            {name: "EXCHANGE (EXC)", value: "EXC", selected: false},
            {name: "LIQUIDATION (LIQ)", value: "LIQ", selected: false},
            {name: "MERGER (MER)", value: "MER", selected: false},
            {name: "NAME CHANGE (NAM)", value: "NAM", selected: false},
            {name: "REDEMPTION (RED)", value: "RED", selected: false},
            {name: "RIGHTS (RTS)", value: "RTS", selected: false},
            {name: "STOCK DIVIDEND (SDV)", value: "SDV", selected: false},
            {name: "SUBSCRIPTION (SUB)", value: "SUB", selected: false},
            {name: "TENDER (TEN)", value: "TEN", selected: false}
        ]},{   
        name: "MISCELLANEOUS",
        list: [
            {name: "ADJUST (ADJ)", value: "ADJ", selected: false},
            {name: "EQUALIZATION (EQL)", value: "EQL", selected: false},
            {name: "FROZEN CALL BOND (FCB)", value: "FCB", selected: false},
            {name: "MISCELLANEOUS (LPA)", value: "LPA", selected: false}
        ]
    }]);

	//-------------------------------------------------------------------------
	// ReportSchema
	//-------------------------------------------------------------------------
	app.data.reportSchema = new app.collections.ReportSchema();
	// app.data.reportSchema.url = "/reportschema";
	// app.data.reportSchema.fetch();
	app.data.reportSchema.reset(response.reportSchema.values);

	// need to assume that the position is already determined - but let's just do that here for now.
	var position = 0;
	app.data.reportSchema.each(function(reportColumn) {
		reportColumn.set("position", ++position);
	});

	//-------------------------------------------------------------------------
	// SearchCriteria
	//-------------------------------------------------------------------------
	app.data.searchCriteria = new app.collections.SearchCriteria();
	app.data.searchCriteria.reset([{
		name: "AccountCriteria",
		title: "Account",
		isApplied: true,
		restrictions: {
			accountNumbers: ["0015594","0067173","0067249"]
		}
	}, {
		name: "TransactionTypeCriteria",
		title: "Transaction Types",
		isApplied: false,
		restrictions: {
			types: ["DVW","RVP","REC"],
			id: "TR001"
		}
    }, {
        name: "SecurityIdCriteria",
        title: "Security ID",
        isApplied: false,
        restrictions: {
        }
	}, {
        name: "SecurityCategoryCriteria",
        title: "Security Category",
        isApplied: false,
        restrictions: {
        }
    }, {
        name: "SettlementDateCriteria",
        title: "Settlement Date",
        isApplied: false,
        restrictions: {
        }
    }, {
        name: "SettlementLocationCriteria",
        title: "Settlement Location",
        isApplied: false,
        restrictions: {
        }
    }], {
		parse: true
	}); // for forcing the parse in the model

	//-------------------------------------------------------------------------
	// view manager
	//-------------------------------------------------------------------------
	app.views.viewManager = new app.views.ViewManager();
	app.EventBus = app.views.viewManager;	// TODO - for now, alias

	//-------------------------------------------------------------------------
	// main app (app.views.bogo)
	//-------------------------------------------------------------------------
	app.views.bogo = new app.views.BogoApp();
	app.views.bogo.render();

	// enable tooltips
    $("body").tooltip({
        selector: "[rel=tooltip]"
    });

	// loading image
	// http://stackoverflow.com/questions/68485/how-to-show-loading-spinner-in-jquery
	$('#loadingDiv')
	    .hide()  // hide it initially
	    .ajaxStart(function() {
	        $(this).show();
	    })
	    .ajaxStop(function() {
	        $(this).hide();
	    });	
});