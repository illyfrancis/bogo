var Account = Backbone.Model.extend({
    defaults: {
        name: "",
        number: "",
        selected: false
    },

    select: function(state) {
        this.set("selected", state);
    }    
});

var PaginatedAccounts = Backbone.Paginator.clientPager.extend({
    model: Account,

    paginator_core: {
        type: "GET",
        dataType: "json",
        url: "/accounts"
    },

    paginator_ui: {
        firstPage: 1,
        currentPage: 1,
        perPage: 10,
        totalPages: 10
    },

    server_api: {
    },

    parse: function(response) {
        var tags = response.values;
        return tags;
    }
});