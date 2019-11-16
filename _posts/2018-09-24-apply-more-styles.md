---
layout: guides
title:  <span class="time">11.00 </span> Apply more styles
permalink: apply-more-styles
toc: true
category: CSS
order: 2
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains how to add more styles to your website.
</p>

## Add more CSS

Paste the following in to the _main.css_ file, replacing your `h1` definition and all the current contents of the file.

{% highlight css linenos%}

  /* Structure */
  body {
    margin: 0;
    font-family: "Amiri", Georgia, serif;
    font-size: 28px;
    color: #232323;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  header {
    padding: 50px;
    text-align: center;
    text-transform: uppercase;
    background-color: #03a9f4;
  }

  .primary-header {
    background-image: url(/images/bright-flowers.jpg);
    background-size: 100%;
  }

  .secondary-header {
    background-image: url(/images/flower3.jpg);
    background-size: 100%;
  }

  section {
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 20px;
  }

  @media (min-width: 1110px) {
    section {
      width: 800px;
    }

    aside {
      width: 50%;
    }
  }

  figure {
    margin: 50px 0 0  5px;
    flex: 1;
  }

  aside {
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: white;
    margin: 0 auto;
    margin-top: 10px;
    padding-top: 8px;
    opacity: 0.95;
    font-size: 0.7em;
  }

  /* Typography */
  h1 {
    background-color: white;
    opacity: 0.95;
    font-size: 1em;
  }

  @media (min-width: 1110px) {
    h1 {
      letter-spacing: 10px;
      width: 50%;
      margin: 0 auto;
      font-size: 2em;
    }
  }

  .secondary {
    font-family: "Noto sans", Arial, sans-serif;
    font-size: 20px !important;
    color: #2e2e2e;
    padding: 8px;
  }

  h2 {
    font-size: 0.7em;
  }

  @media (min-width: 1110px) {
    h2 {
      font-size: 1em;
    }
  }

  h3 {
    font-size: 0.6em;
    margin: 60px 0 -30px 0;
    font-family: "Noto sans", Arial, sans-serif;
  }

  p {
    color: #232323;
    font-family: "Amiri", Georgia, serif;
    font-size: 0.75em;
    line-height: 34px;
  }

  /* Links */
  a {
    color: #232323;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 4px solid #232323;
  }

  .bookstore {
    margin: 20px 10px 10px 0;
    line-height: 60px;
    border-bottom: 3px solid #e4e4e0;
  }

  /* Lists */
  ul {
    display: flex;
    flex-flow: row wrap;
  }

  li {
    list-style-type: none;
    font-size: 16px;
    margin: 0;
  }

  /* Navigation */
  .nav-item-container {
    padding: 0;
    font-weight: 800;
    display: flex;
    justify-content: space-evenly;
  }

  .nav-item {
    font-size: 0.6em;
  }

  @media (min-width: 1110px) {
    .nav-item {
      padding: 0 30px;
      font-size: 22px;
    }

    .nav-item-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 10px 0;
    }
  }

  /* Images */
  .covers-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;
  }

  .covers-container li {
    flex: 1;
    display: flex;
    padding: 10px;
    margin: 5px;
  }

  @media (min-width: 1110px) {
    .covers-container li {
      background-color: #eff1f7;
    }
  }

  .covers-container a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }

  .covers-container a:hover {
    border-bottom: none;
    filter: brightness(1.2);
  }

  .covers-container	p {
    margin: 10px 0 0;
    font-family: "Noto Sans", sans-serif !important;
    font-size: 16px;
    line-height: 1.3;
  }

  .cover {
    width: 220px;
    box-shadow: 2px 2px 8px #aaaeb9;
  }

  img {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 12px;
    line-height: 1.8;
    width: 98%;
  }

  .cover--home {
    float: right;
    width: 100%;
    margin: 20px 0;
  }

  @media (min-width: 1110px) {
    .cover--home {
      width: 240px;
      border: 5px solid #000162;
    }
  }

  .cover--home:hover {
    filter: brightness(1.2);
  }

  .cover--large {
    box-shadow: 2px 2px 8px #aaaeb9;
  }

  .cover--large:hover {
    filter: brightness(1.2);
  }

  /* Footer */
  footer {
    position: relative;
    top: 150px;
    border-top: 5px solid #E7EBF4;
    background-color: #232323;
  }

  footer .wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 800px;
    flex-direction: column;
  }

  footer ul {
    display: flex;
    flex-direction: column;
  }

  footer li {
    flex: 1;
    list-style: none;
    font-family: "Noto Sans", Arial, sans-serif;
  }

  footer li img {
    background-color: white;
    width: 30px;
  }

  footer li, footer li a {
    color: white;
    padding: 5px 0;
  }

  @media (min-width: 1110px) {
    footer ul:first-child {
      padding-left: 0;
    }

    footer .wrapper {
      flex-direction: row;
    }
  }

  footer li a:hover {
    color: #03a4a6;
  }

  /* Portfolio page */
  .portfolio-page {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media (min-width: 1110px) {
    .portfolio-page {
      flex-direction: row;
      max-width: 1000px !important;
    }
  }

  @media (min-width: 1110px) {
    .portfolio-page section {
      margin-left: 30px;
      flex: 2;
    }
  }

  .portfolio-page h1 {
    letter-spacing: normal;
    margin: 40px 0;
    line-height: 1.1;
    width: 100%;
  }

  .portfolio-page h2 {
    line-height: 1.1;
  }

  .portfolio-header {
    background-image: url("/images/shadow.jpg");
    background-size: 100%;
    padding: 30px;
  }

  .metadata, .metadata span {
    display: flex;
    font-family: "Noto sans", Arial, sans-serif;
    font-size: 14px;
    color: #839292
  }

  .metadata {
    display: flex;
    margin: 40px 0 -30px;
    border-top: 2px solid #f1f1eb;
    padding-top: 10px;
    padding-left: 0;
    flex-direction: column;
  }

  @media (min-width: 1110px) {
    .metadata {
      flex-direction: row;
    }
  }

  .metadata li {
    padding-right: 20px;
  }

  .shops {
    font-family: "Noto sans", Arial, sans-serif;
    padding-left: 0;
  }

  .shops li {
    margin: 0 0 -20px;
  }

  hr {
    border: 2px solid #f1f1eb;
  }

  .massive {
    font-size: 120px;
    position: relative;
    top: 30px;
  }

{% endhighlight %}

There are more styles than you necessarily need at the moment here, but this will improve the look of your website and let us focus on more types of programming today.

Refresh your browser page, and it's quite transformed:

![Screenshot showing a nicely styled website with a nice blue header](assets/images/styled-page.png)

That font, however, looks suspiciously like Georgia, and not the one referenced first in the inspector: "Amiri". Another font, "Noto Sans", is also referenced in the CSS, on line 78 and other places. These are not fonts which are included in operating systems, and so, to use them, you have to include a reference to those fonts, which are hosted on Google Web Fonts.

## Include the correct fonts

Paste the following line into the head of your _portfolio.html_ page, before or after the stylesheet link (the order doesn't matter).

{% highlight html %}
<link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet">
{% endhighlight %}

Save the file, and refresh your browser.

![Screenshot showing the new font applied to the header](assets/images/google-font.png)

Ooh, fancy! If you don't like this serif font, though, you can choose your own.

## Search for and use your own choice of font

* Go to [Google Fonts](https://fonts.google.com/).
* Search for a font you like. The Abril Fatface one looks quite jolly.

![A screenshot of the Google Fonts website showing a range of interesting fonts](assets/images/gf.png)
* Copy the link of the one you like.

![A gif showing the user selecting the font they like on Google Fonts](assets/images/font.gif)
* Paste the link in between the `<head>` and `</head>` tags, as in the previous exercise. You'll end up with something like this:
{% highlight html %}
<link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet">
{% endhighlight %}

* Reference the new font in your CSS file, in the `body` definition.
{% highlight css linenos %}
  /* Structure */
  body {
    margin: 0;
    font-family: "Abril Fatface", Georgia, sans-serif;
    font-size: 28px;
    color: #232323;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
{% endhighlight %}

* Refresh your browser to see the results.

![A screenshot of the font the user has selected, in use on the website they're building](assets/images/fatface.png)

Another different look! I'm going to switch back to Amiri but you can choose whether to keep your new font or not.

## Edit the styles

In _assets/css/main.css_, find the `body` definition that starts on line 2:

{% highlight css linenos %}
  /* Structure */
  body {
    margin: 0;
    font-family: "Amiri", Georgia, serif;
    font-size: 28px;
    color: #232323;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
{% endhighlight %}

There is a CSS command called `background-color` which is not included in the `body` definition. Add it in, and choose a color using hex codes ([here is a website you can use to get them](https://htmlcolorcodes.com/)). Your CSS will look something like this (the addition is on line 10):

{% highlight css linenos %}
  /* Structure */
  body {
    margin: 0;
    font-family: "Amiri", Georgia, serif;
    font-size: 28px;
    color: #232323;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #eff1f7;
  }
{% endhighlight %}

Save the file and refresh your browser. Repeat until you're happy with the colour, or delete your addition if you don't like it. You're the programmer now, and you're in control of your design and layout.

![A personalised version of the website. Blue banner and greyish body colour](assets/images/css-play.png)

## Do more later

Change the colours of the headers and body in your CSS to suit your own tastes. I recommend very pale, almost-white colours for backgrounds, and bright colours for headers (strong coloured backgrounds make your website go a bit late-90s).

## What you’ve learned

* Using Google Fonts is a matter of pasting a link into your webpage's head and referencing it in your CSS.
