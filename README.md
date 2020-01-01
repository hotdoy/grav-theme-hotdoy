> **What's new ?** : You can now use Product and Product Collection page templates as of v1.4.19. Product collection are a step it the right direction and will be worked on in te next weeks.
Embed shortcodes have been split in two (youtube/vimeo) and the yt one just got a major level-up to a real integration using the youtube iframe api. 
Reveal animations are now transitions and utility classes for delays and durations have been upgraded. The old ones have been deprecated and should die in a future update. 


> **What's next ?** : Button shortcodes will be further improved allowing you to search for a specific page or page-media (or something like that).
Pagination will be added to product collections as well as "Virtual collections" letting you create lists of items in other collections (good for promotions and stuff like that) without having to duplicate content. 
Marquee will be taken out of theme config and be generated via the creation of a page, allowing for multiple languages. 
Site wide modal alert will be added in a similar fashion. 

> **Need a ✋ ?** : If you need help with theme customization using theme inheritance (the only good way to do it), or if you want to sponsor a feature, PM me and we'll see what can be done! :D

**You can [send me money](https://www.paypal.me/hotdoy) to give me a hand.**

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

# Customization 
All customization should be done using theme inheritance https://learn.getgrav.org/16/themes/customization#theme-inheritance to allow for future updates (and there will be updates). 
The Hotdoy theme also provides a reference to a css/custom.css file via the Asset Manager. Luckily, the Asset Manager handles this for us, and if the file is not found, the reference is not added to the HTML.
However, if you do provide a file called custom.css in Antimatter's css/ folder, this will get picked up and referenced. You just need to ensure that you provide CSS elements with enough specificity to override the default CSS.

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
