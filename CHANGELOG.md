# v1.2.2
##  14/11/2019
1. [Improved](#improved)
* Added equal row height option in Grid.
* General grid css maintenance.

# v1.2.1
##  12/11/2019
1. [Improved](#improved)
* Grid can now set border and padding of childrens.
* Grid can control collection.
* Grid has default collection.
* Removed default styles of grid items.
* Added css for a bunch of content use-cases in grid-item. 
* It's my birthday 🎂
2. [Bugfix](#bugfix)
* Empty p elements should now be hidden.
* Fixed some line break comming from embed shortcodes.

# v1.2.0
##  11/11/2019
1. [New](#new)
* Grid Modular using css grid (game changer).
2. [Improved](#improved)
* Material Icons shortcodes can now set font-size with the "size" attribute.
* Default border radius control in admin blueprint.
* ```.fill``` utility class for quick absolute container. 
3. [Bugfix](#bugfix)
* Default header padding fix on mobile
* Added missing <sup> style.

# v1.1.7
##  09/11/2019
1. [Improved](#improved)
* Sadly removed Ficelle cdn (Nobody can use it anyway).
* Use srcset for responsive image in img.html.twig.
2. [Bugfix](#bugfix)
* Stop using onanimationend in reveal.js (and never going back).

# v1.1.6
##  08/11/2019
1. [Bugfix](#bugfix)
* updated breakpoint shortcodes with new portrait and landscape class. Also re-added mobile and desktop classes.

# v1.1.5
##  08/11/2019
1. [New](#new)
* Splash can now control object-fit and object-position from admin panel.
* Drawers now show title as an h2.
2. [Improved](#improved)
* Marquee no longer uses script and style tags. Added needed files to js and css templates.
* Removed the ability to close the marquee (Too glitchy for me, but the script is still there is you want).
* ```mobile``` and ```desktop``` utility class replaced with ```landscape``` and ```portrait```
* removed a bunch of commented code.
* reveal.js reverted to onAnimationEnd since slow3g no longer breaks things.
3. [Bugfix](#bugfix)
* Removed slow3g animated bg on assets(img, video) breaking some animation. 

# v1.1.4
##  05/11/2019
1. [New](#new)
* Material Icons are now self hosted
* Marquee is now bound to local storage (for 6 hours).
2. [Improved](#improved)
* typeface.css renamed simply font.css
* Marquee has been moved to same z-index braquet as site-header
* default site-loader fade-out now set to 200ms

# v1.1.3
##  05/11/2019
1. [New](#new)
* Added marquee
2. [Improved](#improved)
* Removed overly opinionated footer
3. [Bugfix](#bugfix)
* Moved jquery to "before" assets group.

# v1.1.2
##  04/11/2019
1. [Improved](#improved)
* Splash animation timings
* Removed overly opinionated site-loader
* Mobile nav naming scheme
* Notify color options
* Drawers and content modular now extends module
2. [Bugfix](#bugfix)
* Mobile nav toggle position

# v1.1.1
##  03/11/2019
1. [Improved](#improved)
* Minor style upgrades and fixes

# v1.1.0
##  03/11/2019
1. [New](#new)
* Form inputs now use theme colors.
* All module blueprints now extend module.yaml.
* Added new rythm-half to all modules
2. [Improved](#improved)
* Modular page blueprint cleaned up.
* Form inputs now use courier (might change soon).
* modules with videos now allow webm.
* Reveal.js now works on video elements.
* Renamed demo email confirmation.
* Header-default no longer has a breadcrumb but behaves like other modules

# v1.0.0
##  30/10/2019

1. [New](#new)
* Stable release!
* Added styles for form select, radio and unique checkbox.
2. [Improved](#improved)
* Content and Drawers modular now extend partials.
* Normalized whitespaces in shortcodes
* Cleaned up and date format in changelog
* Minor changes to readme

# v0.1.1
##  29/10/2019

1. [Improved](#improved)
* Updated README
* Updated theme blueprint with proper links
* Cleaned up some CSS files

# v0.1.0
##  29/10/2019

1. [New](#new)
* Initial Release
