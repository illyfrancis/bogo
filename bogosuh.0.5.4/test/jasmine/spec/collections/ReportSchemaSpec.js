describe('Given ReportSchema Collection', function () {

    var ReportSchema;

    beforeEach(function () {
        if (_.isUndefined(ReportSchema)) {
            var done = false;

            require(['collections/ReportSchema'
                ], function (reportSchema) {
                ReportSchema = reportSchema;
                done = true;
            });

            waitsFor(function () {
                return done;
            }, "Get SUD");
        }
    });

    xdescribe('when foo', function () {
        it('must bar', function () {
            var reportSchema = new ReportSchema();

        });
    });

});