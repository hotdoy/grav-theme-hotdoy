# v1.2.13
## 26/11/2019
1. [](#improved)
	* Reveal animations have been moved to the content for a bunch of modular instead of the outter container.
	* Page classes now follow "page__{template-name}".
	* Big pass on modular class names.
	* Default-header modular is no more and is replaced with content modular.
	* Updated commented vars available in modular for all.
	* And more!

# v1.2.12
## 25/11/2019

1. [](#improved)
	* Content modular now support theme and width.

# v1.2.11
## 25/11/2019

1. [](#bugfix)
	* Fixed modular drawer icon position

# v1.2.10
## 24/11/2019

1. [](#bugfix)
	* Prevent tracking script and div if opted out of theme tracking

# v1.2.9
## 24/11/2019

1. [](#new)
	* Added tracking
2. [](#bugfix)
	* Removed green-hosting badge

# v1.2.8
##  23/11/2019

1. [](#new)
	* New screenshot
2. [](#improved)
	* Fixed padding on blockquote

# v1.2.7
##  23/11/2019

1. [New](#new)
	* Add noopener to external links
2. [](#improved)
	* Updated Snipcart and added key field is thme config
3. [](#bugfix)
	* Fixed modular having no fields in admin panel.

# v1.2.6
##  23/11/2019

1. [](#new)
	* Added support for markdown notices

# v1.2.5
##  23/11/2019

1. [](#improved)
	* Re done all buttons from scratch
	* Theme options in Video modular
	* Improved many modules class name
	* Simplified width CSS a lot (full, site, tight).
	* Some cleanup in grids
	* Site header css changes (Introduced BEM)
	* Site header now use "site" width instead of custom width.
2. [](#bugfix)
	* Prevent "module" base blueprint from appearing in opage option
	* Removed non outputed content field from modular page
3. [](#bug)
	* Drawers toggle icons are acting up.

# v1.2.4
##  21/11/2019

1. [](#improved)
	* Modular theme now use a new theme-modular partial making them all the same.
	* added custom css to admin panel (it's a mess)
	* Hero now support background
	* Buttons use tranform for hover effects
	* Grid items can now align vertically and horizontally
	* Added defauult value to grids
	* Browser color renammed Meta Color
2. [](#bugfix)
	* Added missing radius on product image
	* fix svg in img partial

# v1.2.3
##  18/11/2019

1. [](#new)
	* Snipcart integration.
	* Product template.
	* All modules css rewitten using BEM.
2. [](#improved)
	* All modules are now wrapped.
	* Splash module animation made snappier.
3. [](#bugfix)
	* Fixed blueprint content tab disapearing on some module.

# v1.2.2
##  14/11/2019

1. [](#improved)
	* Added equal row height option in Grid.
	* General grid css maintenance.

# v1.2.1
##  12/11/2019

1. [](#improved)
	* Grid can now set border and padding of childrens.
	* Grid can control collection.
	* Grid has default collection.
	* Removed default styles of grid items.
	* Added css for a bunch of content use-cases in grid-item. 
	* It's my birthday 🎂
2. [](#bugfix)
	* Empty p elements should now be hidden.
	* Fixed some line break comming from embed shortcodes.

# v1.2.0
##  11/11/2019

1. [](#new)
	* Grid Modular using css grid (game changer).
2. [](#improved)
	* Material Icons shortcodes can now set font-size with the "size" attribute.
	* Default border radius control in admin blueprint.
	* ```.fill``` utility class for quick absolute container. 
3. [](#bugfix)
	* Default header padding fix on mobile
	* Added missing <sup> style.

# v1.1.7
##  09/11/2019

1. [](#improved)
	* Sadly removed Ficelle cdn (Nobody can use it anyway).
	* Use srcset for responsive image in img.html.twig.
2. [](#bugfix)
	* Stop using onanimationend in reveal.js (and never going back).

# v1.1.6
##  08/11/2019

1. [](#bugfix)
	* updated breakpoint shortcodes with new portrait and landscape class. Also re-added mobile and desktop classes.

# v1.1.5
##  08/11/2019

1. [](#new)
	* Splash can now control object-fit and object-position from admin panel.
	* Drawers now show title as an h2.
2. [](#improved)
	* Marquee no longer uses script and style tags. Added needed files to js and css templates.
	* Removed the ability to close the marquee (Too glitchy for me, but the script is still there is you want).
	* ```mobile``` and ```desktop``` utility class replaced with ```landscape``` and ```portrait```
	* removed a bunch of commented code.
	* reveal.js reverted to onAnimationEnd since slow3g no longer breaks things.
3. [](#bugfix)
	* Removed slow3g animated bg on assets(img, video) breaking some animation. 

# v1.1.4
##  05/11/2019

1. [](#new)
	* Material Icons are now self hosted
	* Marquee is now bound to local storage (for 6 hours).
2. [](#improved)
	* typeface.css renamed simply font.css
	* Marquee has been moved to same z-index braquet as site-header
	* default site-loader fade-out now set to 200ms

# v1.1.3
##  05/11/2019

1. [](#new)
	* Added marquee
2. [](#improved)
	* Removed overly opinionated footer
3. [](#bugfix)
	* Moved jquery to "before" assets group.

# v1.1.2
##  04/11/2019

1. [](#improved)
	* Splash animation timings
	* Removed overly opinionated site-loader
	* Mobile nav naming scheme
	* Notify color options
	* Drawers and content modular now extends module
2. [](#bugfix)
	* Mobile nav toggle position

# v1.1.1
##  03/11/2019

1. [](#improved)
	* Minor style upgrades and fixes

# v1.1.0
##  03/11/2019

1. [](#new)
	* Form inputs now use theme colors.
	* All module blueprints now extend module.yaml.
	* Added new rythm-half to all modules
2. [](#improved)
	* Modular page blueprint cleaned up.
	* Form inputs now use courier (might change soon).
	* modules with videos now allow webm.
	* Reveal.js now works on video elements.
	* Renamed demo email confirmation.
	* Header-default no longer has a breadcrumb but behaves like other modules

# v1.0.0
##  30/10/2019

1. [](#new)
	* Stable release!
	* Added styles for form select, radio and unique checkbox.
2. [](#improved)
	* Content and Drawers modular now extend partials.
	* Normalized whitespaces in shortcodes
	* Cleaned up and date format in changelog
	* Minor changes to readme

# v0.1.1
##  29/10/2019

1. [](#improved)
	* Updated README
	* Updated theme blueprint with proper links
	* Cleaned up some CSS files

# v0.1.0
##  29/10/2019

1. [New](#new)
	* Initial Release
