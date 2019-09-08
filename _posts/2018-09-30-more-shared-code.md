---
layout: guides
title:  Add a nav and a footer
permalink: nav-and-footer
toc: true
category: Templating
order: 2
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<span class="tag tag--review">Ready for review</span>
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  Building on our knowledge of templating, this article adds more shared code to our template.
</p>

Let's add some navigation links that will appear on every page. Now we have a template, we only have to change shared code in one place.

## Add a reference to navigation links to our template

Open **_layouts/default.html**. Add the following line in at the top of the body.

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
      <link href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap" rel="stylesheet">
    </head>
    <body>
      {% raw %}{% include navigation.html %}{% endraw %}
      <div class="container">
        {% raw %}{{ content }}{% endraw %}
      </div>
    </body>
  </html>
{% endhighlight %}

Refresh the index page in your browser, because the index page uses the default template. Hang on: why hasn't anything changed?

## Debug the missing reference

To debug this problem, let's look at the server log. Look at your Terminal, where your server log has been running all this time. There is a big red error message:

![](assets/images/errors.png)

If you pick through those words, they are actually very descriptive and tell us that we've failed to include a file:

{% highlight term %}
  Liquid Exception: Could not locate the included file 'navigation.html'
{% endhighlight %}

So we'll add that file now.

## Add the missing file

Add a folder called "_includes", and a file called "navigation.html" within that.

![](assets/images/includes.gif)

Paste the following code in to it and save the file.

{% highlight html %}
  <nav class="nav">
    <ul class="nav-item-container ">
      <li class="nav-item"><a href="/">Home</a></li>
      <li class="nav-item"><a href="/portfolio/">Books</a></li>
      <li class="nav-item"><a href="/about/">About</a></li>
    </ul>
  </nav>
{% endhighlight %}

Refresh the browser: you'll see your new nav links. And now you can more easily get to your portfolio page: click the "books" link.

![](assets/images/nav.png)

## What you’ve learned

* Once you have templates set up, there are fewer places where you have to maintain code.

## Stretch goals

* Make the "About" link work, in the same way you added the portfolio page.
* Add in a footer section, using the following code:

{% highlight html %}
  <!-- _layouts/default.html -->
  <body>
    {% raw %}{% include navigation.html %}{% endraw %}
    <div class="container">
      {% raw %}{{ content }}{% endraw %}
    </div>
    {% raw %}{% include footer.html %}{% endraw %}
  </body>
{% endhighlight %}


{% highlight html %}
  <!-- _includes/footer.html -->
  <footer>
    <div class="wrapper">
      <ul>
        <li>
          <a href="https://www.consonance.app">Powered by Consonance</a>
        </li>
        <li>
          <a href="https://github.com/generalproducts/jekyll-doc">Github</a>
        </li>
        <li>
          <a href="https://www.freepik.com/free-photos-vectors/background">
            Background vector created by freepik, macrovector_official - www.freepik.com
          </a>
        </li>
      </ul>
    </div>
  </footer>
{% endhighlight %}

