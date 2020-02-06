<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class RevealShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('reveal', function(ShortcodeInterface $sc) {
        	$class = $sc->getParameter('reveal', $this->getBbCode($sc));
            return '<div data-reveal="' . $class . '">'.$sc->getContent().'</div>';
        });
    }
}
