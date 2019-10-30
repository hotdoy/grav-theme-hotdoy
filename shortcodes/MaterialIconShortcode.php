<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class MaterialIconShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('i', function(ShortcodeInterface $sc) {
            return '<i class="material-icons">'.$sc->getContent().'</i>';
        });
    }
}