---
layout: guides
title:  Add some content
permalink: add-some-content
toc: true
category: creating a web page
order: 2
---

<!-- <span class="tag tag--draft">Not started</span> -->
<span class="tag tag--progress">In progress</span>
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

## HTML

Your app is looking pretty bare at the moment. You need to write some code! In this section you’re going to develop your app so it displays one book’s worth of data. Later on, you’ll make this content dynamic, but for the moment the data will be hard-coded in HTML.

Challenge: Add some content

TODO

## HTML vs CSS
You are going to use HTML to define the structure of your web page. HTML provides the structure; later on, we’ll use CSS to provide the visual layout. This is an important point. A piece of text may be classed as a paragraph using HTML. That is a different to saying that the paragraph style should be Lucida Sans, 14pt, dark grey, and indented 5px on each side. You will provide such stylistic instructions in CSS.

## HTML tags
HTML is composed of HTML tags that go at the start and the finish of the content that you want to mark up. They come in two parts: an opening HTML tag such as <p> where you have a code such as p within two angle brackets, and a closing HTML tag such as </p> with the p code within the same angle brackets, but with a / before the p.
It’s a bit like the old advice for giving a speech. People say “Tell ’em what you’re going to tell ’em; tell ’em; tell ’em what you’ve told ’em”:

Here’s a list of HTML tags. Your challenge is to use them to tell the browser how it should structure your page.

**Paragraph**

Here is an example of paragraph `<p>` `</p>` tags in action:

{% highlight html %}
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

{% highlight html %}
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

{% highlight html %}
  <h1 >Shakespeare vs Cthulhu</h1>
  <h2 >An Anthologie</h2>
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

{% highlight html %}
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

**Division**

A division or section of the page.

{% highlight html %}
  <div>
    <p>
      An anthologie of fine stories inspir’d
      by the <strong>Bard of Stratford</strong> and the Lovecraftian Mythos
    </p>
  </div>
{% endhighlight %}

**Image**

{% highlight html %}
  <img src='/assets/images/cover.png' alt='Shakespeare vs Cthulhu cover image'>
{% endhighlight %}

Code which points to a file location of an image to display. `src` means source -- the file location. `alt` means alternative text -- vital for accessibility.

<div class="display-box">
  <div class="display">
     <img src='/assets/images/cover.png' alt='Shakespeare vs Cthulhu cover image'>
  </div>
</div>


## What you’ve learned

* HTML structures web pages; CSS styles them.
* There are opening and closing HTML tags.

## Challenge: Apply HTML tags to your content


