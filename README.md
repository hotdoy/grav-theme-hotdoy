# Hotdoy Theme

![alt text](https://raw.githubusercontent.com/hotdoy/grav-theme-hotdoy/master/screenshot.jpg)

The **Hotdoy** Theme is meant to be a starting point for projects using [Grav CMS](http://github.com/getgrav/grav).
It is in active developpement and not suited for production at the moment.

A live demo is temporarily available at [hotdoy.hotdoy.org](https://hotdoy.hotdoy.org). (I dump the thing periodically).
Skeleton is comming soon with the goodies.

For the moment, here is a list of what I run..
* Admin Panel  v1.9.10
* Admin Addon User Manager v2.1.8
* Auto Date  v1.0.2
* Data Manager  v1.2.0
* DevTools  v1.2.3
* Email  v3.0.3
* Error  v1.6.2
* Form  v3.0.9
* Login  v3.0.4
* Pagination  v1.4.2
* Problems  v2.0.3
* Quick Tray Links  v1.0.0
* Shortcode Core  v4.1.6
* Sitemap  v1.9.4

## Concept
The theme is made to be my starter kit for grav projects. But anybody is welcome to try and use it.
Everything will be made readily extendable (in time). It uses css variables heavily so forget old browser (sorry no sorry).
The entire color theme is controllable inside the admin panel.

## Shortcodes

### Breakpoint
show content on specific breakpoint.
[mobile], [desktop]

### Button
Add buttons with out without material icons
[btn-solid], [btn-link].

### Embed
Add [youtube] and [vimeo] by id

### Note
Use [note] to add unrendered content.

### Material Icons
Add [Material Icons](https://material.io/resources/icons/) with [i]

## Width
Use one of the 3 site witdh. [full], [site], [tight].

##Modular
* Splash
* Hero
* Content
* Video
* Drawers

Every modular is a extended partial. In order to extend an existing Modular, simply copy the modular template file from hotdoy to the child theme. 
All available blocks and variables are already commented for you.
(Is you follow this, the theme should be able to receive updates without breaking).

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
Styles for the message template. Also add some loading effects background on images (ommiting transparency enabled fomats) and videos. You can prevent this by adding the ```no3g``` class on said elements.

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
User facing notification system.

### form.js
Submits forms trough ajax. Then notify the user using notify.js
