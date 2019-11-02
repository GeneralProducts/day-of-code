---
layout: guides
title:  Instructions for Mac
permalink: set-up-your-development-environment-mac
toc: true
category: Before the Day of Code
order: 4
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  Instructions for Mac set up. If you are on Windows, ignore this article and proceed to the next one.
</p>

Check the version of your operating system by click the Apple menu and choosing "About this Mac".

![Apple's menu](assets/images/apple.png)

If your version is 10.6 or higher, this guide is for you. If it’s lower, email us urgently, well before the Day of Code.

## MacOS 10.9 and higher

If your version is 10.9 or higher, do the following:

### Install Command line tools
Open [Terminal](glossary#terminal) (Mac) or the [Command Prompt](glossary#command-prompt) (Windows), and, at the command line, paste the following and press **enter**:

{% highlight bash %}
xcode-select --install
{% endhighlight%}

### Install Homebrew
At the command line, paste the following and press **enter**:
{% highlight bash %}
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight%}

### Install rbenv
At the command line, paste the following and press **enter**:
{% highlight bash %}
brew update
brew install rbenv
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight%}

### Build Ruby with rbenv
At the command line, paste the following and press **enter**:
{% highlight bash %}
rbenv install 2.5.5
{% endhighlight%}

If you get an `OpenSSL::SSL::SSLError: … : certificate verify failed` error,
paste the following and press **enter**:
{% highlight bash %}
brew install curl-ca-bundle
{% endhighlight%}
Then paste the following and press **enter**.
{% highlight bash %}
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight%}

### Set default Ruby
At the command line, paste the following and press **enter**:
{% highlight bash %}
rbenv global 2.5.5
{% endhighlight%}

### Optional: install Ruby on Rails
You do not need Rails for the Day of Code, but if you'd think you'd like to have it on your laptop for continuing your learning after the event, do the following. At the command line, paste the following and press **enter**:
{% highlight bash %}
gem install rails --no-document
{% endhighlight%}

## MacOS 10.8 and lower

If your MacOS version is 10.6, 10.7, or 10.8, download the RailsInstaller for your version of OS X:

[RailsInstaller for 10.7 and 10.8 (325MB)](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.7.app.tgz)

[RailsInstaller for 10.6 (224MB)](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.6.app.tgz)

Double click the downloaded file and it will unpack it into the current directory. Double click the the newly unpacked _RailsInstaller-1.0.4-osx-10.7.app_ or _RailsInstaller-1.0.4-osx-10.6.app_ and follow the instructions. It will open a README file with _Rails Installer OS X_ at the top. Please ignore the instructions in this file.

## Check your environment
At the command line, paste the following and press **enter**:
{% highlight bash %}
ruby -v
{% endhighlight%}
You should get something like this appear:

`ruby 2.5.5p157 (2019-03-15 revision 67260) [x86_64-darwin17]`

Please email us if you don't.

You have set up your laptop ready for the Day of Code -- congrats!

## What you’ve learned

* You have installed the tools needed to develop software on your computer and you're ready for the Day of Code.
