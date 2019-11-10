# Hotdoy Theme

![alt text](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be a starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and not suited for production at the moment.

A live demo is available at [hotdoy.ca](https://hotdoy.ca). (I dump the thing periodically).

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
organization:               # A collection of field describing your organization (generate schema).
google_tracking_id:         # Google analytics id
facebook_app_id:            # Facebook App Id
ficelle:                    # Don't. It's a private image CDN and you need access from a guy you don't know. Sorry.
marquee:                    # A collection of field to add a small marquee at the top of every page.
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
[mobile], [desktop]

## Button
Add buttons with out without material icons
[btn-solid], [btn-link].

## Embed
Add [youtube] and [vimeo] by id

## Note
Use [note] to add unrendered content.

## Material Icons
Add [Material Icons](https://material.io/resources/icons/) with [i]

## Width
Use one of the 3 site witdh. [full], [site], [tight].

# Modular
More details to come.
* Splash
* Hero
* Content
* Video
* Drawers
* Grid (unreleased)

Every modular is a extended partial. In order to extend an existing Modular, simply copy the modular template file from hotdoy to the child theme. 
If you only modify the commented variables and block, the module should be able to update without any issue. (Check the changelog before updating)

## Included Js (mostly)

### reveal.js
Add "reveal" animation to any element by adding ```data-reveal``` to it.
A default fadein will then be added when the element enters the screen.
You can learn more about this on [Github](https://github.com/hotdoy/reveal.js/blob/master/README.md) 

### links.js
Small link manager. Mostly to add or remove attributes.
Add ```target="_blank"``` to link starting with ```http``` by default.

### slow3g.js
User facing utilities for slow networks.

**slow3g.js**  
Warn users 2 seconds after a link is clicked if nothing happens by adding a full page overlay blocking further interaction and preventing more request.

**slow3g.html.twig**  
Slow network message template.

**slow3g.css**  
Styles for the message template.

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

### notify
User facing notification system. Works like that...
``` notifymessage, bg_color, fg_color); ```
Also comes with notify.css. (default styles you could overwrite by making a copy in a child template).

### form.js
Submits forms trough ajax. Then notify the user using notify.js
