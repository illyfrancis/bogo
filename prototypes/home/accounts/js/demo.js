
Application = {};
Application.Collection = {};
Application.Model = {};
Application.View = {};

Application.Model.Item = Backbone.Model.extend();
Application.View.Item = Backbone.View.extend({
    tagName: 'li',
    className: 'item-view',
    events: {
        'drop' : 'drop'
    },
    drop: function(event, index) {
        this.$el.trigger('update-sort', [this.model, index]);
    },        
    render: function() {
        $(this.el).html(this.model.get('name') + ' (' + this.model.get('id') + ')');
        return this;
    }
});
Application.Collection.Items = Backbone.Collection.extend({
    model: Application.Model.Item,
    comparator: function(model) {
        return model.get('ordinal');
    },
});
Application.View.Items = Backbone.View.extend({
    events: {
        'update-sort': 'updateSort'
    },
    render: function() {
        this.$el.children().remove();
        this.collection.each(this.appendModelView, this);
        return this;
    },    
    appendModelView: function(model) {
        var el = new Application.View.Item({model: model}).render().el;
        this.$el.append(el);
    },
    updateSort: function(event, model, position) {            
        this.collection.remove(model);

        this.collection.each(function (model, index) {
            var ordinal = index;
            if (index >= position)
                ordinal += 1;
            model.set('ordinal', ordinal);
        });            
        
        model.set('ordinal', position);
        this.collection.add(model, {at: position});
        
        // to update ordinals on server:
        var ids = this.collection.pluck('id');
        $('#post-data').html('post ids to server: ' + ids.join(', '));
        
        // this.render();
    }
});    

var Instance = {};
Instance.collection = new Application.Collection.Items();
Instance.collection.add(new Application.Model.Item({id: 1, name: 'a', ordinal: 0}));
Instance.collection.add(new Application.Model.Item({id: 2, name: 'b', ordinal: 1}));
Instance.collection.add(new Application.Model.Item({id: 3, name: 'c', ordinal: 2}));

Instance.collectionView = new Application.View.Items({
    el: '#collection-view',
    collection: Instance.collection
});

Instance.collectionView.render();

$(document).ready(function() {
    $('#collection-view').sortable({
        stop: function(event, ui) {
            ui.item.trigger('drop', ui.item.index());
        }
    });
});   