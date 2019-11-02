---
layout: guides
title:   <span class="time">10.30 </span> Add another web page
permalink: add-html-page
toc: true
category: HTML
order: 3
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article tells you how to create another web page.
</p>

Your index page contains links to another page, but those links are currently broken. Clicking on them in your browser takes you to an error message:

![](assets/images/broken-link.png)

You will fix this by adding another HTML file to your website repo.

## Add a new HTML file

In your repo, click to add a new file and call it _portfolio.html_. Make sure it's at the same level in your folder as _index.html_ -- not accidentally nested in another folder.

![](assets/images/new-file.gif)

Type some words in, such as "here's my portfolio page", and save the file.

![](assets/images/new-file.png)

Go back to your browser and try the link again. This time, your new page gets served:

![](assets/images/new-file-words.png)

> <span class="content__learn-more">Troubleshooting</span>
* If the browser doesn't show your new page, make sure _portfolio.html_ is saved at the same level in your repo as _index.html_ -- not accidentally nested in another folder, higher or lower.

## Add some content

Let's replace your placeholder text with some real HTML. Copy and paste the following in to the _portfolio.html_ file, replacing the placeholder text you typed earlier:

{% highlight html %}
  <!doctype html>
  <html>
    <head></head>
    <body>
      <header>
        <h1>Portfolio</h1>
      </header>
      <main>
        Book list goes here
      </main>
    </body>
  </html>
{% endhighlight %}

Now you have another page with some content.

![](assets/images/portfolio.png)

![](assets/images/portfolio-browser.png)

But you have three big problems:

* These pages are still unstyled. You will have to add some CSS to make them look better.
* There is duplication of code between the index and the portfolio pages. Duplication makes code more difficult to maintain so you'd be better off creating some code that can be shared by both pages.
* There are no books listed yet on your portfolio page.

You'll solve each of these problems today, and you'll tackle the first one next by adding some style information using CSS.

## What you’ve learned

* HTML pages can link to each other using the `<a>` HTML tag.
* Websites are a collection of HTML pages.
