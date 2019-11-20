<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Hotdoy extends Theme
{
    public function onAssetsInitialized(){
    	if ($this->isAdmin()){	
        	$this->grav['assets']->addCss('theme://css/admin.css', 1);
    	}
	}
}

