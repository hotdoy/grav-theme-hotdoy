<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class EmbedShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('youtube', function(ShortcodeInterface $sc) {
            $reg = '/(?:https?:\/{2}(?:(?:www.youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))|(?:youtu\.be\/)))([a-zA-Z0-9_-]{11})/';
            $url = $sc->getParameter('youtube', $this->getBbCode($sc));
            preg_match($reg, $url, $match);
            if (isset($match[1])) {
                return '<div class="embed youtube" data-reveal=""><iframe loading="lazy" src="https://www.youtube.com/embed/'.$match[1].'?rel=0" frameborder="0" allowfullscreen></iframe></div>';
            }
        });

        $this->shortcode->getHandlers()->add('vimeo', function(ShortcodeInterface $sc) {
        	$url = $sc->getParameter('vimeo', $this->getBbCode($sc));
            $id = substr(parse_url($url, PHP_URL_PATH), 1);
            if (!empty($id)) {
                return '<div class="embed vimeo" data-reveal=""><iframe loading="lazy" src="https://player.vimeo.com/video/'.$id.'" frameborder="0" webkitAllowFullScreen mozallowfullscreen></iframe></div>';
            }
            
        });
    }
}