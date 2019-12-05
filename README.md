> **WARNING!** : I am currently doing a lot of breaking changes. Like all the time, everyday. So you might want to wait if you plan on using this theme for [inheritance](https://learn.getgrav.org/16/themes/customization) and keep receiving updates.

> **So what I'm I breaking this week?** : This week is about margin/padding management, moving all modular theme (colors, spacing) to the master module.yaml file and managing everything in one place. Also quick style exploration pass on forms. So no new feature. Just improvement. (I'll break shit nontheless). Also rhythm class names kinda suck so i'll probably change some of that. 

**You can [send me money](https://www.paypal.me/hotdoy) if you want to.**

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
* Map

Every modular is a extended partial. In order to extend an existing Modular, simply copy the modular template file from hotdoy to the child theme. 
If you only modify the commented variables and block, the module should be able to update without any issue. (Check the changelog before updating)

