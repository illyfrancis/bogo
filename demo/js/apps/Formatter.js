define(['underscore'], function (_) {

    // can init with locale when needed
    var Formatter = function () {
        this.initialize(/*locale*/);
    };

    _.extend(Formatter.prototype, {

        // make sure called only once
        initialize: _.once(function(options) {
            // dateFormat: 'M/D/YYYY',
            this.dateFormat = 'YYYY/MM/DD';
            this.dateTimeFormat = 'YYYY/MM/DD hh:mm';
        }),

        _formatDate: function (number, format) {
            var formatted = '';
            if (!_.isUndefined(number) && !_.isNaN(number) && _.isNumber(number)) {
                formatted = moment(number).format(format);
            }
            return formatted;
        },

        formatDate: function (number) {
            return this._formatDate(number, this.dateFormat);
        },

        formatDateTime: function (number) {
            return this._formatDate(number, this.dateTimeFormat);
        },

        formatDecimal: function (number, precision) {
            // TODO - proper formatting of monetary amount according to
            // locale or personal settings. accounting.js looked ok but not great
            // x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parseFloat(number).toFixed(2);

            var parts = parseFloat(number).toFixed(precision).toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
    });

    // for now, return a single instance but it can be configured with options
    return new Formatter();
});