---
layout: guides
title: <span class="time">11.30 </span>  DRY up your code
permalink: dry-up-your-code
toc: true
category: Templating
order: 1
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains how to keep your code well-organised so it's maintainable.
</p>

The Portfolio page is looking a bit nicer. Presumably the index page is also looking better, too, now you have all those styles?

Go to your browser, and delete _/portfolio/_ from the address bar, so the URL goes back to being localhost:4000. The index.html page gets served by default, though you can also type localhost:4000/index or localhost:4000/index.html.

![The index page not showing any useful styling changes](assets/images/fixed-img.png)

Oh. It looks the same. Why aren't the styles applied to this page?

> <span class="content__learn-more">Troubleshoot</span>
* Before you scroll down to see the answer, try to think why the styles aren't appearing on this page. Open _index.html_ in your text editor, have a look at it, and see if you can see what's missing. Line 3 is a clue.

It's because you haven't added the stylesheet link in to the _index.html_ page. Did you figure that out correctly? If not, next time, consider comparing a page that works with one that doesn't.

To add the stylesheet link, copy the styles and font links (all the contents of the `<head>` `</head>` tags) from _portfolio.html_ and paste into the same place in _index.html_.

![A gif showing the user putting the links in the right place](assets/images/copy-paste.gif)

Refresh your browser page. What a difference some CSS makes!

![Now the browser is showing a nicely styled page](assets/images/styled-homepage.png)

## CSS classes

The header on the index page has a pattern, unlike the one on the portfolio page, because its HTML has a different structure to that on the portfolio page.

The header in _portfolio.html_ has an HTML tag, `<header>`:

{% highlight html %}
  <header>
    <h1>Portfolio</h1>
  </header>
{% endhighlight %}

The tag `<header>` is defined in the CSS like this:

{% highlight css %}
  header {
    ...
    background-color: #03a9f4;
  }
{% endhighlight %}

That's why the portfolio page looks like this: the colour _#03a9f4_ is blue.
![Screeshot of the portfolio page showing the header is blue](assets/images/blue.png)

The `<header>` tag in _index.html_, however, has a class, `primary-header`:

{% highlight html %}
  <header class="primary-header">
    <h1>Silver Oak Press</h1>
    <aside>New fiction, discovered</aside>
  </header>
{% endhighlight %}

That class is defined in the CSS like this:

{% highlight css %}
  .primary-header {
    background-image: url(/images/bright-flowers.jpg);
    background-size: 100%;
  }
{% endhighlight %}

Which is what you see in the browser, too:

![Screenshot of the index page with a nice bright banner image](assets/images/bright.png)

Notice too that `primary-header` has a higher priority than `header`, so the bright-flowers instruction overrides the blue instruction.

This is how CSS works: the keywords in the CSS match the HTML, and more specific commands override more generic ones.

Additionally, HTML classes get referenced in CSS with a preceeding `.`, HTML ids get referenced with a `#`, and HTML tags get referenced as their name, with no `<` `>`.
* `<header class="primary-header">` gets referenced in CSS as `.primary-header {}`
* `<header id="primary-header">` gets referenced in CSS as `#primary-header {}`
* `<header>` gets referenced in CSS as `header {}`

This mechanism means you can define the styles once in CSS, and use them multiple times in the HTML. Programmers call this "keeping your code DRY", where DRY stands for "Don't Repeat Yourself".

But when you copied and pasted the head styles from _portfolio.html_ to _index.html_, you did the opposite of DRY. You duplicated code, and now you have got two pieces of identical code to maintain. What if you want to change font again? What if you have more pages? Duplication is bad because it makes code harder to maintain, edit and change. So you're going to use a [Jekyll](glossary#Jekyll) template to put the shared code in one place, then insert the unique code for each page.

## Create a template

Open the folder called __layouts_ and within that create a file called _default.html_.

Copy all the lines in _index.html_ and paste them into _default.html_.

![Gif showing the user setting up the default layout](assets/images/copytodefault.gif)

In _default.html_, delete the index-specific code between the `<body>` and `</body>`  tags:

![Gif showing the user setting up the default layout](assets/images/body.gif)

Save the file. Next, type the following in between the `<body>` and `</body>` tags:

{% highlight html %}
  {% raw %}{{ content }}{% endraw %}
{% endhighlight %}

Save the file. The unique content on each page that uses the template will go where it says `content`.

Your template is complete, and now you're going to use that in your index and portfolio pages.

## Apply the template to the index page

Go to the _index.html_ page in your text editor, and delete all the code except for the bit between the `<body>` and `</body>` tags, so it looks like this:

![Showing the user setting up the index page](assets/images/half-way-index.png)

Save your file and refresh your browser. Oh dear: you've lost your styles, which you can see if you open the Inspector.

![Shows the styles have dropped](assets/images/index-rev.png)

Let's get them back again.

At the top of the _index.html_ file in your text editor, paste in the following code, making sure there is no space or tabs before each line and they are flush to the left, and include both the `---` lines:

{% highlight html %}
---
layout: default
---
{% endhighlight %}

Save your file and refresh your browser. Great: the styles are back again:

![Shows the styles are back](assets/images/bright.png)

And do you see in your brower's inspector that the browser has reconstituted the whole HTML file, using the template's `<head>` code and the index page's content?

> <span class="content__learn-more">Troubleshoot</span>
* If the styles are not back, have you saved your new _default.html_ page?
* If that doesn't fix it, look at the server log in your Terminal for clues.

See if you can do the same for the _portfolio.html_ page. The instructions follow below, but see if you can do it yourself, without looking.

***

## Apply the template to the portfolio page

Go to the _portfolio.html_ page in your text editor and delete all the code except for the bit between the `<body>` and `</body>` tags.

Save your file and refresh your browser. This drops your styles, like last time. So you need to use your template, which includes the styles reference.

At the top of the file, paste in the following code, making sure there is no space or tabs before each line and they are flush to the left:

{% highlight html %}
---
layout: default
---
{% endhighlight %}

Here's the whole process:

![Gif showing all the editing needed to set up the portfolio page with a layout, as previously described](assets/images/port-edit.gif)


Save your file and refresh your browser. Great: the styles are back again.

## What you’ve learned

* Programmers like to keep code DRY so there's less to maintain.

## Stretch goals

* If you have time now, or later after the Day of Code, choose your own background for the home page banner and amend the CSS to use it. There are some in the _images_ folder, and the [Unsplash website](https://unsplash.com/photos/7G7RagQTqi4) is a useful resource. Find an image you like and get its link, making sure it's the image file not the website page URL by right-mouse-selecting "Copy Image address", not "Copy link address", and reference it in your CSS:

{% highlight css %}
  .primary-header {
    background-image: url(https://images.unsplash.com/photo-1572467313081-e5451bcd2131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    background-size: 100%;
  }
{% endhighlight %}

Refresh the page to see the effect:

![Browser with a new header image](assets/images/unsplash-rendered.png)

You might want to add `background-position: 50%` into your CSS definition to position the image better.

* Google Analytics code is a good example of code that should run on every page, but should only appear once in your codebase. If you have a Google account, [follow their instructions](https://support.google.com/analytics/answer/1008015?hl=en) to get your analytics code, and paste it into the `<head>` of your _default.html_ like this:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77263xxx-4"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-77263xxx-4');
  </script>
  ...
  </head>
  ...
</html>
{% endhighlight %}
