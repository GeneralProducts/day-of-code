---
layout: guides
title:  <span class="time">14.00 </span> Use Liquid
permalink: using-liquid-tags
toc: true
category: Using data
order: 3
---

<p class="content__abstract">
  This article tells you how to use Liquid to inject data into your HTML.
</p>

## Some sample data to begin with
You'll be able to use your own data later on. For now, you'll use sample data we've provided, which is in a file called _processed_books.json_ within the __data_ folder.

## Replace static HTML with Liquid

In _portfolio.html_, replace this, which is everything between the `<main>` tags:

{% highlight html %}
  <ul class="covers-container">
    <li class="cover-container">
      <a href="/sample_book">
        <img src="/images/home_img.jpg" class="cover" alt="Cover" />
        <p>
          <small>Published Nov 2019</small>
          <br />
          <strong>Sample book</strong>
        </p>
      </a>
    </li>
    <!-- you will have your repeating <li></li> blocks of code here: delete them all too -->
    ...
  </ul>
{% endhighlight %}

With this:

{% highlight liquid %}
  {% raw %}
  <ul class="covers-container">
    {% for book in site.data.processed_books %}
      <li class="cover-container">
        <a href="{{ book.title | datapage_url }}">
          <img src="/images/covers/{{book.isbn}}.jpg" class="cover" alt="Cover of ISBN {{book.isbn}} {{book.title}}"/>
          <p>
            <small>{{book.pub_date | date: '%b %Y'}}</small>
            <br/>
            <strong>{{book.title }}</strong>
          </p>
        </a>
      </li>
    {% endfor %}
  </ul>

  {% endraw %}
{% endhighlight %}

Save your file. Refresh your browser and see the effect.

![The portfolio page looking nice with our book data being used to dynamically create one cover per book](assets/images/list.png)

The page is displaying new data, because of your new code. The rest of this article explains the new code you added, piece-by-piece.

## Iteration

Iteration is when you loop through a collection of data. Here's an example:

{% highlight liquid %}
  {% raw %}
  {% for book in site.data.processed_books %}
  ...
  {% endfor %}
{% endraw %}
{% endhighlight %}

Read that line aloud. It says "for book in site data processed_books". More verbosely, it means “For each book in this site's data store in turn, replace the contents of the `book` variable with information about the next book in the list”.

## Calling methods

Once you have iterated and got a `book` variable, you can "call methods" on it and turn the results of the methods into HTML.

This next line uses two method calls to output the HTML `img` tag for the book's cover.

Question: Can you see what those methods might be?

{% highlight liquid %}
  {% raw %}
  {% for book in site.data.processed_books %}
    ...
    <img src="/images/covers/{{book.isbn}}.jpg" class="cover" alt="Cover of ISBN {{book.isbn}} {{book.title}}"/>
    ...
  {% endfor %}
{% endraw %}
{% endhighlight %}

Answer: The methods called here are `isbn` and `title`.

You call a method using a dot:

{% highlight ruby %}
  {% raw %}book.title{% endraw %}
{% endhighlight %}

The dot is how you ask an object for some of its information. This is also know as “calling a method”. Here you’d say you’re "calling title on book".

`title` is something that a book has. The syntax `book.title` is the same as saying “Book, please tell me your title". You can do the same for pub date, for ISBN13 -- in fact, any attribute that `book` knows about.

Let's look again at the code you've just added.

{% highlight liquid %}
  {% raw %}
  <a href="{{ book.title | datapage_url }}">
    <img src="/images/covers/{{book.isbn}}.jpg" class="cover" alt="Cover of ISBN {{book.isbn}} {{book.title}}"/>
  </a>
  {% endraw %}
{% endhighlight %}

This code turns into the following HTML for the book called "The Goddess Project". The first line creates a link in a manner specific to the [code library you're using to generate multiple pages](https://github.com/avillafiorita/jekyll-datapage_gen). The second line uses two method calls to create the `img` HTML tag for the book's cover.

{% highlight html %}
<a href="/books/the-goddess-project/">
  <img src="/images/covers/9781911390220.jpg" class="cover" alt="Cover of ISBN 9781911390220 The Goddess Project">
</a>
{% endhighlight %}

> <span class="content__learn-more">Learn more later</span>
*  Much of programming is about Googling and finding out answers to problems that present themselves through your own research. So read through the Liquid documentation to learn about the `date: '%b %Y'` pub date Liquid filter you've used and discover more about Ruby by Googling, and using the resources listed [earlier](/languages-and-tools).



## What you’ve learned

* Variables can represent complex data, and more than one instance of an object.
* The `for` method lets you iterate through each instance of an item in a collection.
* In Ruby, a dot means ‘call a method on an object’.
* Read the docs!
* All programmers rely on Google.
* Programming is less about maths, and more about words and logic.
