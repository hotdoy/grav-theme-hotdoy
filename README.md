[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/hotdoy)

MAKE SURE TO UPDATE EVERYTHING IF YUO INSTALLED THE THEME TROUGH THE SKELETON!  

When extending this theme, you should use [Theme Inheritance](https://learn.getgrav.org/16/themes/customization). Create, overwrite or clone template you want to customize.

## What's next?
Not much for hotdoy. I will keep it in working order and respond to issues.
With COVID-19 and everything around it, I am still working with Grav but on more personal projects.
That's pretty much it for the theme. I'll eventually release another theme to the GPM but I have to get my life in working order first. I have been on the Canadian Goverment help program for the last 2 month and I'm not convinced my previous employer will ever call me back.

## Need a ✋ ?

If you need help with theme customization, setting up theme inheritance (the only good way to do it) or if you want to sponsor a feature, PM me and we'll see what can be done! :D

## Can I help?

Yes, by [sending me 💰](https://www.paypal.me/hotdoy).

# Hotdoy Theme

![Theme screenshot](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

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
[portrait][/portrait] 
[landscape][/landscape]
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

## Text size
```
[xsmall][/xsmall]
[small][/small]
[big][/big]
[huge][/huge]
```
