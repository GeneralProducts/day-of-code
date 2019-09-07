---
layout: guides
title:  Languages and tools
permalink: languages-and-tools
toc: true
category: Getting started
order: 2
---

<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<span class="tag tag--review">Ready for review</span>
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  There are lots of different programming languages and software tools, and
more are being created all the time. This article introduces the ones we will use. No actions required: just read it.
</p>

In this course you’ll be using four programming languages:

* **HTML** to structure information
* **CSS** to style information
* **Ruby** to dynamically generate information
* **Liquid** to insert that dynamic information into your HTML

We'll also use some software development tools:

* **Terminal** (Mac), or
* **Command Prompt** (Windows)
* **A text editor**

One of the most interesting and heartwarming features
of the modern programming world is the open source
movement. We build on the shoulders of giants, reusing
code that the community have built, tested and released for
use at no charge. These are not hobbyist resources: open
source has the benefit of being more thoroughly and widely
tested than closed, proprietary software.
HTML, CSS, Ruby and Liquid are open source. We will be using another open source resource called [Jekyll](https://jekyllrb.com/), a static site generator.

## HTML
HTML is the language of the web. Every single website
you’ve ever been on[^1] is made from HTML, and ePubs[^2] are
made from it, too. It is a markup language for describing web
pages. HTML stands for Hyper Text Markup Language. It looks like this:

{% highlight html %}
  <h1>Hello, world!</h1>
{% endhighlight %}

[^1]: Even ones from the olden days that were Flash-based were still HTML docs.
[^2]: An ePub is a zip file whose contents include HTML and CSS files. Open one with [Springy](https://springy.en.softonic.com/mac) on a Mac or [WinZip](https://www.winzip.com/win/en/) on Windows and take a look.

> <span class="content__learn-more">Learn more later<span>
* [Learn Enough HTML to be Dangerous](https://www.learnenough.com/html)
– [LearnEnough.com](https://www.learnenough.com) is a very well-written resource, and their course on HTML is a great way to learn to speak the universal language of the web.
* If you are sociable, [CodeBar](https://tutorials.codebar.io/) is a great event to learn at.


## CSS
CSS is a style sheet language used for describing the
presentation of a document written in a markup language,
such as HTML. CSS stands for Cascading Style Sheets, because later instructions in CSS overwrite earlier ones, in a cascade. It looks like this:

{% highlight css %}
  h1 {
    font-size: 16px;
    color: black;
  }
{% endhighlight %}

> <span class="content__learn-more">Learn more later<span>
* [Learn Enough CSS & Layout to be Dangerous](https://www.learnenough.com/css)
* [CSS Tricks](https://css-tricks.com/) – our go-to site for pragmatic uses of CSS.

## Ruby
Ruby has been around since 1993, making it a comparatively mature language. Ruby became
very popular as a language for developing web applications[^3] about ten
years ago, after the release of a web application framework
written in Ruby, called Ruby on Rails.
The aim of Ruby on Rails was to make it quicker
to develop web applications by hiding a lot of repetitive
complexity from the developer. The publishing management
system [Consonance](https://consonance.app), written by the people behind Day of Code, is written in Ruby on Rails. Today we won't be using a framework, but a Ruby-based static site generator, called Jekyll. We will also be using Ruby methods to process raw book data. Ruby looks like this:

{% highlight ruby %}
  def hello_world(name)
    puts "Hello, #{name}!"
  end
{% endhighlight %}

You can run that Ruby on the command line. `irb` stands for 'Interactive Ruby'

{% highlight bash %}
  $ irb
  > hello_world("Emma")
  Hello, Emma!

  > hello_world("Rosie")
  Hello, Rosie!
{% endhighlight %}

> <span class="content__learn-more">Learn more later</span>
* [Learn Enough Ruby to Be Dangerous](https://www.learnenough.com/ruby-tutorial/hello_world)
* [The Rails Tutorial](https://www.learnenough.com/ruby-on-rails-4th-edition) – A resource close to the author of these guide's heart, as she learned programming with this book, now in its 4th edition. It's best to have a firm grasp of the basics before embarking on these tutorials. The following are recommended:
* Learn Enough Command Line to Be Dangerous
* Learn Enough Text Editor to Be Dangerous
* Learn Enough Git to Be Dangerous
* Learn Enough HTML to Be Dangerous
* Learn Enough CSS & Layout to Be Dangerous
* [RailsGirls](http://railsgirls.com/events.html) are wonderful events where you build an app in a day. The Consonance team volunteer at each London event.


[^3]: Web applications are websites that users can interact with.

## Liquid
Liquid is an open-source template language created by the eCommerce platform company Shopify and written in Ruby.
It is used to load dynamic content onto websites. It looks like this:

{% highlight html %}
  <h1>
    {% raw %}{{ title }}{% endraw %}
  </h1>
{% endhighlight %}

If `title` is a variable that stands for the words "Home page", this turns into the following HTML:

{% highlight html %}
  <h1>
    Home page
  </h1>
{% endhighlight %}

## Command line

The [Terminal](/glossary#terminal) app (Mac) or [Command Prompt](/glossary#command-prompt) program (Windows) is where you type instructions to the computer to run code. It looks something like this:

![A terminal window](/assets/images/terminal.png)

You type commands where the `$` is, which is called the 'command line'.

## Text editor

You don't use Microsoft Word to write code: instead you use a purpose-built text editor. Programmers sometimes have strong opinions on the best choice, but it comes down to personal preference. Popular choices are:

* VS Code
* Atom
* Sublime

Text editors look like this:

![image of a text editor](/assets/images/text-editor.png)

## A publisher website
Today you are going to write a website which displays book data on
a series of web pages. You’ll be using all the technologies described
previously. So let’s get started!

## What you’ve learned
* You tell computers what to do by using a programming
language.
* You can use more than one programming language at a
time
* There are lots of different sorts of programming languages,
each written with a particular speciality in mind.
* Learning to program takes time and there are lots of resources out there to fit your learning style.

