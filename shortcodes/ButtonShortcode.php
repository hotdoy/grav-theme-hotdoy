<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class ButtonShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('btn-solid', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $href = $sc->getParameter('href');
            $i = $sc->getParameter('i');
            $i_output = $i ? '<i class="material-icons">' . $i . '</i>' : '';
            return '<div class="button solid"><a href="' . $href . '">' . $sc->getContent() . $i_output . '</a></div>';
        });

        $this->shortcode->getHandlers()->add('btn-link', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $href = $sc->getParameter('href');
            $i = $sc->getParameter('i');
            $i_computed = $i ? $i : 'arrow_forward';
            $i_output = '<i class="material-icons">' . $i_computed . '</i>';
            return '<div class="button"><a href="' . $href . '">' . $sc->getContent() . $i_output . '</a></div>';
        });
    }
}