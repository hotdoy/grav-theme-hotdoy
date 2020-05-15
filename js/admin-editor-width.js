(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                width: {
                    identifier: 'width',
                    title: 'Width',
                    label: '<i class="fa fa-arrows-h"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'width-tight': {
                                identifier: 'width-tight',
                                title: 'Width Tight',
                                label: '<i class="fa fa-fw fa fa-arrows-h width-tight"> +</i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.width-tight', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[tight]$1[/tight]', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'width-site': {
                                identifier: 'width-site',
                                title: 'Width Site',
                                label: '<i class="fa fa-fw fa fa-arrows-h width-site"> ++</i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.width-site', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[site]$1[/site]', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        }
                    ]
                }
            });
        });
    });
})(jQuery);