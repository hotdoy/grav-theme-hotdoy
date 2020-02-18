(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            Instance.addButton({
                breakpoint: {
                    identifier: 'text',
                    title: 'Text',
                    label: '<i class="fa fa-text-height"></i>',
                    modes: ['gfm', 'markdown'],
                    children: [
                        {
                            'xsmall': {
                                identifier: 'xsmall',
                                title: 'Xsmall',
                                label: '<i class="fa fa-fw fa fa-text-height xsmall"> --</i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.xsmall', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[xsmall]$1[/xsmall]', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'small': {
                                identifier: 'small',
                                title: 'Small',
                                label: '<i class="fa fa-fw fa fa-text-height small"> -</i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.small', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[small]$1[/small]', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'big': {
                                identifier: 'big',
                                title: 'Big',
                                label: '<i class="fa fa-fw fa fa-text-height big"> +</i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.big', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[big]$1[/big]', codemirror: codemirror });
                                        codemirror.focus();
                                    });
                                }
                            }
                        },
                        {
                            'huge': {
                                identifier: 'huge',
                                title: 'Huge',
                                label: '<i class="fa fa-fw fa fa-text-height huge"> ++</i>',
                                modes: ['gfm', 'markdown'],
                                action: function(_ref) {
                                    var codemirror = _ref.codemirror, button = _ref.button;

                                    button.on('click.editor.huge', function() {
                                        Instance.buttonStrategies.replaceLine({ token: '$1', template: '[huge]$1[/huge]', codemirror: codemirror });
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