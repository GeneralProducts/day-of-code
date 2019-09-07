---
layout: guides
title:  Get the starter kit
permalink: get-the-starter-kit
toc: true
category: Getting started
order: 4
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<span class="tag tag--approved">Approved</span>

<p class="content__abstract">
  This article explains the actions you will take on the Day of Code to get your starter kit.
</p>

We've written a starter kit that contains some code libraries you'll need for today, which you're about to download from the code repository website Github. Rather than clicking around the file navigator on your computer, you'll use the command line to download it. Go ahead and follow the instructions below to get started.

## Navigate to the root of your computer

Open [Terminal](glossary#terminal) (Mac) or the [Command Prompt](glossary#command-prompt) (Windows), and, at the command line, type the following and press enter.

{% highlight bash %}
  cd
{% endhighlight%}

`cd` stands for "change directory", and it has changed the directory you're in to the root of your computer. You could have done the same by going to your file navigator on your computer (Finder or File Explorer) and clicking on the relevant folder, but you're doing programming now, so you'll use the command line, which is quicker and more controllable.

## Make a new directory

Next, you're going to create a new directory in which you'll keep your code. Type the following and press enter.

{% highlight bash %}
  mkdir repos
{% endhighlight%}

`mkdir` stands for "make directory". You have made a directory called "repos" (short for [repositories](/glossary#repositories)).

## Navigate to your new directory

Now you need to change into your new directory, so you can download the starter kit into the correct place on your computer. Type the following and press enter.

{% highlight bash %}
  cd repos
{% endhighlight%}

You have changed into the repos directory.

## Download the files

The command line has access to the internet. Copy and paste the following and press enter.

{% highlight bash %}
  git clone -b starter-kit --single-branch https://github.com/GeneralProducts/publisher-website.git
{% endhighlight%}

Your terminal window looks a bit like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 repos $  git clone -b starter-kit --single-branch https://github.com/GeneralProducts/publisher-website.git
  Cloning into 'publisher-website'...
  remote: Enumerating objects: 42, done.
  remote: Counting objects: 100% (42/42), done.
  remote: Compressing objects: 100% (36/36), done.
  remote: Total 42 (delta 5), reused 40 (delta 3), pack-reused 0
  Unpacking objects: 100% (42/42), done.
  Emma@Emmas-MBP-3 repos $
{% endhighlight%}



## Navigate to the starter kit directory

You have downloaded the code into your "repos" directory, in a sub-directory called "publisher-website". Change into this "publisher-website" directory by typing the following and pressing enter.

{% highlight bash %}
  cd publisher-website
{% endhighlight%}

You are now within the "publisher-website" directory.

## Process the files

Type `ls`, which is the command for "list files", to see a list of the files in your "publisher-website" directory. You will see something like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 publisher-website (starter-kit) $ ls
  Gemfile       README.md   _plugins  images      lib
  Gemfile.lock  _config.yml css       index.html
  Emma@Emmas-MBP-3 publisher-website (starter-kit) $
{% endhighlight%}

You are going to run a command to make the Ruby code libraries (known as "gems", rather charmingly) in the Gemfile file work on your computer. Type the following and press enter.

{% highlight bash %}
  bundle
{% endhighlight%}

Your terminal window looks a bit like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 publisher-website (starter-kit) $ bundle
  Using public_suffix 3.0.3
  Using addressable 2.6.0
  Using bundler 1.16.0
  Using colorator 1.1.0
  Using crass 1.0.4
  Using ffi 1.11.1
  Using forwardable-extended 2.6.0
  Using rb-fsevent 0.10.3
  Using rb-inotify 0.10.0
  Using sass-listen 4.0.0
  Using sass 3.7.4
  Using jekyll-sass-converter 1.5.2
  Using ruby_dep 1.5.0
  Using listen 3.1.5
  Using jekyll-watch 1.5.1
  Using kramdown 1.17.0
  Using liquid 3.0.6
  Using mercenary 0.3.6
  Using pathutil 0.16.2
  Using rouge 1.11.1
  Using safe_yaml 1.0.5
  Using jekyll 3.3.1
  Using mini_portile2 2.3.0
  Using nokogiri 1.8.1
  Using nori 2.6.0
  Using lisbn 0.2.4
  Using nokogumbo 1.5.0
  Using sanitize 4.6.6
  Bundle complete! 4 Gemfile dependencies, 28 gems now installed.
  Use `bundle info [gemname]` to see where a bundled gem is installed.
  Emma@Emmas-MBP-3 publisher-website (starter-kit) $
{% endhighlight%}

## Start a server running on your computer

Now you are ready to run the code you have downloaded. You do this by starting a server.  Type the following and press enter.

{% highlight bash %}
  jekyll serve
{% endhighlight%}

Your terminal window looks a bit like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 publisher-website (starter-kit) $ jekyll serve
  Configuration file: /Users/Emma/repos/publisher-website/_config.yml
  Configuration file: /Users/Emma/repos/publisher-website/_config.yml
              Source: /Users/Emma/repos/publisher-website
        Destination: /Users/Emma/repos/publisher-website/_site
  Incremental build: disabled. Enable with --incremental
        Generating... done in 0.049 seconds.
  Auto-regeneration: enabled for '/Users/Emma/repos/publisher-website'
  Configuration file: /Users/Emma/repos/publisher-website/_config.yml
      Server address: http://127.0.0.1:4000/
    Server running... press ctrl-c to stop.

{% endhighlight%}


## View the code running in a browser

In a browser window, such as Chrome, type "localhost:4000" in as the website address. This gives you access to the website that's now running on your own computer, as opposed to on the internet. Your browser window looks a bit like this:

![](assets/images/its-worked.png)

## View the code in your editor

On the command line, type the following and press enter. That dot is a full stop.

{% highlight bash %}
  code .
{% endhighlight%}

The code opens in your text editor. It will look something like this:

![](/assets/images/editor.png)

These are the files that make up your app. Double click on `index.html`. It looks a bit like this:

![](/assets/images/index.png)


Notice that the words "it's worked" appear in the file. This is the HTML file that you are viewing in your browser.
Browers can interpret and display HTML files.


## What you’ve learned

A lot!

* How to navigate around your computer on the command line
* How to download files from GitHub
* How to install Ruby gems on your computer
* How to run a server on your computer and see the results in a browser

Next, you’re going to be guided through the process today to turn this skeleton of files into a dynamic web app.
