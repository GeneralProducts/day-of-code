---
layout: guides
title:  <span class="time">13.30 </span> Add static book data
permalink: static-book-data
toc: true
category: Using data
order: 1
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  In this article you'll manually add data to your portfolio page.
</p>

So far, the data you have added to your website has been limited to page titles, and one-off "about us"-style text. Now, you need to start adding book data to your website, in two sorts of patterns: a list of books, and then one page per book. These are patterns you see all over the internet: think of Amazon, who have listing pages of a category of books, then one page per book. These pages are automatically generated from databases that in turn are populated by data sources such as your ONIX feeds. Pages like these are what you're going to build now.

![](assets/images/maps.png)

## Add one book to the portfolio

You'll start by adding one book to your portfolio page. Open _portfolio.html_. Replace the words "Book list goes here" with the following code:

{% highlight html %}
<ul class="covers-container">
  <li class="cover-container">
    <a href="/sample_book">
      <img src="/images/sample-cover.jpg" class="cover" alt="Cover"/>
      <p>
        <small>Published Nov 2019</small>
        <br/>
        <strong>Sample book</strong>
      </p>
    </a>
  </li>
</ul>
{% endhighlight %}

Save the file. The whole file should look like this:

{% highlight html %}
---
layout: default
---
<header>
  <h1>Portfolio</h1>
</header>
<main>
  <ul class="covers-container">
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
  </ul>
</main>

{% endhighlight %}

Refresh the browser to see what the page looks like.

![](assets/images/static-book.png)

Very good, but one book does not a portfolio make. How do you add more?

## Add more books to the portfolio

Copy and paste the `<li>...</li>` block of code a few times, so your file looks like this:

{% highlight html %}
---
layout: default
---
<header>
  <h1>Portfolio</h1>
</header>
<main>
  <ul class="covers-container">
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover"/>
        <p>
          <small>Published Nov 2019</small>
          <br/>
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
  </ul>
</main>
{% endhighlight %}

![](assets/images/books.png)

Well, you have a portfolio page, but you can see this is now very manual to maintain. I don't know about you, but I don't want to sit and type in all that data for every book. Ideally, you want to be able to have just one block of `<li>...</li>` code, and programmatically insert the data in to it, getting the code to repeat itself once for each book. That's what you'll do next.

## What you’ve learned

* You can add HTML to a page
* But duplicating it is manual and requires too much maintenance.
