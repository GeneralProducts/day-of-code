---
layout: guides
title:  <span class="time">09.30 </span> Get the starter kit
permalink: get-the-starter-kit
toc: true
category: On the Day of Code
order: 1
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article explains the actions you will take on the Day of Code to get your starter kit. This is the first article you'll work through on the Day of Code with your coach.
</p>

We've written a starter kit that contains some code libraries and data that you'll need for today, which you're about to download from the code repository website GitHub. Rather than clicking a button on the GitHub website to download it, you'll use your computer's command line to pull the download from GitHub. Go ahead and follow the instructions below to get started.

## Navigate to the root of your computer

Open [Terminal](glossary#terminal) (Mac) or the [Command Prompt](glossary#command-prompt) (Windows), and, at the command line, type the following and press **enter**:

{% highlight bash %}
  cd
{% endhighlight%}

`cd` stands for "change directory", and it has changed the directory you're in to the root of your computer. You could have done the same by going to your file navigator on your computer (Finder or File Explorer) and clicking on the relevant folder, but you're doing programming now, so you'll use the command line, which is quicker and more controllable.

## Make a new directory

Next, you're going to create a new directory in which you'll keep your code. Type the following and press **enter**:

{% highlight bash %}
  mkdir repos
{% endhighlight%}

`mkdir` stands for "make directory". You have made a directory called _repos_ (short for [repositories](/glossary#repositories)).

## Navigate to your new directory

Now you need to change into your new directory, so you can download the starter kit into the correct place on your computer. Type the following and press **enter**:

{% highlight bash %}
  cd repos
{% endhighlight%}

You have changed into the _repos_ directory. Any commands you run on the command line now will be executed in the scope of the _repos_ directory.

## Download the files

The command line has access to the internet. Copy and paste the following and press **enter**:

{% highlight bash %}
  git clone git://github.com/GeneralProducts/publisher-website.git
{% endhighlight%}

Your terminal window looks a bit like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 repos $ git clone git://github.com/GeneralProducts/publisher-website.git
  Cloning into 'publisher-website'...
  remote: Enumerating objects: 86, done.
  remote: Counting objects: 100% (86/86), done.
  remote: Compressing objects: 100% (51/51), done.
  remote: Total 305 (delta 24), reused 70 (delta 17), pack-reused 219
  Receiving objects: 100% (305/305), 54.76 MiB | 5.68 MiB/s, done.
  Resolving deltas: 100% (97/97), done.
{% endhighlight%}

## Navigate to the directory

You have downloaded the code into your _repos_ directory, in a sub-directory called _publisher-website_. Change into this _publisher-website_ directory by typing the following and pressing **enter**:

{% highlight bash %}
  cd publisher-website
{% endhighlight%}

You are now within the _publisher-website_ directory.

## Process the files

Type `ls`, which is the command for "list files",  and press **enter** to see a list of the files in your _publisher-website_ directory. You will see something like this:

{% highlight bash %}
Emma@Emmas-MBP-3 publisher-website $ ls
Gemfile		README.md	_data		assets		index.html	spec
Gemfile.lock	_config.yml	_plugins	images		lib
Emma@Emmas-MBP-3 publisher-website $
{% endhighlight%}

You are going to run a command to make the Ruby code libraries (known as "gems", rather charmingly) in the Gemfile file work on your computer. Type the following and press **enter**:

{% highlight bash %}
  bundle
{% endhighlight%}

Your terminal window looks a bit like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 publisher-website $ bundle
  Using public_suffix 4.0.1
  Using addressable 2.7.0
  Using bundler 1.16.6
  Using byebug 10.0.2
  Using colorator 1.1.0
  Using concurrent-ruby 1.1.5
  Using crass 1.0.4
  Using diff-lcs 1.3
  Using eventmachine 1.2.7
  Using http_parser.rb 0.6.0
  Using em-websocket 0.5.1
  Using ffi 1.11.1
  Using forwardable-extended 2.6.0
  Using i18n 1.7.0
  Using sassc 2.2.1
  Using jekyll-sass-converter 2.0.1
  Using rb-fsevent 0.10.3
  Using rb-inotify 0.10.0
  Using listen 3.2.0
  Using jekyll-watch 2.2.1
  Using kramdown 2.1.0
  Using kramdown-parser-gfm 1.1.0
  Using liquid 4.0.3
  Using mercenary 0.3.6
  Using pathutil 0.16.2
  Using rouge 3.11.1
  Using safe_yaml 1.0.5
  Using unicode-display_width 1.6.0
  Using terminal-table 1.8.0
  Using jekyll 4.0.0
  Using mini_portile2 2.4.0
  Using nokogiri 1.10.4
  Using nori 2.6.0
  Using lisbn 0.2.4
  Using nokogumbo 1.5.0
  Using rspec-support 3.8.0
  Using rspec-core 3.8.0
  Using rspec-expectations 3.8.1
  Using rspec-mocks 3.8.0
  Using rspec 3.8.0
  Using sanitize 4.6.6
  Bundle complete! 6 Gemfile dependencies, 41 gems now installed.
  Use `bundle info [gemname]` to see where a bundled gem is installed.
  Emma@Emmas-MBP-3 publisher-website $
{% endhighlight%}

> <span class="content__learn-more">Troubleshoot<span>
* If you get a message such as `public_suffix-4.0.1 requires ruby version >= 2.3, which is incompatible with the current version, ruby 2.2.5p319`, you are on an old version of Ruby. Ask your coach for advice, and post in the Slack channel for further help. Our advice will differ based on which system and Ruby version manager you're on. Aim for Ruby 2.5.5 at least.

## Start a server running on your computer

Now you are ready to run the code you have downloaded. You do this by starting a server.  Type the following and press **enter**:

{% highlight bash %}
  jekyll serve
{% endhighlight%}

Your terminal window looks a bit like this:

{% highlight bash %}
  Emma@Emmas-MBP-3 publisher-website $ jekyll serve
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

See the bit in the terminal log that says `Server address: http://127.0.0.1:4000/`? That's telling you the address of the website that's now running on your computer. In a browser window, such as Chrome, type "http://127.0.0.1:4000/" in as the website address. This gives you access to this website that's now running on your own computer, as opposed to on the internet. You can alternatively type in "localhost:4000" which is a synonym, and easier to type. Your browser window looks a bit like this:

![It's worked!](assets/images/its-worked.png)

## View the code in your editor

Open your text editor application (e.g. Atom), click **File > Open** and navigate to the _repos_ folder. Open the folder itself in your text editor. Notice that the contents of the folder are listed on the left-hand side in the same way as you see lists of files in Finder or File Explorer. It will look something like this:

![A text editor view](/assets/images/editor.png)

Compare that to the listing in Finder. It's the same thing: a list of files and folders.

![The same files, displayed in Mac's Finder](/assets/images/finder.png)


Double click on _index.html_ to open it in your text editor. It looks a bit like this:

![How the index.html page looks](/assets/images/index.png)

Notice that the words "it's worked" appear in the file. This is the HTML file that you viewed in your browser.
The brower has interpreted and displayed your HTML file. To prove it, return to your browser, right-mouse-click over the words "It's worked", and choose **Inspect**. You see the HTML of the page:

![The web browser inspector, showing HTML](/assets/images/inspector.png)

## What you’ve learned

A lot!

* How to navigate around your computer on the command line
* How to download files from GitHub
* How to install Ruby gems on your computer
* How to run a server on your computer and see the results in a browser

Next, you’re going to be guided through the process today to turn this skeleton of files into a website.
