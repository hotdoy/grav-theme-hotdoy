<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class ButtonShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('btn', function(ShortcodeInterface $sc) {
            $mi = $sc->getParameter('mi');
            $i = $sc->getParameter('i');
            $icon = $mi ? $mi : $i;
            $output = $this->twig->processTemplate('partials/buttonsc.html.twig', [
                'page' => $this->grav['page'],
                'label' => $sc->getContent(),
                'href' => $sc->getParameter('href'),
                'icon' => $icon,
                'class' => 'btn--solid'
            ]);
            return $output;
        });

        $this->shortcode->getHandlers()->add('link', function(ShortcodeInterface $sc) {
            $mi = $sc->getParameter('mi');
            $i = $sc->getParameter('i');
            $icon = $mi ? $mi : $i;
            $output = $this->twig->processTemplate('partials/buttonsc.html.twig', [
                'page' => $this->grav['page'],
                'label' => $sc->getContent(),
                'href' => $sc->getParameter('href'),
                'icon' => $icon ? $icon : 'arrow_forward',
                'class' => 'btn--link'
            ]);
            return $output;
        });
    }
}