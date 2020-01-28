<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Hotdoy extends Theme
{
	public function onTwigSiteVariables()
    {
        if ($this->isAdmin()) {
            $this->grav['assets']->add('theme://js/admin-editor-width.js');
        }
    }
}
