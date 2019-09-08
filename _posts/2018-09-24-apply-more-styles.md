---
layout: guides
title:  Apply more styles
permalink: apply-more-styles
toc: true
category: CSS
order: 2
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<span class="tag tag--review">Ready for review</span>
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains how to add more styles to your website.
</p>

## Add more CSS

Paste the following in to the `main.scss` file, replacing your `h1` definition and all the current contents of the file. If you have trouble copying it, there's a raw text version of the whole file [here](https://raw.githubusercontent.com/GeneralProducts/publisher-website/master/css/main.scss?token=AAFFYZTRCEQEFBYC2QTB5O25PTUCS).

{% highlight css %}
  ---
  ---

  $dark: #000162;
  $black: #232323;

  // Structure
  body {
    margin: 0;
    font-family: "Amiri", sans-serif;
    font-size: 28px;
    color: $black;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  section {
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 20px;

    @media (min-width: 1110px) {
      width: 800px;
    }
  }

  // Typography
  h1 {
    padding: 10px 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    top: 60px;
    position: relative;
    letter-spacing: 5px;
    background-color: white;
    text-shadow: 1px 1px 1px #fefbe0;
    font-size: 0.9em;
    width: 70%;
    margin: 0 auto;

    @media (min-width: 1110px) {
      font-size: 2em;
      letter-spacing: 10px;
    }
  }

  h2 {
    font-size: 1em;
    margin-block-end: -10px;
    margin-block-start: 50px;
    line-height: 1;
  }

  .subtitle {
    display: block;
    font-size: 0.5em;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1em;
  }

  p {
    color: $black;
    font-family: "Amiri", sans-serif;
    font-size: 0.75em;
    line-height: 34px;
  }

  a {
    color: $black;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 4px solid $black;
  }

  // Lists
  ul {
    padding-inline-start: 0 !important;
  }

  li {
    list-style-type: none;
    font-size: 20px;
    margin: 0 0 -20px;
  }

  // Navigation
  .nav {
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: space-between;

    @media (min-width: 1110px) {
      max-width: 1100px;
    }
  }

  .nav-item-container {
    display: inline-block;
    font-weight: 800;
    text-align: center;
    margin-top: 10px;

    @media (min-width: 1110px) {
      margin-top: 15px;
    }
  }

  .nav-item {
    display: inline;
    font-size: 0.6em;
    padding-right: 10px;

    @media (min-width: 1110px) {
      display: inline-block;
      padding: 0 30px;
      font-size: 1em;
    }
  }

  // Headers
  .header__background {
    background-color: #e3dde6;
    height: 300px;
  }

  .header__background--patterned {
    background-image: url(/images/background-image-floral.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 300px;
  }

  .header__background--book-page {
    background-color: #e3dde6;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%23cbccc8' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E");  color: #1f2420;
    height: 130px;
  }

  .header__background--book-page h1 {
    padding: 10px 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    top: 30px;
    position: relative;
    letter-spacing: 5px;
    background-color: white;
    text-shadow: 1px 1px 1px #fefbe0;
    font-size: 0.9em;
    width: 70%;
    margin: 0 auto;

    @media (min-width: 1110px) {
      font-size: 1em;
      letter-spacing: 10px;
    }
  }

  // Covers
  li.cover-container {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    @media (min-width: 1110px) {
      padding: 10px;
    }
  }

  li.cover-container a:hover {
    border-bottom: none;
    filter: brightness(1.2);
  }

  .cover {
    height: 330px;
    border-radius: 4px;
    width: auto;
  }

  .cover--home {
    float: right;
    width: 100%;
    margin: 20px 0;

    @media (min-width: 1110px) {
      width: 240px;
      border: 5px solid $dark;
    }

    &:hover {
      filter: brightness(1.2);
    }
  }

  .cover--large {
    width: 100%;

    &:hover {
      filter: brightness(1.3);
    }
  }

  // Books page
  .container__portfolio {
    background-color: #f3f1f4;

    @media (min-width: 1110px) {
      width: 100%;
    }
  }

  .series-grid {
    border-radius: 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    flex-direction: row;
    padding: 40px 0 0;
  }

  // Book page
  .container__book-page {
    display: flex;
    flex-direction: column;

    @media (min-width: 1110px) {
      flex-direction: row;
      max-width: 1000px !important;
    }
  }

  .content {
    flex: 2;

    @media (min-width: 1110px) {
      margin-left: 30px;
    }
  }

  .sidebar {
    margin: 50px 0;
    flex: 1;
  }

  h1.book-page {
    background: none;
    text-align: left;
    letter-spacing: normal;
    margin:0;
    line-height: 1.1;

    @media (min-width: 1110px) {
      font-size: 45px;
    }
  }

  .bookstores-grid {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    padding-inline-start: 0
  }

  .bookstore {
    flex: 1 auto;
    text-align: center;
    margin: 20px 10px 10px 0;
    line-height: 60px;

    a {
      border-bottom: 3px solid #e4e4e0;
    }
  }

  // Footer
  footer {
    padding: 30px;
    background-color: #e3dde6;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%23cbccc8' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E");  color: #1f2420;
    position: relative;
    top: 150px;
  }

  footer .wrapper {
    max-width: 1120px;
    display: flex;
    margin: 0 auto;
  }

  footer ul {
    display: flex;
    padding: 0 70px;
    flex-direction: column;
  }

  footer li {
    flex: 1;
    list-style: none;
    font-family: Montserrat, sans-serif;
    line-height: 40px;

    @media (min-width: 1110px) {
      font-size: 0.5em;
    }
  }

  footer li a {
    text-decoration: none;
    color: $black;

    &:hover {
      border-bottom: none;
      color: #03a4a6;
    }
  }

{% endhighlight %}

There are more styles that we necessarily need at the moment here, but this will improve the look of our website and let us focus on more types of programming today.

Refresh your browser page, and it's quite transformed:

![](assets/images/styled-page.png)

That font, however, looks suspiciously like Arial, and not the one referenced in the Inspector: "Amiri". Another font, "Montserrat", is also referenced in the CSS. We have to include a reference to those fonts, which are hosted on Google Web Fonts.

## Include the correct fonts

Paste the following line into the head of your `portfolio.html` page, after the stylesheet link (or before: it doesn't matter).

{% highlight html %}
  <link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap" rel="stylesheet">
{% endhighlight %}

Save the file, and refresh your browser.

![](assets/images/google-font.png)

Ooh, fancy! If you don't like this serif font, though, you can choose your own.

## Search for and use your own choice of font

* Go to [Google Fonts](https://fonts.google.com/).
* Search for a font you like. The Abril Fatface one looks quite jolly.

![](assets/images/gf.png)
* Copy the link of the one you like.

![](assets/images/font.gif)
* Paste the link into the `<head>` tag, as in the previous exercise.
{% highlight html %}
  <link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet">
{% endhighlight %}

* Reference the new font in your CSS file.
{% highlight css %}
  body {
    margin: 0;
    font-family: "Abril Fatface", sans-serif;
    font-size: 28px;
    color: $black;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
{% endhighlight %}

* Refresh your browser to see the results.

![](assets/images/fatface.png)

## Edit the styles

Open `css/main.scss` and go to line 8:

{% highlight css %}
  // Structure
  body {
    margin: 0;
    font-family: "Amiri", sans-serif;
    font-size: 28px;
    color: $black;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
{% endhighlight %}

There is a CSS command called `background-color` which is not included in the `body` definition. Add it in, and choose a color using hex codes ([here is a website you can use to get them](https://htmlcolorcodes.com/)). Your CSS will look something like this:

{% highlight css %}
  // Structure
  body {
    margin: 0;
    font-family: "Amiri", sans-serif;
    font-size: 28px;
    color: $black;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #5fd5ff;
  }
{% endhighlight %}

Save the file and refresh your browser. Repeat until you're happy with the colour, or delete your addition if you don't like it. You're the programmer now, and you're in control of your design and layout.

![](assets/images/css-play.png)

## What you’ve learned

* Using Google Fonts is a matter of pasting a link into your webpage's head and referencing it in your CSS


