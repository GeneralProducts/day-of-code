---
layout: guides
title:  Instructions for Windows
permalink: set-up-your-development-environment-windows
toc: true
category: Before the Day of Code
order: 5
---

<p class="content__abstract">
  Instructions for Windows set up. If you are on Mac, ignore this article and read the previous one.
</p>

You are going to install Ruby using an installer.

## Install Ruby
[Download the Ruby Installer Ruby Devkit 2.6.X (x64) and run it](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.6.5-1/rubyinstaller-devkit-2.6.5-1-x64.exe). Click through the installer using the default options. That link downloads the installer itself: if you prefer to go to the Ruby Installer website, [here is the link](https://rubyinstaller.org/downloads/).

Run MSYS2 if given the option.

## Enable copy and paste in Windows Command Prompt

**For Windows 10 users:**

Open Command Prompt by typing `cmd` in the search bar at the bottom of the screen, and selecting Command Prompt:

![Starting the command prompt in windows 10](/assets/images/cmd.jpg)

Right-click on the command prompt’s title bar, and choose “Properties”. Navigate to the “options” tab, and check “Enable Ctrl key shortcuts”. (If you don’t find it, but have an “experimental” tab, navigate there and check “Enable new Ctrl key shortcuts” option. In this case, you may need to check the “Enable experimental console features” option first.)

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

## Install Git

Download the latest [Git for Windows stand-alone installer](https://git-for-windows.github.io/).

When you've successfully started the installer, you should see the Git Setup wizard screen. Follow the Next and Finish prompts to complete the installation, accepting the default options.

## What you’ve learned

* You have installed the tools needed to develop software on your computer.
