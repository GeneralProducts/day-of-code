---
layout: guides
title:  <span class="time">10.45 </span> What is CSS?
permalink: what-is-css
toc: true
category: CSS
order: 1
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article introduces CSS, the language used to style web pages. Read it to learn how to apply CSS rules to your website.
</p>

Your website has some content, but it's using the default styling that comes with your browser. You can override these defaults with CSS. CSS stands for Cascading Style Sheets, so-called because some rules override other ones, in a cascade.

## View the browser's default styles

Let's view what the styles looks like currently. In the browser, right-mouse and click on **Inspect**. Expand the nested HTML on the left, so you can see the `<h1>` tag.

![](assets/images/inspect.png)

The styles panel on the right shows me that the default styles for the `<h1>` HTML tag are that the font size is 2em (as in [em-dash](https://en.wikipedia.org/wiki/Em_(typography))) and the font weight is bold.

> <span class="content__learn-more">The browser's inspector</span>
* Notice too that raw HTML is also displayed in the Inspect panel, in the Elements tab, on Chrome (other browsers may be a little different, but essentially do the same thing). Compare the HTML here with the HTML in your file. It's the same, give or take some whitespace. The Inspector is a good place to go to troubleshoot and debug your code when problems arise.

## Add CSS to override the default style

Open the file called _main.css_ in the _assets/css/_ folder:

![](assets/images/main-css.png)

Add the following CSS to this file and save:

{% highlight css %}
  h1 {
    color: red;
  }
{% endhighlight %}

So the entire file looks like this:

{% highlight css %}
  /* You will put CSS style information here. */

  h1 {
    color: red;
  }
{% endhighlight %}

Refresh the browser page. You expect the colour of the heading to go red, right? But it's not changed. What has gone wrong? Let's debug the problem.

## Debug the problem

First, look in your Inspector, in the HTML Elements panel. Is the HTML tag indeed `<h1>`? Yes, that is correct. The word "Portfolio" is surrounded by `<h1>` tags:

{% highlight html %}
  <h1>
    Portfolio
  </h1>
{% endhighlight %}

Now look at the `<h1>` style definition in the Inspector.

![](assets/images/inspect.png)


Does the `color: red` instruction appear? No: the code you wrote isn't getting referenced. That's the clue you need to figure out what's going wrong. The solution is to add a reference to the CSS file so that the browser knows to run it when it interprets the HTML file.

> <span class="content__learn-more">Troubleshooting</span>
* Things go wrong in programming all the time. The trick is not to panic, and to look for clues. It can be, believe it or not, fun.

In the _portfolio.html_ file, add the following line between the `<head>` and `</head>` tags and save:

{% highlight html %}
  <link rel="stylesheet" href="/assets/css/main.css"/>
{% endhighlight %}

Your file now looks like this:

{% highlight html %}
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="/assets/css/main.css"/>
    </head>
    <body>
      <header>
        <h1>
          Portfolio
        </h1>
      </header>
      <main>
        Book list goes here
      </main>
    </body>
  </html>
{% endhighlight %}

Refresh your browser and now you'll see the changes applied:

![](assets/images/css-red.png)

## Use the inspector to make temporary edits

You can temporarily make changes in the Inspector to see how they'd look on the page. Have a go: make the `<h1>` text go blue. Right mouse on the colour chip to bring up the colour editor:

![](assets/images/css-blue.gif)

## What you’ve learned

* Browsers have default styling, but it's not pretty
* You use CSS to override these default styles, and add new ones
* The HTML page needs to know where its CSS stylesheet is, via a link in the `<head>` of the HTML file
* The inspector is a handy tool for debugging and trying out changes to the CSS.
* CSS rules are applied in a cascade, hence the name.
