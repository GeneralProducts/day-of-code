---
layout: guides
title:  Instructions for Windows
permalink: set-up-your-development-environment-windows
toc: true
category: Before the Day of Code
order: 5
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  Instructions for Windows set up. If you are on Mac, ignore this article and read the previous one.
</p>

You are going to install Ruby using an installer.

## Install Ruby
[Download the Ruby Installer Ruby Devkit 2.6.X (x64) and run it](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.6.5-1/rubyinstaller-devkit-2.6.5-1-x64.exe). Click through the installer using the default options. That link downloads the installer itself: if you prefer to go to the Ruby Installer website, [here is the link](https://rubyinstaller.org/downloads/).

## Enable copy and paste in Windows Command Prompt

**For Windows 10 users:**

Open Command Prompt. Right-click on the command prompt’s title bar, and choose “Properties”. Navigate to the “options” tab, and check “Enable Ctrl key shortcuts”. (If you don’t find it, but have an “experimental” tab, navigate there and check “Enable new Ctrl key shortcuts” option. In this case, you may need to check the “Enable experimental console features” option first.)

**For other Windows versions:**

To paste a text in the command prompt window you’ll need to use the mouse (right-click on the window –> paste).

## Install Node.js
Go to [https://nodejs.org/](https://nodejs.org/) and install the Node.js LTS package


## Check your environment
At the command line, paste the following and press **enter**:
{% highlight bash %}
ruby -v
{% endhighlight%}
You should get something like this appear:

`ruby 2.5.5`

Please email us or comment on the Slack channel if you don't.

## What you’ve learned

* You have installed the tools needed to develop software on your computer and you're ready for the Day of Code.
