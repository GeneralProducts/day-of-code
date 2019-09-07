---
layout: guides
title:  Add static book data
permalink: static-book-data
toc: true
category: Using data
order: 1
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<span class="tag tag--review">Ready for review</span>
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  In this article we manually add data to our portfolio page.
</p>

So far, the data we have added to our website has been limited to page titles, and one-off "about us"-style text. Now, we need to start adding book data to our website, in two sorts of patterns: a list of books on the portfolio, and then one page per book. These are patterns you see all over the internet: think of Amazon, who have listing pages of a category of books, then one page per book. These pages are automatically generated from data sources, such as your ONIX feeds. That's what we're going to build now.

![](assets/images/maps.png)

## Add one book to the portfolio

We'll start by adding one book to our portfolio listing page. Open `portfolio.html`. Replace the words "Book list goes here" with the following code:

{% highlight html %}
  <ul class="series-grid">
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
      </a>
    </li>
  </ul>
{% endhighlight %}

The whole file should look like this. Save the file.

{% highlight html %}
  ---
  title: Portfolio
  layout: default
  ---

  <div class="header__background">
    <h1>
      Portfolio
      <span class="header__subtitle">Incredible stories, published with love</span>
    </h1>
  </div>
  <section class="container__portfolio">
    <ul class="series-grid">
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
    </ul>
  </section>
{% endhighlight %}

Refresh the browser to see what the page looks like.

![](assets/images/static-book.png)

Very good, but one book does not a portfolio make. How should we add more?

## Add more books to the portfolio

Copy and paste the `<li>...</li>` block of code a few times, so your file looks like this:

{% highlight html %}
  ---
  title: Portfolio
  layout: default
  ---

  <div class="header__background">
    <h1>
      Portfolio
      <span class="header__subtitle">Incredible stories, published with love</span>
    </h1>
  </div>
  <section class="container__portfolio">
    <ul class="series-grid">
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
    </ul>
  </section>
{% endhighlight %}

![](assets/images/books.png)

Well, we have a portfolio page, but you can see this is now very manual to maintain, and I don't want to sit and type in all that data for every book. Ideally we want to be able to have just one block of `<li>...</li>` code, and programmatically insert the data in to it, getting the code to repeat itself once for each book. That's what we'll do next.


## What you’ve learned

* We can add HTML to a page
* But duplicating it is manual and requires too much maintenance
