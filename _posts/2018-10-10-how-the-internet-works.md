---
layout: guides
title:  How the internet works
permalink: how-the-internet-works
toc: true
category: Using data
order: 2
---
<!-- <span class="tag tag--draft">Not started</span> -->
<span class="tag tag--progress">In progress</span>
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains how the internet works.
</p>

It’s probably worth going over what happens when you visit a website, since you’re creating one.

You start the conversation when you tell your web browser the URL you want to visit. Let’s imagine you want to visit Consonance’s Twitter page. You’d type ‘www.twitter.com/consonance_app’ into the address bar of your browser (or maybe you’d look it up on Google and click on a link).

![](assets/images/domain.jpg)

The URL gets broken into two halves. The first part – what you might think of as the ’domain name’ – specifies which webserver you want to talk to. In this case you’re connecting to the servers at twitter.com. The second part of the URL says which page from that website you want to look at. In this case that’s the ‘/consonance_app’ part of the address. If you leave that part out, you’ll typically get taken to the home page of the website

<!-- ![](assets/images/round_trip.jpg) -->

So what does a webserver do when it receives a request for a page? 99 times out of 100 it replies to that request by sending back an HTML file. The HTML might specify a heading which says ‘Consonance’. Then the relevant piece of CSS will specify that it should appear in 15 point Lucida Sans in white.

To recap: the web browser on your computer requests a web page from some remote server. That server sends back an HTML file, plus some CSS. Then your browser uses the CSS to layout that HTML so that you can see the web page properly displayed on your screen.

## Static websites

Where does a webserver get the HTML files that it sends out? The simplest option is to write them all out in advance. So if a website has 100 pages, then there will be 100 HTML files sitting in a folder on that server waiting for someone to request them.

That’s called a ‘static website’ because every time a user requests a particular web page they get the same HTML file sent to them. The HTML doesn’t change from day to day unless a designer goes in and manually edits it, which is why it’s called ‘static’.

## Dynamic websites

A second, and more sophisticated, type of webserver can understand bits of code embedded in an HTML file. Those webservers are often accessed remotely.

Have you ever run a mail merge from Microsoft Word? You add in mail merge tags such as `<firstname>` and `<lastname>`. You can do the same thing in HTML. There are still lots of pre-prepared HTML files, but included in amongst the HTML will be command tags. These tags are code commands; they instruct the webserver to perform a task. In most cases the commands will instruct the webserver to fetch some information: for instance, today’s date. So you place the command tags in amongst the HTML in the exact spot you want the date to go and the last thing the webserver does before sending out the file is to replace it with the actual current date.

<!-- ![](assets/images/dates.jpg) -->

(The example above uses made-up tags. In reality, the format and syntax will depend on which of the many types of webserver you’re using.)

Pieces of information that stay the same from day to day (e.g. the words in an old blog post) can be written directly into an HTML file. But if you want users to see information that keeps changing (e.g. the total number of visitors to your site) you can embed code like this instead. A visitor to the website never gets to see that code, though, because it’s always been replaced before the file is sent to your browser.

You can think of these command tags as being a question. Before an HTML files gets sent out, all those questions are replaced with their HTML answers.

Sites such as Wordpress, Twitter and our own publishing management software, Consonance, are examples of sophisticated web applications where servers dynamically query and interpret tagged-up files.

## Databases

The ability to swap in data dynamically becomes even more useful if your website stores its content in a database rather than in lots of separate HTML files. If you want to offer 100 web pages, one for each book you’ve published, you don’t need to create 100 HTML files. You can design one web page as a ‘template’ and use it for all 100 books, drawing their data from where it’s stored in the database. For instance, the heading in your template could be made up of one command tag for ‘author name’ and another command tag for ‘book title’. Those command tags will be replaced with the relevant info, depending on which book’s web page the user is requesting. You can think of a database as a bit like a spreadsheet, where the sheets can talk to each other, matching their data through identical keys. We are going to be using a range of database-like data stores today: JSON, XML (ONIX) and the good old .csv.

## Why Ruby?

We have chosen to use Ruby during this course because it is an elegant language. William Strunk, Jr. would be delighted with Ruby:

> ### Omit needless words.
> Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all his sentences short, or that he avoid all detail and treat his subjects only in outline, but that _every word tell_.
> #### Strunk and White, The Elements of Style, 1918

As computing power has increased over the last few decades, we can have programming languages optimised for humans, not computers. Computers are powerful enough nowadays to allow Ruby methods to be written in clear English, which take longer to process than some terse machine code. Ruby is quite readable. `Book.all`, for example, means “get all the books”.

## Why Jekyll?

Today, we are using the static site generator Jekyll to do the work of a webserver – translating command tags and outputting static HTML -- before we push the code to the internet, rather than dynamically creating it on the fly. It means we're not going to have to use an advanced web server to dynamically interpret our code, but we are still going to be inserting command tags so we can automate the generation of our HTML.

## Command tags
Your first challenge is to replace the static HTML in the portfolio.index file with command tags that will loop through all your books and display them.

## Syntax
Syntax refers to the symbols and words that make up a programming language. Use the correct syntax and the computer will know what you want it to do.

The syntax for a command tag in Jekyll's Liquid templating language is this:

{% highlight liquid %}
{% raw %}
  {% for book in books %}
    {{ book.title }}
  {% endfor %}
{% endraw %}

{% endhighlight %}

If you want to print values onto the page in HTML, the syntax is a `{% raw %}{{{% endraw %}` at the start of the command, and a `{% raw %}}}{% endraw %}` at the end. Anything between those characters will be interpreted as a command. The code will run, and the result is printed to the screen. You’ll get a piece of data, such as the image, appearing on the page.

If you want to run some logic but not print values onto the page in HTML, the syntax is a `{% raw %}{%{% endraw %}` at the start of the command, and a `{% raw %}%}{% endraw %}` at the end. Anything between those characters will be interpreted as a command. The code will run, but the result will not be printed to the screen.

In a while, you are going to query your own ONIX as a data source, but for now we have prepared a bit of sample data for you to use. Open lib/sample_book.rb. You’ll see some sample data -- the title is War and Peace, the publisher is Snowbooks, and so on.


## What you’ve learned

* TODO

