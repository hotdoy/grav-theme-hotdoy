<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class KalturaShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('kaltura', function(ShortcodeInterface $sc) {
            $url = $sc->getParameter('kaltura', $this->getBbCode($sc));
            $fragments = explode('/', substr($url, 0, strpos($url, '?')));
            $qs = array();
            parse_str($url, $qs);

            $output = $this->twig->processTemplate('partials/kalturasc.html.twig', [
                'path' => $fragments[2],
                'partner_id' => $fragments[array_search('partner_id', $fragments)+1],
                'uiconf_id' => $fragments[array_search('uiconf_id', $fragments)+1],
                'entry_id' => $fragments[array_search('entry_id', $fragments)+1]
            ]);
            return $output;
           
        });
    }
}