---
layout: guides
title:  <span class="time">10.45 </span> What is CSS?
permalink: what-is-css
toc: true
category: CSS
order: 1
---

<p class="content__abstract">
  This article introduces CSS, the language used to style web pages. Read it to learn how to apply CSS rules to your website.
</p>

Your website has some content, but it's using the default styling that comes with your browser. You can override these defaults with CSS. CSS stands for Cascading Style Sheets, so-called because some rules override other ones, in a cascade.

## View the browser's default styles

Let's view what the styles looks like currently. In the browser, right-mouse and click on **Inspect**. Expand the nested HTML on the left, so you can see the `<h1>` tag.

![A screenshot showing the browser's inspector, showing h1 css](assets/images/inspect.png)

> <span class="content__learn-more">Troubleshoot<span>
* Your panels might be arranged differently, with the code on the right. If you want to rearrange them, in Chrome, click the three dots on the toolbar that contains the words Console, Elements etc then choose your preferred Dock Side option.

The styles panel on the right shows me that the default styles for the `<h1>` HTML tag are that the font size is 2em (as in [em-dash](https://en.wikipedia.org/wiki/Em_(typography))) and the font weight is bold.

> <span class="content__learn-more">The browser's inspector</span>
* Notice too that raw HTML is also displayed in the Inspect panel, in the Elements tab, on Chrome (other browsers may be a little different, but essentially do the same thing). Compare the HTML here with the HTML in your file. It's the same, give or take some whitespace. The Inspector is a good place to go to troubleshoot and debug your code when problems arise.

## Add CSS to override the default style

You're going to override the default style with some styles of your own.

Open the file called _main.css_ in the _assets/css/_ folder:

![Screenshot showing the empty file where the reader will put their css code](assets/images/main-css.png)

Add the following CSS to this file and save:

{% highlight css %}
  h1 {
    color: red;
    font-family: sans-serif;
  }
{% endhighlight %}

So the entire file looks like this:

{% highlight css %}
  /* You will put CSS style information here. */

  h1 {
    color: red;
    font-family: sans-serif;
  }
{% endhighlight %}

## Tell the HTML file about the CSS

Next you need to tell the HTML to use your new CSS rules. In the _portfolio.html_ file, add the following line between the `<head>` and `</head>` tags and save:

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

![The css now works as the screenshot shows the h1 rendered in red](assets/images/css-red.png)

## Use the inspector to make temporary edits

You can temporarily make changes in the Inspector to see how they'd look on the page. Have a go: make the `<h1>` text display in a different font, or change the colour to blue. To edit colour, right-mouse on the colour chip to bring up the colour editor:

![A gif showing the user changing the color of the text in the inspector](assets/images/css-blue.gif)

> <span class="content__learn-more">Learn more later<span>
* Try styling the `<p>` tag as well by adding styling to the _main.css_ file, like this:
* ` p { color: blue } `

## What you’ve learned

* Browsers have default styling, but it's not pretty
* You use CSS to override these default styles, and add new ones
* The HTML page needs to know where its CSS stylesheet is, via a link in the `<head>` of the HTML file
* The inspector is a handy tool for debugging and trying out changes to the CSS.
* CSS rules are applied in a cascade, hence the name.
