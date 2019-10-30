<?php

namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class NoteShortcode extends Shortcode
{
    public function init()
    {  
        $this->shortcode->getHandlers()->add('note', function(ShortcodeInterface $sc){});
    }
}