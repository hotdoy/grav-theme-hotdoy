<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class TextSizeShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('small', function(ShortcodeInterface $sc) {
        	$class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<span class="small' . $class . '">'.$sc->getContent().'</span>';
        });

        $this->shortcode->getHandlers()->add('xsmall', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<span class="xsmall' . $class . '">'.$sc->getContent().'</span>';
        });

        $this->shortcode->getHandlers()->add('big', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<span class="big' . $class . '">'.$sc->getContent().'</span>';
        });

        $this->shortcode->getHandlers()->add('huge', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<span class="huge' . $class . '">'.$sc->getContent().'</span>';
        });
    }
}
