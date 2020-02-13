## A FAIR WARNING:

This theme is ever evolving. Things move around, major changes are made all the time, sometime requiring you take action. Use this as your own risk.

When extending this theme, you should use [Theme Inheritance](https://learn.getgrav.org/16/themes/customization). Create, overwrite or clone template you want to customize instead of trying to hack into mine. This way I can keep updating and you can keep the feature you care about. I hope we all have fun. Good luck :)

## What's new ?  
* **1.7 A LOT OF BREAKING CHANGES! Open an issue if you need help after the update. Most problems can be fixed by saving your pages. You will probably have to re-save colors, and modular margins/paddings.** 

## What's next ?  
* With the release of 1.7, I'm going back text context (xsmall, small, big, huge). Make them better and more usefull overall.
* Articles might get more taxonomy support.
* Adding more content and update the skeleton.
* Adding more support for shortcodes included with the ShortCode Core Plugin.
* Adding documentation on Modular and extending the theme (like changing the fonts and stuff like that).
* Some kind of nav behavior selection probably directly from the admin panel.

## Need a ✋ ?

If you need help with theme customization, setting up theme inheritance (the only good way to do it) or if you want to sponsor a feature, PM me and we'll see what can be done! :D

## Can I help?

Yes, by [sending me 💰](https://www.paypal.me/hotdoy).

# Hotdoy Theme

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be my starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and probably not suited for production unless you dont mind things changing all the times.
You can use this theme by simply downloading it. If you use the skeleton, make sure to upgrade the theme and check if the demo content still display properly (it will not). I'm having a hard time finding the time to update the skeleton so I'm thinking about abandonning it.

A live demo is available at [hotdoy.ca](https://hotdoy.ca). It is also my live testing ground so things can get a bit weird.

# Installation
Installing the Hotdoy theme can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

## GPM Installation

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install hotdoy

This will install the Hotdoy theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/hotdoy`.

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `hotdoy`. You can find these files either on [GitHub](https://github.com/getgrav/grav-theme-hotdoy) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under

    /your/site/grav/user/themes/hotdoy

# Customization 
All customization should be done using theme inheritance https://learn.getgrav.org/16/themes/customization#theme-inheritance to allow for future updates (and there will be updates). 

# Page Templates

* Default
* Modular
* Product
* Product Collection
* Article
* Article Collection

# Modular

* Content
* Hero
* Splash
* Video
* Grid / Grid-Item
* Drawers
* Map

# Shortcodes

## Breakpoint
Show content on specific device width only.
```
[portrait][/portrait] [landscape][/landscape]
```

## Button
Add buttons with material icons support. 
```
[btn href="https://google.com"], [link href="/mypage" mi="done"]
```

## Embeding videos
```
[youtube="url"] [vimeo="url"]
```

## Note
```[note][/note]```
Add unrendere content.

## Material Icons
```
[mi="icon-name"]
```
A complete list of icon codes can be found [here](https://material.io/resources/icons/)

## Width
```
[site][/site] [tight][/tight]
```

## Swiper
```
[swiper]
![](image.jpg)
![](image.jpg)
![](image.jpg)
[/swiper]
```
