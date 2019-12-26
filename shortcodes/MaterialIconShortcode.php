<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class MaterialIconShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('mi', function(ShortcodeInterface $sc) {
        	$mi = $sc->getParameter('mi', $this->getBbCode($sc));
            return '<span class="material-icons material-icons--sc">'. $mi . '</span>';
        });
    }
}
