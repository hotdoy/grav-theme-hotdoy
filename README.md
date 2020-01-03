> **What's new ?** : Notifications! You can now create a page using the Notifications blueprint and add global or targeted notifications. Folder name MUST be "notifications". (Make sure you set Routable and Visible to False in the Advanced tab).

> **What's next ?** : Button shortcodes will be further improved allowing you to search for a specific page or page-media (or something like that).
Marquee will be deprecated since Notifications are way better.

> **Need a ✋ ?** : If you need help with theme customization using theme inheritance (the only good way to do it), or if you want to sponsor a feature, PM me and we'll see what can be done! :D

**You can help by [sending me 💰](https://www.paypal.me/hotdoy).** (I will do PR and issues but really, just send money.)

# Hotdoy Theme

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be my starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and probably not suited for production unless you dont mind things changing all the times.
You can use this theme by simply downloading it but I recommend using the [skeleton](https://github.com/hotdoy/grav-skeleton-hotdoy) instead. If you use the skeleton, make sure to upgrade the theme and check if the demo content still display properly.

A live demo is available at [hotdoy.ca](https://hotdoy.ca). It is also my live testing ground so things can get a bit weird.

# Installation
Installing the Hotdoy theme can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

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
However, if you do provide a file called custom.css in Hotdoy's css/ folder, it will get picked up and referenced. You just need to ensure that you provide CSS elements with enough specificity to override the default CSS.
If you need any kind of customization other than that, You should use inheritance.

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
Add [youtube="url"] and [vimeo="url"] by URL.

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

# Attributions and sponsors
* Thanks to [msi-deepin.com](https://msi-deepin.com) for sponsoring the addition of [Swiper.js](https://swiperjs.com/) Shortcode.
* Thank you to [Gemma Chua-Tran](https://unsplash.com/@gemmachuatran) for the amazing photos used in the Skeleton and demo content.
