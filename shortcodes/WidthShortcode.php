<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('tight', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="tight ' . $class . '">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('site', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="site ' . $class . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('full', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
            return '<div class="full ' . $class . '">' . $sc->getContent() . '</div>';
        });
    }
}