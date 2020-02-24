<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class DrawerShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('drawer', function(ShortcodeInterface $sc) {
            $output = $this->twig->processTemplate('partials/drawer.html.twig', [
                'page' => $this->grav['page'],
                'title' => $sc->getParameter('drawer', $this->getBbCode($sc)),
                'content' => $sc->getContent()
            ]);
            return $output;
        });
    }
}
