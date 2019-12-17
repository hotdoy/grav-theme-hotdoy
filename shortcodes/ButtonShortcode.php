<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class ButtonShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('btn', function(ShortcodeInterface $sc) {
            $output = $this->twig->processTemplate('partials/buttonsc.html.twig', [
                'label' => $sc->getContent(),
                'href' => $sc->getParameter('href'),
                'icon' => $sc->getParameter('i'),
                'class' => 'btn--solid'
            ]);
            return $output;
        });

        $this->shortcode->getHandlers()->add('link', function(ShortcodeInterface $sc) {
            $i = $sc->getParameter('i');
                $output = $this->twig->processTemplate('partials/buttonsc.html.twig', [
                'label' => $sc->getContent(),
                'href' => $sc->getParameter('href'),
                'icon' => $i ? $i : 'arrow_forward',
                'class' => 'btn--link'
            ]);
            return $output;
        });
    }
}