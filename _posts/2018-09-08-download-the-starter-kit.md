---
layout: guides
title:  Get the starter kit
permalink: get-the-starter-kit
toc: true
category: getting started
order: 4
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<span class="tag tag--review">Ready for review</span>
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="abstract">
  This article explains the actions you will take on the Day of Code to get your starter kit.
</p>

We've written a starter kit that contains some code libraries you'll need for today, which you're about to download from the code repository website Github. Rather than clicking around the file navigator on your computer, you'll use the command line to download it. You are going to:

* Navigate to the root of your computer using the command line
* Make a new folder, or directory, in which to keep your code
* Navigate into that new directory
* Download the files into that directory
* Navigate to the starter kit directory within.

## Navigate to the root of your computer

Open Terminal (Mac) or the Command prompt (Windows) and at the command prompt, type the following and press enter.

{% highlight bash %}
  cd
{% endhighlight%}

`cd` stands for "change directory", and it has changed the directory you're in to the root of your computer. You could have done the same by going to your file navigator on your computer (Finder or Windows Explorer) and clicking on the relevant folder, but you're doing programming now, so you'll use the command line, which is quicker and more controllable.

## Make a new directory

Next, you're going to create a new directory in which you'll keep your code. Type the following and press enter.

{% highlight bash %}
  mkdir code
{% endhighlight%}

`mkdir` stands for "make directory". You have made a directory called "code". Now you need to change into it, so you can download the starter kit into the correct place on your computer. Type the following and press enter.

## Navigate to your new directory

{% highlight bash %}
  cd code
{% endhighlight%}

You have changed into the code directory.

## Download the files

The command line has access to the internet. Copy and paste the following and press enter.

{% highlight bash %}
  git clone -b starter-kit --single-branch https://github.com/GeneralProducts/publisher-website.git
{% endhighlight%}

Your terminal window looks a bit like this:

![](assets/images/cloning.png)

## Navigate to the starter kit directory

You have downloaded the code into your "code" directory. If you were to type `ls` now, which stands for "list files", you'd see its contents listed. Change into the "publisher-website" directory: type the following and press enter.

{% highlight bash %}
  cd publisher-website
{% endhighlight%}

You are now within the "publisher-website" directory.

## Process the files

Type `ls` to see a list of the files in your "publisher-website" directory.

![](assets/images/ls.png)

You are going to run a command to make the Ruby code libraries in the Gemfile directory work on your computer. Type the following and press enter.

{% highlight bash %}
  bundle
{% endhighlight%}

Your terminal window looks a bit like this:

![](assets/images/bundle.png)

## Start a server running on your computer

Now you are ready to run the code. You do this by starting a server.  Type the following and press enter.

{% highlight bash %}
  jekyll serve
{% endhighlight%}

Your terminal window looks a bit like this:

![](assets/images/server-running.png)

## View the code running in a browser

On a browser, such as Chrome, type "localhost:4000" in as the website address. This runs a website on your own computer, rather than on the internet. Your browser window looks a bit like this:

![](assets/images/its-worked.png)

You're up and running and ready to start programming your website.

## What you’ve learned

A lot!

* How to navigate around your computer on the command line
* How to download files from GitHub
* How to use Ruby gems
* How to run a server on your computer and see the results in a browser

