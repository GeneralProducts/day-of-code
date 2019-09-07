---
layout: guides
title:  How the internet works
permalink: how-the-internet-works
toc: true
category: A static website
order: 1
---
<!-- <span class="tag tag--draft">Not started</span> -->
<span class="tag tag--progress">In progress</span>
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains how the internet works.
</p>


## Accessing websites

You access a website through a browser. Examples are Chrome, Firefox and Safari. Browsers work by taking a URL. The web page you're reading now is accessed via this URL:

{% highlight bash %}
  https://2019.dayofcode.co.uk/how-the-internet-works
{% endhighlight%}

which contains three parts:
* The protocol ("https")
* The server name ("2019.dayofcode.co.uk")
* The file name ("how-the-internet-works")

The browser sends an online message to a name server to ask for the IP address of the server name "2019.dayofcode.co.uk". The browser then connects to the server at that IP address.

Following the HTTPS protocol, the browser sends a GET request to the server, asking for the file "how-the-internet-works"

The server sends the HTML text for the web page to the browser. The browser reads the HTML tags and formats the page onto your screen.

## Local websites

Imagine a manuscript that's under submission. It only exists as a copy of a file on the author and editor's computers, because it's not yet published. It's the same with websites that are still under development: they're not published on the web, yet, but instead are files that reside on the developers' computers. We call these websites "local" or "in development".

## Published websites

Websites you access on the internet have been published by their developers, which means the files have been uploaded to a web server. We call these websites "live" or "production".

## Static websites


## Dynamic websites



## What you’ve learned

* TODO

