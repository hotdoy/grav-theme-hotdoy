# v1.5.21
## 05-02-2020

1. [](#improved)
	* Improved hr margins so it match with h2.
	* Added reveal to embeded video.
	* Spiced up code tags.
2. [](bugfix)
	* Fixed embed video css scope


# v1.5.20
## 04-02-2020

1. [](#improved)
	* Reworked grid-item classes and logic for future expansion. (You might have to re-save your grid module).
	* Article cards now look more on par with product card.
2. [](bugfix)
	* small, xsmall, big and huge font utility class now properly works.

# v1.5.19
## 04-02-2020

1. [](#improved)
	* Grid-item now uses small text.
	* Standardized grid class name between article and product collections.
	* Grid default vertical align set to top.
	* Removed border color from article cards since not compatible with theme colors.
	* Added micro transition on article card when :active.
2. [](bugfix)
	* Fixed grid item margins in portrait.
	* Fixed grid modular class names from blueprint.

# v1.5.18
## 03-02-2020

1. [](#improved)
	* nav__link class renammed to nav-link.
	* Removed .block and .inline utility class.
2. [](bugfix)
	* Fixed product collection left gutter.

# v1.5.17
## 03-02-2020

1. [](#improved)
	* Added missing active styles on nav link
	* Added missing reveal animation on articles
	* Navigation is now a macro.
	* Fixed some comments and class names.
2. [](bugfix)
	* Fixed splash modular video playback conditions when landscape image exist.
	* Fixed img template placeholder ratio.


# v1.5.16
## 30-01-2020

1. [](#improved)
	* Some minor standardization between product and article headers.
	* The end of the short lived grid padded items.
	* Added a small reveal animation to splash content.

# v1.5.15
## 29-01-2020

1. [](#new)
	* Article image can now be set to tight or site from admin.
2. [](#improved)
	* Site-loader transition set to 0.1s instead of 0.2s.
	* Article classes name.
3. [](#bugfix)
	* Fixed output of empty authors, image and other missing conditinals in articles. 

# v1.5.14
## 29-01-2020

1. [](#new)
	* Article template with collection.
	* More structure product collection header using page title.
2. [](#improved)
	* removed initial 200ms delay on reveal.
	* replaced formatdate with datetime macro.
	* Moved back site-loader below site-header.
	* Removed the rule for removing margins on top and bottom child element in content modular (that's a experience, might come back).
	* Unscoped pagination loader css.
3. [](#bugfix)
	* img partial now use proper alt

# v1.5.13
## 27-01-2020

1. [](#improved)
	* "page_content" twig block renammed to "content" for better plugin compatibility.

# v1.5.12
## 25-01-2020

1. [](#new)
	* Grid Modular can now control whether or not items are padded.
2. [](#improved)
	* Bumped Snipcart to 3.0.6.
	* Product Collection blueprint now set collection by default and can be modified in normal mode.
	* Buttons shortcodes now use the "mi" attribute to set material-icons instead of "i" making it the same as other material icons shortcodes.
	* Kept legacy support for "i" attribute in button shortcodes.
	* Moved notify.js to "after" js group.

# v1.5.11
## 24-01-2020

1. [](#improved)
	* Added default reveal to video modular
	* Shrunk h2 on mobile
	* Changes default highlight to a nice blue.
	* Better h1 margins
	* Use a select field for link rel selection in theme config admin panel
2. [](#bugfix)
	* Removed bugged out and unused modular_reveal.
	* Fixed buttons material icons line-height.
	* Fixed transition being set to "all" on default reveal transition.

# v1.5.10
## 24-01-2020

1. [](#new)
	* Each marker in Map modular can now set it's own icon.
	* Brand new link.js with theme config for prerender, preconnect, dns-prefetch. 
2. [](#improved)
	* Removed option for content over video modular.
	* trying a new nommenclature for theme analytics.
3. [](#bugfix)
	* Fixed drawer modular h tag since you can no longer set a title.

# v1.5.9
## 22-01-2020

1. [](#improved)
	* Synced h1 position between default page and splash modular when aligned vtop.
	* Removed Display Title option from modular.
	* Default nav has it's own heigth instead of rellying on rhythm.
	* Trying the addition of theme version number on theme analytics.
	* Unscopped some embed (youtube and vimeo) from content.css (now in site.css).

# v1.5.8
## 21-01-2020

1. [](#new)
	* Added width shortcode buttons to admin editor (tight and site).

# v1.5.7
## 20-01-2020

1. [](#improved)
	* Some general improivements to typography (line-height, margins, etc)
	* Allow for modular body_class to be used in modular
	* Removed bg_image and related fields from hero. It was mostly making extending the modular awkward.
2. [](#bugfix)
	* Fixed changelog date format
	* Removed demo content from the theme since it was unmaintained and might have caused some errors.

# v1.5.6
## 16-01-2020

1. [](#bugfix)
	* Fixed filepicker fields not accepting images in most blueprints.
	* Fixed content module default alignement value.

# v1.5.5
## 16-01-2020

1. [](#improved)
	* Pass on all pages and templates that eventually must deal with being next to the site-header.

# v1.5.4
## 16-01-2020

1. [](#improved)
	* Improved extendability of nav and modular role.
	* trying to find a middle ground for top margins of pages between style, usability and extendability.
2. [](#bugfix)
	* Fixed ajax-form notify fg-color

# v1.5.3
## 15-01-2020

1. [](#new)
	* Can now set a custom google map icon in theme config.
2. [](#improved)
	* removed some whitespace in markup frmo splash modifiers
3. [](#bugfix)
	* splash content using tight width when aligned right horizontally no align properly 

# v1.5.2
## 14-01-2020

1. [](#new)
	* default page and content modular now use "site" width.
	* splash modular can now set content position.
	* modular base template has 2 now variables for margin and padding.
2. [](#improved)
	* modular roles are now defined per module.

# v1.5.1
## 12-01-2020

1. [](#improved)
	* Better notification init
	* Notification can now support markdown
2. [](#bugfix)
	* Fix notification targeting homepage only or nested site.

# v1.5.0
## 11-01-2020

1. [](#new)
	* NEW FONT. Inter is now the single font used throughout the theme.
	* Width shortcodes now support classes.
	* TextSize shortcode to allow the use of xsmall, small, big and huge text size.
	* Splash modular landscape and portrait media.
2. [](#improved)
	* Better responsive rhythm.
	* Allow theme in map modular.
	* Small delay added to splash media scalein animation.
	* Admin panel colors and font made more "functional".
3. [](#bugfix)
	* Fixed .m-t_2 and .p-t utility class.

# v1.4.24
## 09-01-2020

1. [](#improved)
	* Started to add different text content (small & xsmall)
	* Improved text css
	* Removed deprecated slow3g asset
	* Removed Rhythm concept from theme blueprint

# v1.4.24
## 08-01-2020

1. [](#improved)
	* All of product css is now packaged in a single file
	* Cleaned up splash and removed huge h1 (use the size shortcode if you need it)
	* synced product-collection gutters with site gutters
	* un-scope strong from p tags
	* Better handle of spacing when multiple buttons 
	* Removed "page-" from all page css files

# v1.4.23
## 07-01-2020

1. [](#improved)
	* Simplified product buy button.
	* Simplified product items (cards).

# v1.4.22
## 04-01-2020

1. [](#new)
	* Buttons using btn and link shortcodes can detect if linking to current page media and act accordingly.
2. [](#bugfix)
	* js asset group "before" removed and replace by default pipeline output to prevent double js bundle.
	* Notify.js moved to default pipeline position
	* Use jquery from grav core to prevent duplicate.
3. [](#improved)
	* Small product improvements for long product names.
	* Removed small product description to remove clutter on mobile device
	* Product name in addtocart bar now only appear on mobile

# v1.4.21
## 03-01-2020

1. [](#new)
	* Notifications (using notify.js) can now be added per page or globally with local storage support. Notify.js received a small update as well.
3. [](#bugfix)
	* site-nav bg color can no longer be set from theme config

# v1.4.20
## 02-01-2020

1. [](#new)
	* Product collections can now be paginated
	* Super basic site notifications (WIP)
	* Gave the product card its own template (product-item.html.twig) 
2. [](#improved)
	* removed custom.css to allow simple customization
	* tighter blockquote and embed margins
	* tightened form submit with fields
	* improved product grid class name
3. [](#bugfix)
	* fix Grav debugger no loading
	* fix embed width in product content

# v1.4.19
## 31-12-2019

1. [](#new)
	* Introduction of product collection page (WIP)
	* Product "Add to cart" as a fixed component
2. [](#improved)
	* Product gallery height
	* Admin Product price is now a text field
	* General spacing improvement here and there
3. [](#bugfix)
	* Fixed lists indent

# v1.4.18
## 31-12-2019

1. [](#new)
	* New page css file naming scheme
	* Complete revamp of the product template
	* Header is now smaller on mobile
	* All Swiper now use scrollbar as pagination

# v1.4.17
## 26-12-2019

1. [](#bugfix)
	* Fixed grid modular spacing
	* Fixed some h tags vertical spacing

# v1.4.16
## 24-12-2019

1. [](#new)
	* Modular can now use their page title as display title
2. [](#improved)
	* Product and shortcode swiper responsivness

# v1.4.15
## 23-12-2019

1. [](#improved)
	* Updated snipcart to 3.0.5
	* Site-loader no longer use jquery fadeOut
	* Removed some console logs in reveal.js
	
# v1.4.14
## 23-12-2019

1. [](#improved)
	* Swiper in product and shortcode now use object fit cover.
	* Brought back a better version of img partial reveal
	* Allow low-rez placeholder while lazyloading and related options in admin panel
	* Fixed margins in forms used in some modular
	* Reduced Notification height and fixed wrapping in multiple paragraph message.
	* Use new async GA script 

# v1.4.13
## 21-12-2019

1. [](#bugfix)
	* Fixed form submission message not being visible (and made it bigger).

# v1.4.12
## 20-12-2019

1. [](#new)
	* Added image lazyloading for all images using the img partial.
2. [](#improved)
	* Some js files and function name have been slightly changed. I you experience problem on a up-to-date theme. Open an issue.

# v1.4.11
## 19-12-2019

1. [](#improved)
	* Changed delay and duration utility class names.
	* Deprecated old delay and duration utility class.
	* Pass on all modular to fix delay and duration class names.
	* Reveal is now a transition by default instead of an animation.
	* Product template now uses the "thight" width for the whole page.
	* img partial no longer can set reveal.
2. [](#bugfix)
	* Fixed fullscreen mode on embeded iframes (Youtube, Vimeo, etc)

# v1.4.10
## 19-12-2019

1. [](#improved)
	* Complete rewrite of embedShortcode.
	* Basic Youtube iFrame API integration.

# v1.4.9
## 18-12-2019

1. [](#new)
	* Added simple cart product count
	* site-header use site.title value instead of hardcoded one.
	* Content modular now controls it's own width (site/tight).
	* embed and othet content type now follow the content modular width instead of trying to define their own.
	* Button shortcodes are being worked on a lot.
2. [](#improved)
	* btn-link and btn-solid shortcodes have been removed in favor of simpler btn and link.

# v1.4.8
## 14-12-2019

1. [](#bugfix)
	* Fixed product sticky buy button
2. [](#new)
	* Preminilary support for Kaltura via shortcode

# v1.4.7
## 14-12-2019

1. [](#new)
	* Swiper as shortcode
2. [](#improved)
	* Various alignment fixed

# v1.4.6
## 13-12-2019

1. [](#new)
	* Added swiper image galery as product header
	* Added a sticky buy button in product
2. [](#improved)
	* Allow use of css and js twig block in base
3. [](#bugfix)
	* Fixed spacing issues with theme buttons used in grid-item.

# v1.4.5
## 13-12-2019

1. [](#improved)
	* Video embed shortcodes now support full URLs.
2. [](#bugfix)
	* Fixed spacing issues with theme buttons used in grid-item.

# v1.4.4
## 12-12-2019

1. [](#improved)
	* Addded loading lazy attr to tracking iframe
	* Bumped snipcart to 3.0.4.
	* Defered 3rd party script.
2. [](#bugfix)
	* Presumed fix for site-loader placeholder width 

# v1.4.3
## 11-12-2019

1. [](#new)
	* site-loader show placeholder content after a short delay
2. [](#bugfix)
	* Fixed Google Maps init error

# v1.4.2
## 10-12-2019

1. [](#bugfix)
	* Fixed form submit button position.
	
# v1.4.1
## 10-12-2019

1. [](#improved)
	* Improved form styles and submitting state

# v1.4.0
## 07-12-2019

1. [](#new)
	* Refactor of all modular blueprints and templates.
	* Refactor of modular spacing rules.

# v1.3.7
## 05-12-2019

1. [](#improved)
	* Theme options (colors, rhythm) as been moved out of modulars and into the master module.yaml
2. [](#bugfix)
	* Fixed burger position
	* Fixed grid-item content margins irregularity

# v1.3.6
## 04-12-2019

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
## 04-12-2019

1. [](#new)
	* Added reveal.css to allow easier reveal animation changes.
2. [](#improved)
	* default "revealed" animation renammed to "reveal".
	* Removed all mobile nav panel customization from admin panel since site-header is ment to be inherited and built upon.
3. [](#bugfix)
	* removed condition preventing img default reveal animation.

# v1.3.4
## 02-12-2019

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
## 01-12-2019

1. [](#new)
	* Added debug text for modular/page requiring api keys
2. [](#bugfix)
	* Replaced all multilangual demo content with non-multilangual content.
	* Removed a bugged default value in theme blueprint
	* Prevent some embeded iframes to overflow.

# v1.3.2
## 01-12-2019

1. [](#new)
	* Added demo content.
2. [](#improved)
	* Map modular make sure all markers are visible.
	* Product must now have an ID.
	* Made default theme values similar to demo site
	* BREAKING! - Streamlined Material icons shortcodes.
	* Removed logo from email template.

# v1.3.1
## 30-11-2019

1. [](#improved)
	* Moved map styles to proper css file.
	* Improved height on desktop

# v1.3.0
## 30-11-2019

1. [](#new)
	* Added Google Maps modular with support for snazzy directly in the theme blueprint and multiple markers
2. [](#improved)
	* Cleaned theme blueprint

# v1.2.20
## 29-11-2019

1. [](#improved)
	* Improved theme blueprint
	* General modular maintenance

2. [](#bufix)
	* Fixed Snipcart

# v1.2.19
## 29-11-2019

1. [](#bufix)
	* fixed grid item width properties

# v1.2.18
## 28-11-2019

1. [](#improved)
	* Moved most grid-item modular options to parent grid modular.
	* General maintenance.

# v1.2.17
## 28-11-2019

1. [](#improved)
	* Abandonning css grid in favor of flexbox for grid modular.

# v1.2.16
## 27-11-2019

1. [](#new)
	* Added option modular option to wrap or scroll on smaller screens.

# v1.2.15
## 27-11-2019

1. [](#improved)
	* BREAKING! fixed a typo in```rhythm``` everywhere. This will break a lot of things. I suggest you find and replace. Figured now was the best time to do it since still no one is using the theme.
	* Moved rhythm at the bottom of blueprints.
	* BREAKING! ```rhythm-negative``` is now ```rhythm-header```
	* improved padding in markdown notices.

# v1.2.14
## 26-11-2019

1. [](#improved)
	* width-tight set to 650px
	* Simplified youtube and vimeo shortcodes to youtube="id". **(breaking change!)**
	* Content modular is now always width-site so child elements can set their own width. 
	* Forms used in content modular width related css moved to content.css

# v1.2.13
## 26-11-2019

1. [](#improved)
	* Reveal animations have been moved to the content for a bunch of modular instead of the outter container.
	* Page classes now follow "page__{template-name}".
	* Big pass on modular class names.
	* Default-header modular is no more and is replaced with content modular.
	* Updated commented vars available in modular for all.
	* And more!

# v1.2.12
## 25-11-2019

1. [](#improved)
	* Content modular now support theme and width.

# v1.2.11
## 25-11-2019

1. [](#bugfix)
	* Fixed modular drawer icon position

# v1.2.10
## 24-11-2019

1. [](#bugfix)
	* Prevent tracking script and div if opted out of theme tracking

# v1.2.9
## 24-11-2019

1. [](#new)
	* Added tracking
2. [](#bugfix)
	* Removed green-hosting badge

# v1.2.8
##  23-11-2019

1. [](#new)
	* New screenshot
2. [](#improved)
	* Fixed padding on blockquote

# v1.2.7
##  23-11-2019

1. [New](#new)
	* Add noopener to external links
2. [](#improved)
	* Updated Snipcart and added key field is thme config
3. [](#bugfix)
	* Fixed modular having no fields in admin panel.

# v1.2.6
##  23-11-2019

1. [](#new)
	* Added support for markdown notices

# v1.2.5
##  23-11-2019

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
##  21-11-2019

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
##  18-11-2019

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
##  14-11-2019

1. [](#improved)
	* Added equal row height option in Grid.
	* General grid css maintenance.

# v1.2.1
##  12-11-2019

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
##  11-11-2019

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
##  09-11-2019

1. [](#improved)
	* Sadly removed Ficelle cdn (Nobody can use it anyway).
	* Use srcset for responsive image in img.html.twig.
2. [](#bugfix)
	* Stop using onanimationend in reveal.js (and never going back).

# v1.1.6
##  08-11-2019

1. [](#bugfix)
	* updated breakpoint shortcodes with new portrait and landscape class. Also re-added mobile and desktop classes.

# v1.1.5
##  08-11-2019

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
##  05-11-2019

1. [](#new)
	* Material Icons are now self hosted
	* Marquee is now bound to local storage (for 6 hours).
2. [](#improved)
	* typeface.css renamed simply font.css
	* Marquee has been moved to same z-index braquet as site-header
	* default site-loader fade-out now set to 200ms

# v1.1.3
##  05-11-2019

1. [](#new)
	* Added marquee
2. [](#improved)
	* Removed overly opinionated footer
3. [](#bugfix)
	* Moved jquery to "before" assets group.

# v1.1.2
##  04-11-2019

1. [](#improved)
	* Splash animation timings
	* Removed overly opinionated site-loader
	* Mobile nav naming scheme
	* Notify color options
	* Drawers and content modular now extends module
2. [](#bugfix)
	* Mobile nav toggle position

# v1.1.1
##  03-11-2019

1. [](#improved)
	* Minor style upgrades and fixes

# v1.1.0
##  03-11-2019

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
##  30-10-2019

1. [](#new)
	* Stable release!
	* Added styles for form select, radio and unique checkbox.
2. [](#improved)
	* Content and Drawers modular now extend partials.
	* Normalized whitespaces in shortcodes
	* Cleaned up and date format in changelog
	* Minor changes to readme

# v0.1.1
##  29-10-2019

1. [](#improved)
	* Updated README
	* Updated theme blueprint with proper links
	* Cleaned up some CSS files

# v0.1.0
##  29-10-2019

1. [New](#new)
	* Initial Release
