define(['underscore', 'backbone', 'moment'], function(_, Backbone, moment) {

	var Transaction = Backbone.Model.extend({

        // dateFormat: 'M/D/YYYY',
        dateFormat: 'YYYY/MM/DD',
        dateTimeFormat: 'YYYY/MM/DD mm:hh',

        defaults: {
            // list out all fields?
            transactionAmount: 0,
            settlementDate: '',
            instructionDate: ''
        },

        toFormattedJSON: function () {
            var attr = _.clone(this.attributes);
            attr['settlementDate'] = this.formatDate(attr.settlementDate);
            attr['instructionDate'] = this.formatDateTime(attr.instructionDate);
            return attr;
        },

        formatDate: function (number) {
            var format = '';
            if (!_.isUndefined(number) && !_.isNaN(number) && _.isNumber(number)) {
                format = moment(number).format(this.dateFormat);
            }
            return format;
        },

        formatDateTime: function (number) {
            var format = '';
            if (!_.isUndefined(number) && !_.isNaN(number) && _.isNumber(number)) {
                format = moment(number).format(this.dateTimeFormat);
            }
            return format;
        }

	});

	return Transaction;

});