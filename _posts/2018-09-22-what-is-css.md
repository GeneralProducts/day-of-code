---
layout: guides
title:  What is CSS?
permalink: what-is-css
toc: true
category: CSS
order: 1
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<span class="tag tag--review">Ready for review</span>
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article introduces CSS, the language used to style web pages. Read it to learn how to apply CSS rules to your website.
</p>

Your website has some content, but it's using the default styling that comes with your browser. You can override these defaults with CSS. CSS stands for Cascading Style Sheets, so called because later rules override earlier ones, in a cascade. As an example, the colour of h1 text with the following stylesheet will be green, because green is the last instruction.

{% highlight css %}
  h1 {
    color: blue;
    color: green;
  }
{% endhighlight %}

## View the browser's default styles

Let's view what our styles looks like currently. In the browser, right mouse and click on **Inspect**.

![](assets/images/inspect.png)

The styles panel on the right shows me that the default styles for the `<h1>` HTML tag are that the font size is 2em (as in [em-dash](https://en.wikipedia.org/wiki/Em_(typography))) and the font weight is bold:

{% highlight css %}
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
{% endhighlight %}

> <span class="content__learn-more">The browser's inspector</span>
* Notice too that raw HTML is also displayed in the Inspect panel, in the Elements tab, on Chrome (other browsers may be a little different, but essentially do the same thing). Compare the HTML here with the HTML in your file. It's the same, give or take some whitespace. The Inspector is a good place to go to troubleshoot and debug your code when problems arise.

## Add CSS to override the default style

Open the file called `main.scss` in the css folder:

![](assets/images/main-css.png)

Add the following CSS to this file and save:

{% highlight css %}
  h1 {
    color: red;
  }
{% endhighlight %}

So the entire file looks like this:

{% highlight css %}
  ---
  ---

  // You will put CSS style information here.

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
    <span class="header__subtitle">Incredible stories, published with love</span>
  </h1>
{% endhighlight %}

Now look at the `<h1>` style definition in the Inspector. Does the `color: red` instruction appear? No. So the code we wrote isn't getting referenced. The solution is to add a reference to the CSS file so that the browser knows to run it when it interprets the HTML file.

In the `portfolio.html` file, add the following line between the `<head>` tags and save:

{% highlight html %}
  <link rel="stylesheet" href="/css/main.css">
{% endhighlight %}

Your file now looks like this:

{% highlight html %}
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      <div class="header__background">
        <h1>
          Portfolio
          <span class="header__subtitle">Incredible stories, published with love</span>
        </h1>
      </div>
      <section class="container__portfolio">
        Book list goes here
      </section>
    </body>
  </html>
{% endhighlight %}

Refresh your browser and now you'll see the changes applied:

![](assets/images/css-red.png)

## Use the inspector to make temporary edits

You can temporarily make changes in the Inspector to see how they'd look on the page. Have a go: make the `<h1>` text go blue.

![](assets/images/css-blue.gif)

## What you’ve learned

* Browsers have default styling, but it's not pretty
* We use CSS to override these default styles, and add new ones
* The HTML page needs to know where its CSS stylesheet is, via a link in the `<head>` of the HTML file
* The inspector is a handy tool for debugging and trying out changes to the CSS.
* CSS rules are applied in a cascade, hence the name. Later styles override earlier ones.







