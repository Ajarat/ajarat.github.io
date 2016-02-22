---
layout: post

title: "Saving SVGs for Custom Icon Fonts"
date: 2016-02-22 16:14:00 -0700
categories: help
tags: svg, icon font

header_img: "/assets/img/articles/test/cthulu-header.png"
thumbnail: "/assets/img/articles/test/cthulu.png"
---

I always use an icon font in every new project I work on. I love having all those fun little characters to brighten up my designs and almost every site needs a good caret, chevron or hamburger here and there.

I used to just use [Font Awesome][font-awesome] or [Ionicons][ionicons] for all my projects. At some point I started to have the nagging feeling that I was wastefully loading a 700K+ font package and not even using 10% of the icons included. Not to mention I would often find that the icon I wanted wasn’t part of whatever package I was using. One day at work I finally decided to just sit down and figure out how to start creating my own custom fonts tailored specifically for the project it’s in.

Don’t get me wrong, both Font Awesome and Ionicons are great. I actually still take a lot of the icons I DO use from those packages. They’re just so huge! The Font Awesome  v.4.5.0 webfont package alone is 750K. The largest custom font package I’ve ever created (the one I made for [FSW.com][fsw-com]) is still only 125K. The package for this site, as of today, is only 12K!

Obviously you’re thinking, “Okay. How do I make these fancy custom icon fonts?” Well, the solution I use is called [Font Custom][font-custom]. They have some docs [here][font-custom] and I ran into a few minor problems, but since some docs already exist, I’d like that to be a topic for another article. The subject I wanted to touch on in this one is, “How the hell do I properly save my SVGs so they actually work in the font?”



[font-awesome]: http://fortawesome.github.io/Font-Awesome/
[ionicons]: http://ionicons.com/
[fsw-com]: http://fsw.com/
[font-custom]: http://fontcustom.github.io/fontcustom/
