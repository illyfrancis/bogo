define(['underscore',
    'backbone',
    'moment',
    'apps/Formatter'
], function(_, Backbone, moment, Formatter) {

	var Transaction = Backbone.Model.extend({

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
            attr['tradeDate'] = Formatter.formatDate(attr.tradeDate);
            attr['statusDate'] = Formatter.formatDate(attr.statusDate);
            attr['settlementDate'] = Formatter.formatDate(attr.settlementDate);
            attr['instructionDate'] = Formatter.formatDateTime(attr.instructionDate);

            attr['units'] = Formatter.formatDecimal(attr.units, 4);
            attr['transactionAmount'] = Formatter.formatDecimal(attr.transactionAmount, 2);
            return attr;
        }

	});

	return Transaction;

});