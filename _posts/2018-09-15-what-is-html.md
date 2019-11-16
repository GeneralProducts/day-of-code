---
layout: guides
title:  <span class="time">10.00 </span> What is HTML?
permalink: what-is-html
toc: true
category: HTML
order: 1
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  Your website is looking pretty bare at the moment. You will use HTML to structure your web page. Before you start to write your code, this article introduces HTML, the language of the web. Read it to learn what HTML tags are and which ones to use, when. You won't type anything in your new web app whilst reading this article.
</p>


## HTML tags
[HTML](glossary#html) is composed of HTML tags that go at the start and the finish of the content that you want to mark up. They come in two parts: an opening HTML tag such as `<p>`, and a closing HTML tag such as `</p>`, (notice the `/` before the `p`).

> It’s a bit like the old advice for giving a speech: “Tell ’em what you’re going to tell ’em; tell ’em; tell ’em what you’ve told ’em”. Or the age-old advice for good storytelling – have a beginning, a middle, and an end:
>
>`<p>` means there's a paragraph coming up.
>
>Then there's a paragraph.
>
>Then `</p>` means that we just had a paragraph, and now it's over.

Here’s a list of HTML tags. You will use them to tell the browser how it should structure your page.

**Paragraph**

Here is an example of paragraph `<p>` `</p>` tags in action:

{% highlight html linenos%}
  <p>
    An anthologie of fine stories
    inspir’d by the Bard of Stratford and the Lovecraftian Mythos
  </p>
{% endhighlight %}

Which display in a browser as:

<div class="display-box">
  <p class="display">
    An anthologie of fine stories
    inspir’d by the Bard of Stratford
    and the Lovecraftian Mythos
  </p>
</div>

**Strong**

Here is an example of strong `<strong>` `</strong>` tags in action:

{% highlight html linenos%}
  <p>
    An anthologie of fine stories
    inspir’d by the <strong>Bard of Stratford</strong>
    and the Lovecraftian Mythos
  </p>
{% endhighlight %}

Which display in a browser as:

<div class="display-box">
  <p class="display">
    An anthologie of fine stories
    inspir’d by the <strong>Bard of Stratford</strong>
    and the Lovecraftian Mythos
  </p>
</div>

**Headings**

Here is an example of heading tags in action:

{% highlight html linenos %}
  <h3>Shakespeare vs Cthulhu</h3>
  <h4>An Anthologie</h4>
{% endhighlight %}

Which display in a browser as:

<div class="display-box">
  <div class="display">
    <h3>Shakespeare vs Cthulhu</h3>
    <h4>An Anthologie</h4>
  </div>
</div>

**List**

Usually interpreted as a bulleted list e.g.

{% highlight html linenos %}
  <ul>
    <li>Publisher: Snowbooks</li>
    <li>Published on: 2 August 2016</li>
    <li>ISBN: 978-1-909679-86-3</li>
  </ul>
{% endhighlight %}

<div class="display-box">
  <div class="display">
    <ul>
      <li>Publisher: Snowbooks</li>
      <li>Published on: 2 August 2016</li>
      <li>ISBN: 978-1-909679-86-3</li>
    </ul>
  </div>
</div>

**Image**

{% highlight html linenos %}
<img src='/assets/images/cover.png' alt='Shakespeare vs Cthulhu cover image' />
{% endhighlight %}

Code which points to a file location of an image to display. `src` means source -- the file location. Notice that it is `src`, not `scr` -- an easy typo to make! `alt` means alternative text -- vital for accessibility. The `img` tag is self-closing -- you don't put an `</img>` tag at the end, only a `/>`.

<div class="display-box">
  <div class="display">
     <img src='/assets/images/cover.png' alt='Shakespeare vs Cthulhu cover image' />
  </div>
</div>


**Division**

A division or section of the page.

{% highlight html linenos %}
  <div>
    <p>
      An anthologie of fine stories inspir’d
      by the <strong>Bard of Stratford</strong> and the Lovecraftian Mythos
    </p>
  </div>
{% endhighlight %}

## More semantic tags

There are further tags available to use, named to provide useful information about the structure of the content. These include `<nav>`, `<section>`, `<aside>`, `<figure>`, `<footer>`, `<header>`, and `<main>`. It is better to use these tags than `<div>`, which has no semantic meaning. In particular, screen readers use these tags to describe web pages in richer detail, making your web pages more accessible to a wider range of users. [Read more](https://guide.freecodecamp.org/html/html5-semantic-elements/) about semantic HTML tags.


## HTML vs CSS
HTML provides the structure of a web page; later on, we’ll use CSS to provide the visual layout. This is an important point. A piece of text may be classed as a paragraph using HTML. That is a different to saying that the paragraph style should be Lucida Sans, 14pt, dark grey, and indented 5px on each side. You will provide such stylistic instructions in CSS.

## What you’ve learned

* There are opening and closing HTML tags.
* HTML structures web pages; CSS styles them.
* Semantic HTML tags allow more people better access to web pages.
