describe('Model :: Account', function () {

    var mockData = {
        name: "TestAccount",
        number: "A12345"
    };

    beforeEach(function () {
        var self = this,
            done = false;

        require(['models/Account'], function (Account) {
            self.account = new Account(mockData);
            done = true;
        });

        waitsFor(function () {
            return done;
        }, "Create Models");

    });

    afterEach(function () {
        /*    var done = false,
                isDone = function(){ return done; };

        this.todos.fetch({
            success: function(c) {
                c.each(function(m){
                    m.destroy();
                });
                done = true;
            }
        });

        waitsFor(isDone);

        done = false;
        this.todo.destroy({
            success: function(){
                done = true;
            }
        });
        
        waitsFor(isDone);
*/
    });

    describe('initialize', function () {
        it('should be initialized with mock data and not selected', function () {
            expect(this.account.get('name')).toEqual('TestAccount');
            expect(this.account.get('number')).toEqual('A12345');
            expect(this.account.get('selected')).toEqual(false);
        });
    });

    describe('.toggle()', function () {
        it('should select when toggled once', function () {
            this.account.toggle();
            expect(this.account.get('selected')).toEqual(true);
        });

        it('should not select when toggled twice', function () {
            this.account.toggle();
            this.account.toggle();
            expect(this.account.get('selected')).toEqual(false);
        });

        it('should trigger change event when toggled', function () {
            var triggered = false;
            this.account.on("change:selected", function () {
                triggered = true;
            });

            this.account.toggle();
            expect(triggered).toEqual(true);
        });
    });

    describe('.select()', function () {
        it('should select with true', function () {
            this.account.select(true);
            expect(this.account.get('selected')).toEqual(true);
        });

        it('should not select when called with false', function () {
            this.account.select(false);
            expect(this.account.get('selected')).toEqual(false);
        });

        it('should not select when called with non-boolean', function () {
            this.account.select("true");
            expect(this.account.get('selected')).toEqual(false);
        });

        it('should trigger change event', function () {
            var triggered = false;
            this.account.on("change:selected", function () {
                triggered = true;
            });

            this.account.select(true);
            expect(triggered).toEqual(true);
        });

        it('should not trigger change event when state does not change', function () {
            var triggered = false;
            this.account.on("change:selected", function () {
                triggered = true;
            });

            this.account.select(false);
            expect(triggered).toEqual(false);
        });
    });

});