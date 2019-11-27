<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class EmbedShortcode extends Shortcode
{
    public function init()
    {
        
        $this->shortcode->getHandlers()->add('youtube', function(ShortcodeInterface $sc) {
        	$id = $sc->getParameter('youtube', $this->getBbCode($sc));
            return '<div class="embed youtube" data-reveal=""><iframe loading="lazy" src="https://www.youtube.com/embed/'.$id.'?rel=0" frameborder="0" allowfullscreen></iframe></div>';
        });

        $this->shortcode->getHandlers()->add('vimeo', function(ShortcodeInterface $sc) {
        	$id = $sc->getParameter('vimeo', $this->getBbCode($sc));
            return '<div class="embed vimeo" data-reveal=""><iframe loading="lazy" src="https://player.vimeo.com/video/'.$id.'" frameborder="0" webkitAllowFullScreen mozallowfullscreen></iframe></div>';
        });
    }
}