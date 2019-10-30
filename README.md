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

## Reveal
Add "reveal" animation to any element by adding ```data-reveal``` to it.
A default fadein will then be added when the element enters the screen.
You can learn more about this on [Github](https://github.com/hotdoy/reveal.js/blob/master/README.md) 

## links
Small link manager. Mostly to add or remove attributes.
Add ```target="_blank"``` to link starting with ```http``` by default.

## slow3g
User facing utilities for slow networks.

**slow3g.js**  
Warn users 2 seconds after a link is clicked if nothing happens by adding a full page overlay blocking further interaction and preventing more request.

**slow3g.html.twig**  
Slow network message template.

**slow3g.css**  
Styles for the message template. Also add some loading effects background on images (ommiting transparency enabled fomats) and videos. You can prevent this by adding the ```no3g``` class on said elements.

## site-header
Default site header / menu.
* site-header.js
* site-header.html.twig
* site-header.css

## site-loader
Default site-loader / transitions.
* site-loader.js
* site-loader.html.twig
* site-loader.css

## video
Pause or play videos depending on their visibility.

## notify
User facing notification system.

## form
Submits forms trough ajax. Then notify the user using notify.js