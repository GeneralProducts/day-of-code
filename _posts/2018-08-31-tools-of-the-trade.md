---
layout: guides
title:  Languages and tools
permalink: languages-and-tools
toc: true
category: Before the Day of Code
order: 2
---

<p class="content__abstract">
  There are lots of different programming languages and software tools, and
more are being created all the time. This article introduces the ones we will use. Please read it before the Day of Code, although there is nothing you need to do on your computer.
</p>
In this course you’ll be using four programming languages:

* **HTML** to structure information
* **CSS** to style information
* **Ruby** to dynamically generate information
* **Liquid** to insert that dynamic information into your HTML

You'll also use some software development tools:

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
HTML, CSS, Ruby and Liquid are open source programming languages. You will also be using an open source static site generator called [Jekyll](https://jekyllrb.com/).

## HTML
**H**yper**T**ext **M**arkup **L**anguage is the language of the web. Every single website
you’ve ever been on[^1] is made from HTML, and ePubs[^2] are
made from it, too. It is a markup language for describing web
pages. HTML looks like this:

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
CSS is a style sheet language[^4] used for describing the
presentation of a document written in a markup language,
such as HTML. CSS stands for Cascading Style Sheets, because you can provide multiple contradictory style instructions, but have the browser sort out their priority, in a cascade, according to a set of rules. In other words you can override the brower's default styles, and you can override your own styles in certain situations, too, such as at different browser sizes. CSS looks like this:

{% highlight css linenos %}
  h1 {
    font-size: 16px;
    color: black;
  }
{% endhighlight %}

[^4]: For an example of CSS in action, you can look at the <a href="https://github.com/GeneralProducts/day-of-code">repo for the website you're reading now</a>. It uses <a href="https://sass-lang.com/">SASS</a>, which bills itself as "CSS with superpowers". If you are interested in styling CSS in a way which avoids code reuse and allows you to structure your styles nicely, we'd recommend checking it out for your later projects.

> <span class="content__learn-more">Learn more later<span>
* [Learn Enough CSS & Layout to be Dangerous](https://www.learnenough.com/css)
* [CSS Tricks](https://css-tricks.com/) – our go-to site for pragmatic uses of CSS.
* [Understanding the cascade](https://blog.logrocket.com/how-css-works-understanding-the-cascade-d181cd89a4d8/)

## Ruby
Ruby has been around since 1993, making it a comparatively mature language. Ruby became
very popular as a language for developing web applications[^3] about ten
years ago, after the release of a web application framework
written in Ruby, called Ruby on Rails.
The aim of Ruby on Rails was to make it quicker
to develop web applications by hiding a lot of repetitive
complexity from the developer. The publishing management
system [Consonance](https://consonance.app), written by the people behind Day of Code, is written in Ruby on Rails, as is Github, Basecamp, Kickstarter, Goodreads and Airbnb. Today you won't be using Rails, but a Ruby-based static site generator, called Jekyll. You will also be using Ruby methods to process raw book data. Ruby looks like this:

{% highlight ruby %}
  > "emma".upcase
  => EMMA
{% endhighlight %}

and this:

{% highlight ruby %}
  > 42.times do
  >   "Publishers make great programmers"
  > end
  Publishers make great programmers
  Publishers make great programmers
  Publishers make great programmers
  ...
{% endhighlight %}


> <span class="content__learn-more">Learn more later</span>
* [Learn Enough Ruby to Be Dangerous](https://www.learnenough.com/ruby-tutorial/hello_world)
* [The Rails Tutorial](https://www.learnenough.com/ruby-on-rails-4th-edition) – A resource close to the [author of these guide](http://twitter.com/has_many_books)'s heart, as she finally knuckled down and learned programming with this book, now in its 4th edition. It's best to have a firm grasp of the basics before embarking on this tutorial. The following from [Learn Enough](https://www.learnenough.com/) are recommended:
* Learn Enough Command Line to Be Dangerous
* Learn Enough Text Editor to Be Dangerous
* Learn Enough Git to Be Dangerous
* Learn Enough HTML to Be Dangerous
* Learn Enough CSS & Layout to Be Dangerous
* [RailsGirls](http://railsgirls.com/events.html) are wonderful events where you build an app in a day. The Consonance team volunteer at each London event: see you there?


[^3]: Web applications are websites that users can interact with.

## Liquid
[Liquid](https://shopify.github.io/liquid/) is an open-source template language[^5] created by the eCommerce platform company Shopify and written in Ruby. Lots of web services use Liquid as a way for programmers to load dynamic content onto websites. As well as Shopify, they include Salesforce Desk, Zendesk, [500px](https://web.500px.com/) and [more](https://github.com/Shopify/liquid/wiki#who-uses-liquid). We have chosen to use Liquid in the Day of Code tutorial as knowing it will enable you to edit Shopify stores, often used by publishers for their website. Liquid looks like this (the bit with two curly braces on line 2):

{% highlight html linenos %}
  <h1>
    {% raw %}{{ title }}{% endraw %}
  </h1>
{% endhighlight %}

If `title` is a variable that stands for the words "Home page", this turns into the following HTML:

{% highlight html linenos %}
  <h1>
    Home page
  </h1>
{% endhighlight %}

[^5]: Learning Liquid today will mean it's familiar if you need to edit Shopify or Jekyll websites later. If you go on to write Rails apps, you'll level-up to use <a href="https://ruby-doc.org/stdlib-1.9.3/libdoc/erb/rdoc/ERB.html">ERB</a>, ("<b>E</b>mbedded <b>R</b>u<b>B</b>y") and which is a more powerful templating language. Both Liquid and ERB do the same sort of thing: allow you to run code within your HTML files.

## Command line

The [Terminal](/glossary#terminal) app (Mac) or [Command Prompt](/glossary#command-prompt) program (Windows) is where you type instructions to the computer to run code. It looks something like this in light mode, and can also start in dark mode:

![A terminal window](/assets/images/terminal.png)

You type commands where the `$` is, which is called the 'command line'.

## Text editor

You don't use Microsoft Word to write code: instead you use a purpose-built text editor. Programmers sometimes have strong opinions on the best choice, but it comes down to personal preference. Popular choices are:

* VS Code
* Atom
* Sublime

Text editors look something like this. They can also run in light mode. Notice the file menu down the left hand side: this is for file navigation, just like in Finder (Mac) or File Explorer (Windows).

![image of a text editor](/assets/images/text-editor.png)

## A publisher website
On the Day of Code, you will write a website which displays book data on
a series of web pages. You’ll be using all the tools and technologies described
on this page.

## What you’ve learned
* You tell computers what to do by using a programming
language.
* You can use more than one programming language at a
time
* There are lots of different sorts of programming languages,
each written with a particular speciality in mind.
* Learning to program takes time and there are lots of resources out there to fit your learning style.
