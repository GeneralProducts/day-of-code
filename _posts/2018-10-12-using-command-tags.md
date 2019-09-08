---
layout: guides
title:  Using command tags
permalink: using-command-tags
toc: true
category: Using data
order: 3
---
<!-- <span class="tag tag--draft">Not started</span> -->
<span class="tag tag--progress">In progress</span>
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article tells you how to turn your duplicated code into something more automated.
</p>

Let's get some sample data to work with. You'll be able to use your own data later on.

## Add sample data

TODO: maybe include this data in the starter kit repo?

Add a folder called `_data`, and a file called `processed_books.json` within it. Paste all the data at [this link](https://raw.githubusercontent.com/EmmaB/jekyll-snow/master/_data/processed_books.json) into the file, and save.

![](assets/images/proc_book.gif)

## Replace static HTML with command tags

In `portfolio.html`, replace this:

{% highlight html %}
  <section class="container__portfolio">
    <ul class="series-grid">
      <li class="cover-container">
        <a href="/sample_book">
          <img src="/images/sample-cover.jpg" class="cover" alt="Sample book">
        </a>
      </li>
      ...
    </ul>
  </section>
{% endhighlight %}

With this:

{% highlight liquid %}
  {% raw %}
  <section class="container__portfolio">
    {% assign serieses = site.data.processed_books | group_by: "series" | sort: "title"  %}
    {% for series in serieses  %}
      <ul class="series-grid">
        {% for book in series.items %}
            <li class="cover-container">
              <a href="{{site.base_url}}{{ book.title | datapage_url: '/books'}}">
                <img src="{{book.image_path}}" class="cover" alt="{{ book.title }}">
              </a>
            </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </section>
  {% endraw %}
{% endhighlight %}

It looks like a lot in one go, but let's step through the differences one by one.

## Assigning a variable

Variables are used to label and store information. You define a variable using an equals sign. The following line assigns a variable called `serieses`.

TODO: serieses is a weird word. Consider alternatives?

{% highlight liquid %}
  {% raw %}{% assign serieses = site.data.processed_books | group_by: "series" | sort: "title"  %}{% endraw %}
{% endhighlight %}

Now we have assigned a value to the word `serieses`, we can use that word as a variable to represent the value.

The value of `serieses` is all the data found in the `processed_books.json` file, but grouped by series, then sorted by title.
`serieses` doesn’t only contain one series worth of data. In your app, you need to display each of those series in turn. This is called iteration.

## Iteration

Iteration is when you loop through a collection of data. Here's an example:

{% highlight liquid %}
  {% raw %}
  {% for series in serieses  %}
  ...
  {% endfor %}
{% endraw %}
{% endhighlight %}

Read that line aloud. It says "for series in serieses". More verbosely, it means “For each series in turn, replace the contents of the `series` variable with information about the next series in the list”.

Review the code you've just added, again: there's another iteration loop straight after:

{% highlight liquid %}
  {% raw %}
  {% for book in series.items  %}
  ...
  {% endfor %}
{% endraw %}
{% endhighlight %}


This time, for each book (the item in the series) in turn, replace the contents of the `book` variable with information about the next book in the list.

## Calling methods

Once you have iterated and got your `book` variable, you can "call methods" on it and turn the results of the methods into HTML. This next line uses two method calls to output the HTML `img` tag for the book's cover.

{% highlight liquid %}
  {% raw %}
  {% for book in series.items %}
    ...
    <img src="{{book.image_path}}" class="cover" alt="{{ book.title }}">
    ...
  {% endfor %}
{% endraw %}
{% endhighlight %}

You call a method using a dot:

{% highlight ruby %}
  {% raw %}book.title{% endraw %}
{% endhighlight %}

The dot is how you ask an object for some of its information. This is also know as “calling a method”. Here you’d say you’re "calling title on book".

`title` is something that a book has. The syntax `book.title` is the same as saying “Book, please tell me your title". You can do the same for pub date, for isbn -- in fact, any attribute that `book` knows about.

You can increase the number of things that a book knows about by writing methods. Here’s a method that figures out the stock delivery date of a book that’s been printed:

{% highlight ruby %}
def delivery_date
  publish_date - 30
end
{% endhighlight %}

We can get that date by calling

`book.delivery_date`

Here’s a method that puts the title into capitals:

{% highlight ruby %}
  def title_in_caps
    title.upcase
  end
{% endhighlight %}

This will result in the title being displayed in all capitals: SHAKESPEARE VS. CTHULHU, for example.

Let's look again at the code we've just added.

{% highlight liquid %}
  {% raw %}
  <a href="{{site.base_url}}{{ book.title | datapage_url: '/books'}}">
    <img src="{{book.image_path}}" class="cover" alt="{{ book.title }}">
  </a>
  {% endraw %}
{% endhighlight %}

This code turns into the following HTML for the book called "Lint". The first line creates a link in a manner specific to the [code library we're using to generate multiple pages](https://github.com/avillafiorita/jekyll-datapage_gen). The second line uses two method calls to create the `img` HTML tag for the book's cover.

{% highlight html %}
  <a href="/books/lint/">
    <img src="https://bibliocloudimages.s3-eu-west-1.amazonaws.com/1/206759/795/795_jpg_rgb_0650h.jpg" class="cover" alt="Lint">
  </a>
{% endhighlight %}

See, for instance, how `book.title` here:

{% highlight liquid %}
  {% raw %}alt="{{ book.title }}"{% endraw %}
{% endhighlight %}

becomes the title of the book:

{% highlight html %}
  alt="Lint"
{% endhighlight %}

## Review progress

Let's look at how the browser is looking.

![](assets/images/list.gif)

Wow -- lots of series, and lots of books. It's not quite right yet as we can see some duplication, but it's getting there. We'll remove the duplication you see on your portfolio page now.

## Remove duplication

Replace this:

{% highlight liquid %}
  {% raw %}
  <section class="container__portfolio">
    {% assign serieses = site.data.processed_books | group_by: "series" | sort: "title"  %}
    {% for series in serieses  %}
      <ul class="series-grid">
        {% for book in series.items %}
            <li class="cover-container">
              <a href="{{site.base_url}}{{ book.title | datapage_url: '/books'}}">
                <img src="{{book.image_path}}" class="cover" alt="{{ book.title }}">
              </a>
            </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </section>
  {% endraw %}
{% endhighlight %}

with this:

{% highlight liquid %}
  {% raw %}
  <section class="container__portfolio">
    {% assign unique_tags = '' | split: '' %}
    {% assign serieses = site.data.processed_books | group_by: "series" | sort: "title"  %}
    {% for series in serieses  %}
      <ul class="series-grid">
        {% for book in series.items %}
          {% unless unique_tags contains book.title %}
            <li class="cover-container">
              <a href="{{site.base_url}}{{ book.title | datapage_url: '/books'}}">
                <img src="{{book.image_path}}" class="cover" alt="{{ book.title }}">
              </a>
            </li>
            {% assign unique_tags = unique_tags | push: book.title  %}
          {% endunless %}
        {% endfor %}
      </ul>
    {% endfor %}
  </section>
  {% endraw %}
{% endhighlight %}

Let's pull out the lines that we've changed.

{% highlight liquid %}
  {% raw %}
  <!-- First, make a list called unique_tags -->
  {% assign unique_tags = '' | split: '' %}

  <!-- The code to loop through the serieses goes here -->
  <!-- The code to loop through the books in each series goes here-->
  <!-- The next line instructs the book to display unless the unique_tags list contains the book title -->
  {% unless unique_tags contains book.title %}
    <!-- The next line adds the book title to the unique_tags list if the book has been displayed -->
    {% assign unique_tags = unique_tags | push: book.title  %}
  {% endunless %}
  {% endraw %}
{% endhighlight %}

The logical approach we've taken here is to keep track of which books we've already seen on the page, and not repeat them

> <span class="content__learn-more">Learn more later</span>
*  Much of programming is about Googling and finding out answers to problems that present themselves through your own research. So read through the Liquid documentation to understand the `push:` command and the principles of arrays.

## What you’ve learned

* Variables can represent complex data, and more than one instance of an object.
* The `for` method lets you iterate through each instance of an item in a collection.
* In Ruby, a dot means ‘call a method on an object’.
* You can use methods to increase the number of things an object can know about or do.
* Read the docs!
* All programmers rely on Google.
* Programming is less about maths, and more about logic and process.
