<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('tight', function(ShortcodeInterface $sc) {
            return '<div class="tight">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('site', function(ShortcodeInterface $sc) {
            return '<div class="site">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('full', function(ShortcodeInterface $sc) {
            return '<div class="full">' . $sc->getContent() . '</div>';
        });
    }
}