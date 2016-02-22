---
layout: post

title: "Saving SVGs for Custom Icon Fonts"
date: 2016-02-21 20:33:00 -0700
categories: help
tags: svg, icon font

header_img: "/assets/img/articles/saving-svg/hop-icon.png"
thumbnail: "/assets/img/articles/saving-svg/hop-icon.png"
---

I always use an icon font in every new project I work on. I love having all those fun little characters to brighten up my designs and almost every site needs a good caret, chevron or hamburger here and there. I used to just use [Font Awesome][font-awesome] or [Ionicons][ionicons] for all my projects. At some point I started to have the nagging feeling that I was wastefully loading a 700K+ font package and not even using 10% of the icons included. Not to mention I would often find that the icon I wanted wasn’t part of whatever package I was using.

One day at work I finally decided to just sit down and figure out how to start creating my own custom fonts tailored specifically for the project it’s in.

Don’t get me wrong, both Font Awesome and Ionicons are great. I actually still take a lot of the icons I DO use from those packages. They’re just so huge! The Font Awesome  v.4.5.0 webfont package alone is 750K. The largest custom font package I’ve ever created (the one I made for [FSW.com][fsw-com]) is still only 125K. The package for this site, as of today, is only 12K!

Obviously you’re thinking, “Okay. How do I make these fancy custom icon fonts?” Well, the solution I use is called [Font Custom][font-custom]. They have some docs [here][font-custom] and I ran into a few minor problems, but since some docs already exist, I’d like that to be a topic for another article. The subject I wanted to touch on in this one is, “How the hell do I properly save my SVGs so they actually work in the font?”

Good question.

Most of the time I spent wrestling with building my first font was simply trying to figure out what was wrong with the SVGs I was saving out of Illustrator. My saved SVGs seemed to move outside the artboard and the line height was way off within the font. I Googled the issue for hours trying to find someone else out there who was having the same problem. No luck. I was fairly certain I was simply choosing the incorrect SVG Options while saving, so with a bit of intuition and a lot of trial and error, I finally found the right combination of settings.

But first, let’s get the process started properly.

These settings are pretty self-explanatory. Fontcustom requests that your icons are specifically 34x34. Also, see that you’re RBG and 72ppi and all that good stuff.

Make sure your icon fills the artboard from edge to edge on its longest side and is vertically and horizontally centered. Also, ensure that all of your strokes are outlines, all your paths are united, there are no masks, and your shape is black (#000). That consistency will reduce your file sizes and undoubtedly save you from having to write many more lines of CSS in the future.

Now, the most important part- those SVG Options.

Change your options to the above settings and that pesky line height issue should be resolved. The one thing I’d like to point out is the Decimal Places. The lower that number- the smaller your SVG’s file size. I almost always keep it at 1, but occasionally when I have a very detailed icon I raise it up to 3. I suggest starting at 1 and if you notice something wonky, raise it.

Note: From time to time my Illustrator will decide to be a jerk and move the icons around on the artboard again. Simply creating a new document and saving your icon there seems to fix that. 

I hope this proves to be helpful. Enjoy those super awesome, efficient custom fonts! Your users will appreciate it and you’ll feel super fancy!


[font-awesome]: http://fortawesome.github.io/Font-Awesome/
[ionicons]: http://ionicons.com/
[fsw-com]: http://fsw.com/
[font-custom]: http://fontcustom.github.io/fontcustom/
