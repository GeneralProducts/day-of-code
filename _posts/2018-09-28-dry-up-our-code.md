---
layout: guides
title:  DRY up our code
permalink: dry-up-our-code
toc: true
category: Templating
order: 1
---
<!-- <span class="tag tag--draft">Not started</span> -->
<span class="tag tag--progress">In progress</span>
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains how to keep our code well-organised so it's maintainable.
</p>

Our Portfolio page is looking a bit nicer. Presumably our index page is also looking better, too, now we have all those styles?

Go to your browser, and delete **/portfolio/** from the address bar, so the URL goes back to being localhost:4000. The index.html gets served by default, though you can also type localhost:4000/index or localhost:4000/index.html

![](assets/images/fixed-img.png)

Oh. It looks the same. Why aren't the styles applied to this page?

It's because we haven't added the stylesheet link in to the `index.html` page. Do that now: open `index.html` and copy and paste the header from `portfolio.html`.

![](assets/images/copy-paste.gif)

Refresh your browser page. What a difference some CSS makes!

![](assets/images/styled-homepage.png)

However, what we just suffered from is a problem of duplicated code. We had to edit two files, and now we have got two pieces of code to maintain. What if you want to change font again? What if we have more pages? Duplication is bad because it makes code harder to maintain, edit and change. We're going to use a [Jekyll](glossary#Jekyll) template to put the shared code in one place, then insert the unique code for each page. Programmers call this "keeping your code DRY", where DRY stands for "Don't Repeat Yourself".

## Create a template

Create a folder called "_layouts" and within that a file called "default.html".

![](assets/images/default.gif)

Copy all the lines in `index.html` and paste them into `default.html`.

Delete the index-specific code in the `<body>` tags:

![](assets/images/delete.gif)

Save the file. Next, type the following in between the `<body>` tags:

{% highlight html %}
  <div class="container">
    {% raw %}{{ content }}{% endraw %}
  </div>
{% endhighlight %}

The unique content on each page that uses the template will go where it says `content`. Save the file.

Our template is set up and now we're going to use that in our index and portfolio pages.

## Apply the template to the index page

Go to the `index.html` page in your text editor and delete all the code except for the bit between the `<body>` tags, like this:

![](assets/images/index-rev.gif)

Save your file and refresh your browser. Oh dear: you've lost your styles, which you can see if you open the Inspector.

![](assets/images/index-rev.png)

Let's use our template so we get them back again.

At the top of the file, paste in the following code, making sure there is no space or tabs before each line and they are flush to the left:

{% highlight html %}
---
title: Home
layout: default
---
{% endhighlight %}

Save your file and refresh your browser. Great: the styles are back again:

![](assets/images/styles-back.png)

See if you can do the same for the portfolio page. The instructions follow below, but see if you can do it yourself, without looking.

***

## Apply the template to the portfolio page

Go to the `portfolio.html` page in your text editor and delete all the code except for the bit between the `<body>` tags, like this:

![](assets/images/port-rev.gif)

Save your file and refresh your browser. Oh dear: you've lost your styles, which you can see if you open the Inspector.

Let's use our template so we get them back again.

At the top of the file, paste in the following code, making sure there is no space or tabs before each line and they are flush to the left:

{% highlight html %}
---
title: Portfolio
layout: default
---
{% endhighlight %}

Save your file and refresh your browser. Great: the styles are back again.

## What you’ve learned

* Programmers like to keep code DRY so there's less to maintain.

## Stretch goals for later

* Choose your own background for the home page banner and amend the CSS to use it.
