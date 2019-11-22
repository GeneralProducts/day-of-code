---
layout: guides
title:  <span class="time">12.15 </span> Add a nav and a footer
permalink: nav-and-footer
toc: true
category: Templating
order: 2
---

<p class="content__abstract">
  Building on your knowledge of templating, this article adds more shared code to your template.
</p>

You're going to add some navigation links that will appear on every page. Now you have a template, you only have to change shared code in one place.

## Add the navigation links

Add a folder called __includes_ at the same level as the __layouts_ and __data_ folders. Within your new folder, add a file and name it _navigation.html_. The __includes_ folder must be at the same level as other folders that start with an underscore, such as __layouts_.

Paste the following code in to _navigation.html_, and save the file.

{% highlight html %}
  <nav>
    <ul class="nav-item-container ">
      <li class="nav-item"><a href="/">Home</a></li>
      <li class="nav-item"><a href="/portfolio/">Books</a></li>
    </ul>
  </nav>
{% endhighlight %}

## Add a reference to these links to your template

Open _layouts/default.html_. Add the following line directly under the opening `<body>` tag:

{% highlight html %}
  {% raw %}{% include navigation.html %}{% endraw %}
{% endhighlight %}

This makes the full file look like this:

{% highlight html %}
  <!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="/css/main.css">
      <link href="https://fonts.googleapis.com/css?family=Amiri&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet">
    </head>
    <body>
      {% raw %}{% include navigation.html %}{% endraw %}
      {% raw %}{{ content }}{% endraw %}
    </body>
  </html>
{% endhighlight %}


Refresh the index page in your browser, because the index page uses the default template. You'll see your new nav links. And now you can more easily get around your website: click the "Books" link on your web page.

## Do more later

* It's best for users if link labels match the words found at their destination. Amend the word "Books" to "Portfolio", by editing the _navigation.html_ file.
* Add an "About" link and an About page, in the same way you added the portfolio page. The link text will look like this:
{% highlight html %}
  <li class="nav-item"><a href="/about/">About</a></li>
{% endhighlight %}


* Add in a footer section, using the following code as a starting point:

{% highlight html %}
  <!-- _layouts/default.html -->
  <body>
    {% raw %}{% include navigation.html %}{% endraw %}
    {% raw %}{{ content }}{% endraw %}
    {% raw %}{% include footer.html %}{% endraw %}
  </body>
{% endhighlight %}

{% highlight html %}
<footer>
  <div class="wrapper">
    <ul>
      <li>
        <a href="https://unsplash.com/photos/gE1phX0Lbos">Photos by Unsplash</a>
      </li>
      <li>
        <a href="https://generalproducts.co">A General Products Ltd initiative</a>
      </li>
      <li>2019.dayofcode.co.uk</li>
    </ul>
    <ul>
      <li>With thanks to our gold sponsors:</li>
      <li>
        <a href="https://consonance.app">Consonance</a>
      </li>
      <li>
        <a href="https://www.hachette.co.uk/">Hachette UK</a>
      </li>
      <li>
        <a href="https://www.nielsen.com/uk/en/">Nielsen</a>
      </li>
      <li>
        <a href="https://www.thebookseller.com/">The Bookseller</a>
      </li>
    </ul>
  </div>
</footer>

{% endhighlight %}

Your page will end up a bit like this:

![Showing the nav links in the browser](assets/images/nav.png)

## What you’ve learned

* Once you have templates set up, there are fewer places where you have to maintain code.
