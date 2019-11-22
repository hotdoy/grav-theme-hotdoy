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
            $i_output = $i ? '<span class="material-icons">' . $i . '</span>' : '';
            return '<div class="btn btn--solid"><a href="' . $href . '">' . $sc->getContent() . $i_output . '</a></div>';
        });

        // Duplicate
        $this->shortcode->getHandlers()->add('btn', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $href = $sc->getParameter('href');
            $i = $sc->getParameter('i');
            $i_output = $i ? '<span class="material-icons">' . $i . '</span>' : '';
            return '<div class="btn btn--solid"><a href="' . $href . '">' . $sc->getContent() . $i_output . '</a></div>';
        });

        $this->shortcode->getHandlers()->add('btn-link', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $href = $sc->getParameter('href');
            $i = $sc->getParameter('i');
            $i_computed = $i ? $i : 'arrow_forward';
            $i_output = '<span class="material-icons">' . $i_computed . '</span>';
            return '<div class="btn btn--link"><a href="' . $href . '">' . $sc->getContent() . $i_output . '</a></div>';
        });

        // Duplicate
        $this->shortcode->getHandlers()->add('link', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $href = $sc->getParameter('href');
            $i = $sc->getParameter('i');
            $i_computed = $i ? $i : 'arrow_forward';
            $i_output = '<span class="material-icons">' . $i_computed . '</span>';
            return '<div class="btn btn--link"><a href="' . $href . '">' . $sc->getContent() . $i_output . '</a></div>';
        });
    }
}