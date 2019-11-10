<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class BreakpointShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('desktop', function(ShortcodeInterface $sc) {
            return '<div class="landscape">' . $sc->getContent() . '</div>';
        });
        $this->shortcode->getHandlers()->add('mobile', function(ShortcodeInterface $sc) {
            return '<div class="portrait">' . $sc->getContent() . '</div>';
        });
        $this->shortcode->getHandlers()->add('landscape', function(ShortcodeInterface $sc) {
            return '<div class="landscape">' . $sc->getContent() . '</div>';
        });
        $this->shortcode->getHandlers()->add('portrait', function(ShortcodeInterface $sc) {
            return '<div class="portrait">' . $sc->getContent() . '</div>';
        });
    }
}