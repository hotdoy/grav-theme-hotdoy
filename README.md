> **WARNING!** : I am currently doing a lot of breaking changes. Like all the time, everyday. So you might want to wait if you plan on using this theme for [inheritance](https://learn.getgrav.org/16/themes/customization) and keep receiving updates.

> **WHAT'S NEXT?** : This week should be about a Google Maps modular ~~and hopefully fixing Snipcart~~ (done!). I was thinking of maybe changing the way reveal animations are attributed to a modular by giving everyone it's own class and stuffing all of that in one css file so you could control all animations from there.

# Hotdoy Theme

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be a starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and not suited for inheritance at the moment unless you dont mind thing changing all the times.

A live demo is available at [hotdoy.ca](https://hotdoy.ca). I still have content to write but you get the idea.

For the moment, here is a list of what I run..
* Admin Panel
* Admin Addon User Manager
* Auto Date
* Data Manager
* DevTools
* Email
* Error
* Form
* Login
* Problems
* Quick Tray Links
* Shortcode Core
* Sitemap

# Installation
Installing the Hotdoy theme can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton (not ready yet. Sorry).

## GPM Installation (Preferred)

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install hotdoy

This will install the Quark theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/hotdoy`.

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `hotdoy`. You can find these files either on [GitHub](https://github.com/getgrav/grav-theme-hotdoy) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under

    /your/site/grav/user/themes/hotdoy

# Theme Options

Hotdoy comes with a few options that can be set site-wide.  These options are:

```yaml
enabled:                    # Enable the theme
Browser Color:              # Set the <meta name="theme-color"> for supported browsers.
Background Color:           # Set the main background color (Used for text, modules and other non-interactive elements).
Foreground Color:           # Set the main foreground color (Used for text, modules and other non-interactive elements).
Alternate background Color: # Set the alternate background color (used in buttons, link and other interactive elements).
Alternate boreground Color: # Set the alternate foreground color (used in buttons, link and other interactive elements).
Rhythm:                     # Space between modules and other elements.
Radius:                     # Default border radius.
Organization:               # A collection of field describing your organization (generate schema).
google_tracking_id:         # Google analytics id
facebook_app_id:            # Facebook App Id
marquee:                    # A collection of field to add a small marquee at the top of every page.
snipcart:                   # Snipcart Id for eCommerce integration.
tracking:                   # Send me information on domains that use the theme so I know what not to break.
```

To make modifications, you can copy the `user/themes/hotdoy/hotdoy.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> NOTE: Do not modify the `user/themes/hotdoy/hotdoy.yaml` file directly or your changes will be lost with any updates

# Concept
The theme is made to be my starter kit for grav projects. But anybody is welcome to try and use it.
Everything will be made readily extendable (in time). It uses css variables heavily so forget old browsers (sorry ie).
The entire color theme is controllable inside the admin panel.

# Shortcodes

## Breakpoint
show content on specific breakpoint.
[portrait], [mobile] and [landscape], [desktop].

## Button
Add buttons with out without material icons
[btn-solid], [btn], [btn-link], [link] 

## Embed
Add [youtube=id] and [vimeo=id] by id

## Note
Use [note] to add unrendered content.

## Material Icons
Add [Material Icons](https://material.io/resources/icons/) with [i]

## Width
Use one of the 3 site witdh. [full], [site], [tight].

# Modular
* Splash
* Hero
* Content
* Video
* Drawers
* Grid

Every modular is a extended partial. In order to extend an existing Modular, simply copy the modular template file from hotdoy to the child theme. 
If you only modify the commented variables and block, the module should be able to update without any issue. (Check the changelog before updating)

## Included Js

### reveal.js
Add "reveal" animation to any element by adding ```data-reveal``` to it.
A default fadein will then be added when the element enters the screen.
You can learn more about this on [Github](https://github.com/hotdoy/reveal.js/blob/master/README.md) 

### links.js
Small link manager. Mostly to add or remove attributes.

### site-header.js
Default site header / menu.
* site-header.js
* site-header.html.twig
* site-header.css

### site-loader
Default site-loader / transitions.
* site-loader.js
* site-loader.html.twig
* site-loader.css

### video.js
Pause or play videos depending on their visibility.

### notify.js
User facing notification system. Works like that...
``` notify(message, bg_color, fg_color); ```
Also comes with notify.css. (default styles you could overwrite by making a copy in a child template).

### form.js
Submits forms trough ajax. Then notify the user using notify.js

### tracking.js
Sends domain information to me so I know what to do next in the theme.
