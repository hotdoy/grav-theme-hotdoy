<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Hotdoy extends Theme
{
	public function onTwigSiteVariables()
    {
        if ($this->isAdmin()) {
            $this->grav['assets']->add('theme://js/admin/admin-editor-width.js');
            $this->grav['assets']->add('theme://js/admin/admin-editor-breakpoint.js');
            $this->grav['assets']->add('theme://js/admin/admin-editor-text.js');
        }
    }
}
