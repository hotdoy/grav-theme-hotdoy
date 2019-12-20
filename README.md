> **WARNING! Update 1.4.x** : Big changes for all modular pages. You will need to re-save ALL modular after the update. 
Check the "options" tab in any modular to access the new modular theme options.

> **What's new ?** : Embed shortcodes have been split in two (youtube/vimeo) and the yt one just got a major level-up to a real integration using the youtube iframe api. Reveal animations are now transitions and utility classes for delays and durations have been upgraded. The old ones have been deprecated anbd should die in a future update. Button shortcodes have also been upgraded with a full twig template as foundation for the next step.

> **What's next ?** : Product page will get a much needed visual upgrade and I am in talk with a designer for an all around bump in visual language. Button shortcodes will be further improved with "modes" allowing you to search for a specific page or page-media (or something like that).

**You can [send me money](https://www.paypal.me/hotdoy) if you want to.**

# Hotdoy Theme

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be a starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and probably not suited for production unless you dont mind thing changing all the times.
You can use this theme by simply downloading it but I recommend using the [skeleton](https://github.com/hotdoy/grav-skeleton-hotdoy) instead. If you use the skeleton, make sure to upgrade the theme and check if the demo content still display properly.

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
[portrait], [mobile] or [landscape], [desktop].

## Button
Add buttons with out without material icons. 
```
[btn href="https://google.com"], [link href="mypage" i="done"].
```
You currently have to use absolute url to page media but I am working on something way more solid. (should be in the next release)

## Embed
Add [youtube=url] and [vimeo=url] by URL.
The older version was working with ID only and sucked.

## Note
Use [note] to add unrendered content.

## Material Icons
Add [mi="icon-name"](https://material.io/resources/icons/) with [i]

## Width
Use one of the 3 site witdh. [full], [site], [tight].

## Swiper
```
[swiper]
![]()
![]()
![]()
...
[/swiper]
```

# Modular
* Splash
* Hero
* Content
* Video
* Drawers
* Grid
* Map

# Attributions and sponsors
* Thanks to [msi-deepin.com](https://msi-deepin.com) for sponsoring the addition of [Swiper.js](https://swiperjs.com/) Shortcode.
* Thank you to [Gemma Chua-Tran](https://unsplash.com/@gemmachuatran) for the amazing photos used in the Skeleton and demo content.
