<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class EmbedShortcode extends Shortcode
{
    public function init()
    {
        
        $this->shortcode->getHandlers()->add('youtube', function(ShortcodeInterface $sc) {
            return '
            <div class="site">
	            <div class="embed youtube">
	            	<iframe loading="lazy" src="https://www.youtube.com/embed/'.$sc->getContent().'?rel=0" frameborder="0" allowfullscreen></iframe>
	            </div>
            </div>';
        });

        $this->shortcode->getHandlers()->add('vimeo', function(ShortcodeInterface $sc) {
            return '
            <div class="site">
	            <div class="embed vimeo">
	            	<iframe loading="lazy" src="https://player.vimeo.com/video/'.$sc->getContent().'" frameborder="0" webkitAllowFullScreen mozallowfullscreen></iframe>
	            </div>
            </div>';
        });
    }
}