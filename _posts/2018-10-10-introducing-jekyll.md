---
layout: guides
title:   <span class="time">13.45 </span>Jekyll and Liquid
permalink: introducing-jekyll
toc: true
category: Using data
order: 2
---

<p class="content__abstract">
  This article introduces Jekyll and the templating language it uses, Liquid. You won't add anything to your code whilst reading through this article.
</p>

## Jekyll

[Jekyll](https://jekyllrb.com/) is a type of "static site generator". Developers use static site generators to combine content with templates to produce HTML pages programmatically. [Read more later about Jekyll and its uses.](https://learn.cloudcannon.com/jekyll/why-use-a-static-site-generator/)

Back when you were [getting started](/get-started), you ran `bundle` to install the Jekyll gem, amongst others. You also started a Jekyll server, which you have been running ever since, whilst you have been building up your website.

You have already used Jekyll's [front matter feature](https://jekyllrb.com/docs/front-matter/) to [DRY up your code](/dry-up-your-code). In the next article, you are going to use another feature of Jekyll, and use Liquid in your HTML.

## Liquid

[Liquid](https://shopify.github.io/liquid/) is a templating language, created by the eCommerce platform provider Shopify, written in [Ruby](/glossary#ruby). Liquid uses a combination of tags, objects, and filters to load dynamic content into template files (either HTML or Markdown). Liquid tags are the programming logic that tell templates what to do. [Learn more about Liquid later.](https://help.shopify.com/en/themes/liquid/basics)

Your challenge, which you'll be walked through in the next article, is to replace the static HTML in the _portfolio.html_ file with **Liquid tags** that will loop through all your books, and **Liquid objects** which will display them. To do that, you'll need to know Liquid's syntax.

## Liquid tags and objects
**Liquid tags** make up the programming logic that tell templates what to do (as in lines 1 and 3, below). **Liquid objects** (as in line 2 below) contain attributes that are used to display dynamic content on a page.

{% highlight liquid linenos %}
{% raw %}
{% for book in books %}
  {{ book.title }}
{% endfor %}
{% endraw %}
{% endhighlight %}

Liquid tags run some logic but do not print values onto the page. The syntax is a `{% raw %}{%{% endraw %}` at the start of the tag, and a `{% raw %}%}{% endraw %}` at the end. Anything between those characters will be interpreted as a Liquid command. The code will run, but the result will not be printed to the screen.

Liquid objects, on the other hand, print to the page. The syntax is a `{% raw %}{{{% endraw %}` at the start of the command, and a `{% raw %}}}{% endraw %}` at the end. Anything between those characters will be interpreted as a command. The code will run, and the result is printed to the screen. You’ll get a piece of data, such as the book's title, appearing on the page.

[Learn more about using Liquid later.](https://learn.cloudcannon.com/jekyll/introduction-to-liquid/)

## A note on the data source

In a while, you are going to use your own ONIX XML as a data source, but for now we have prepared a bit of sample data for you to use. Go to the next article to get started in using this data source on your website, rather than typing directly into HTML, by using Liquid tags and Liquid objects.

## What you’ve learned

* You are using Jekyll, a static site generator, which uses a templating language called Liquid.
* Jekyll's Liquid language uses tags, objects and filters to produce HTML.
