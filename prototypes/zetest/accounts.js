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

// --- trying out defining class.

var Base = function (attr) {
    console.log("begin.");
    this.attr = "";
    this.set(attr);
    console.log("end.");
};

_.extend(Base.prototype, {
    set: function (val) {
        console.log("> set: with val [" + val + "]");
        this.attr = val;
    },
    get: function () {
        return this.attr;
    }
});