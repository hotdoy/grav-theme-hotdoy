(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                breakpoint: {
                    identifier: 'breakpoint',
                    title: 'Breakpoint',
                    label: '<i class="fa fa-desktop"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'portrait': {
                                identifier: 'portrait',
                                title: 'Portrait',
                                label: '<i class="fa fa-fw fa fa-mobile portrait"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.portrait', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[portrait]$1[/portrait]', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'landscape': {
                                identifier: 'landscape',
                                title: 'Landscape',
                                label: '<i class="fa fa-fw fa fa-desktop landscape"></i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.landscape', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[landscape]$1[/landscape]', codemirror: codemirror });
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