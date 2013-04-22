define(['underscore', 'backbone', 'moment'], function(_, Backbone, moment) {

    // TODO - pull up formatter & co.
    
	var Transaction = Backbone.Model.extend({

        // dateFormat: 'M/D/YYYY',
        dateFormat: 'YYYY/MM/DD',
        dateTimeFormat: 'YYYY/MM/DD hh:mm',

        defaults: {
            // list out all fields?
            transactionAmount: 0,
            settlementDate: '',
            instructionDate: '',
            statusDate: '',
            tradeDate: ''
        },

        toFormattedJSON: function () {
            var attr = _.clone(this.attributes);
            attr['tradeDate'] = this.formatDate(attr.tradeDate);
            attr['statusDate'] = this.formatDate(attr.statusDate);
            attr['settlementDate'] = this.formatDate(attr.settlementDate);
            attr['instructionDate'] = this.formatDateTime(attr.instructionDate);

            attr['units'] = this.formatDecimal(attr.units, 4);
            attr['transactionAmount'] = this.formatDecimal(attr.transactionAmount, 2);
            return attr;
        },

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

	return Transaction;

});