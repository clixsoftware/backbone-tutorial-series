var PostModel = Backbone.Model.extend({
    defaults: {
        title: "",
        text: ""
    },
    validate: function(attrs) {
        if (attrs.title == '')
            return 'O título é obrigatório';
        if (attrs.text == '')
            return 'O texto é obrigatório'
    }
});