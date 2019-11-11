<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class MaterialIconShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('i', function(ShortcodeInterface $sc) {
        	$size = $sc->getParameter('size');
        	$size_computed = 'style="font-size:' . $size . ';"';
            return '<i class="material-icons"' . $size_computed .'>'. $sc->getContent() . '</i>';
        });
    }
}
