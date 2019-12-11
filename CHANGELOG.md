# v1.4.2
## 10/12/2019
1. [](#bugfix)
	* Fixed form submit button position.
	
# v1.4.1
## 10/12/2019
1. [](#improved)
	* Improved form styles and submitting state

# v1.4.0
## 07/12/2019
1. [](#new)
	* Refactor of all modular blueprints and templates.
	* Refactor of modular spacing rules.

# v1.3.7
## 05/12/2019

1. [](#improved)
	* Theme options (colors, rhythm) as been moved out of modulars and into the master module.yaml
2. [](#bugfix)
	* Fixed burger position
	* Fixed grid-item content margins irregularity

# v1.3.6
## 04/12/2019

1. [](#improved)
	* Minor spacing fixes
	* Buy btn now includes product name
	* Completelly removed border-radius from theme as the result was never convincing.
	* Snipcart item count commented out
	* Snipcart cart icon moved to navigation partial
	* Blocquote and embeds now use half rhythm in stead of defenitive values
	* Started a cs pass on forms.
2. [](#bugfix)
	* Fixed notify-in animation

# v1.3.5
## 04/12/2019

1. [](#new)
	* Added reveal.css to allow easier reveal animation changes.
2. [](#improved)
	* default "revealed" animation renammed to "reveal".
	* Removed all mobile nav panel customization from admin panel since site-header is ment to be inherited and built upon.
3. [](#bugfix)
	* removed condition preventing img default reveal animation.

# v1.3.4
## 02/12/2019

1. [](#improved)
	* Reveal.js no longer add style to header
	* .unrevealed and .revealed claases moved to animationa.css for now
	* Default revealed animation is now fadeinfrombottom.
	* All modular have been cleaned up of reveal animation.
2. [](#bugfix)
	* Fixed a bunch of whitespace in markup
	* Removed a superfluoous margin at the end of content modular. 
	* Removed an overflow hidden in content modular causing glitched reveal animation.

# v1.3.3
## 01/12/2019

1. [](#new)
	* Added debug text for modular/page requiring api keys
2. [](#bugfix)
	* Replaced all multilangual demo content with non-multilangual content.
	* Removed a bugged default value in theme blueprint
	* Prevent some embeded iframes to overflow.

# v1.3.2
## 01/12/2019

1. [](#new)
	* Added demo content.
2. [](#improved)
	* Map modular make sure all markers are visible.
	* Product must now have an ID.
	* Made default theme values similar to demo site
	* BREAKING! - Streamlined Material icons shortcodes.
	* Removed logo from email template.

# v1.3.1
## 30/11/2019

1. [](#improved)
	* Moved map styles to proper css file.
	* Improved height on desktop

# v1.3.0
## 30/11/2019

1. [](#new)
	* Added Google Maps modular with support for snazzy directly in the theme blueprint and multiple markers
2. [](#improved)
	* Cleaned theme blueprint

# v1.2.20
## 29/11/2019

1. [](#improved)
	* Improved theme blueprint
	* General modular maintenance

2. [](#bufix)
	* Fixed Snipcart

# v1.2.19
## 29/11/2019

1. [](#bufix)
	* fixed grid item width properties

# v1.2.18
## 28/11/2019

1. [](#improved)
	* Moved most grid-item modular options to parent grid modular.
	* General maintenance.

# v1.2.17
## 28/11/2019

1. [](#improved)
	* Abandonning css grid in favor of flexbox for grid modular.

# v1.2.16
## 27/11/2019

1. [](#new)
	* Added option modular option to wrap or scroll on smaller screens.

# v1.2.15
## 27/11/2019

1. [](#improved)
	* BREAKING! fixed a typo in```rhythm``` everywhere. This will break a lot of things. I suggest you find and replace. Figured now was the best time to do it since still no one is using the theme.
	* Moved rhythm at the bottom of blueprints.
	* BREAKING! ```rhythm-negative``` is now ```rhythm-header```
	* improved padding in markdown notices.

# v1.2.14
## 26/11/2019

1. [](#improved)
	* width-tight set to 650px
	* Simplified youtube and vimeo shortcodes to youtube="id". **(breaking change!)**
	* Content modular is now always width-site so child elements can set their own width. 
	* Forms used in content modular width related css moved to content.css

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
	* Added new rhythm-half to all modules
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
