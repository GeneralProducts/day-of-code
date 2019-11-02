---
layout: guides
title:  <span class="time">14.30 </span> Use your own data
permalink: using-own-data
toc: true
category: Using data
order: 4
---
<!-- <span class="tag tag--draft">Not started</span> -->
<!-- <span class="tag tag--progress">In progress</span> -->
<!-- <span class="tag tag--review">Ready for review</span> -->
<!-- <span class="tag tag--approved">Approved</span> -->

<p class="content__abstract">
  This article tells you how to use your own code.
</p>

## Get your ONIX file
Nielsen have kindly provided access to the ONIX 3.0 data they hold for delegates today, and we have stored that data in its raw ONIX format [here](https://github.com/GeneralProducts/publisher-xml-files) [a private GitHub repo, made public just for the Day of Code]. The data is in exactly the same file format that your publishing company generates from its publishing management system (a system like our [Consonance](https://consonance.app), or Klopotek or Biblio) and which it sends to data aggregators such as Nielsen, BDS, Bowker, EBSCO, JSTOR etc. By knowing how to use and reuse assets such as ONIX files to create websites and marketing materials, you get better value out of your investment in systems. You can populate the website you're building today with your own ONIX 3 files, after the Day of Code, by saving your ONIX files in the __data_ folder.

For now, go to the [repo here](https://github.com/GeneralProducts/publisher-xml-files) and find your company's ONIX file. Download it and save it in your __data_ file.

You've been mainly making changes in a text editor so far, and reviewing the results in a browser. Now you're going to use the command line to change the source of data you're using. On the Mac, the command line is called the [Terminal](glossary#terminal). On Windows, it's called the [Command Prompt](glossary#command-prompt). Open the relevant one now.

Your server is running in one tab, so you'll need to add a new tab to write commands. Use the menu to do that:

![](assets/images/term1.png)

To learn how to get your data, open the _README_ file in your text editor. It is written in Markdown: you can see it turned into HTML [here](https://github.com/GeneralProducts/publisher-website/tree/master).

![](assets/images/readme.png)

It says:

{% highlight markdown %}
To process an ONIX 3 file called `snowbooks.xml`, run:

`ruby lib/seed.rb --adaptor onix --publisher snowbooks`
{% endhighlight  %}

In your new Terminal tab, type the following, changing the word "snowbooks" to be the name your file is named.

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher snowbooks
{% endhighlight  %}

If you are from Elsevier, and your file saved in __data_ is called _elsevier.xml_, you would type

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher elsevier
{% endhighlight  %}

Press **enter**. You'll see a message like this:

{% highlight terminal %}
  ONIX is being processed for elsevier. Processed data will be put into _data/processed_books.json
{% endhighlight  %}

> <span class="content__learn-more">Troubleshooting</span>
* For coaches: If you see messages like `lib/adaptors/onix/v3/reference/product.rb:134: syntax error, unexpected '.' ..urrency_code}']/PriceAmount")&.content`, your delegate is using an old version of Ruby which doesn't support the safe navigation `&.`. Try `rvm use ruby-2.5.5`


Now refresh your browser window and you'll see your own books being used.

## VERY IMPORTANT: take a screenshot!

On Monday 25th November, your hosts from Consonance have to present a summary of the Day of Code at the FutureBook conference. We need screenshots from every delegate to showcase our results! Please screenshot your portfolio page, and index page, and send the images to us now via Slack or email: info@consonance.app. Thanks!

> <span class="content__learn-more">Learn more later</span>
*  You have used a library written by the Consonance team to transform ONIX 3 into JSON which Jekyll can understand. Go to `lib/write_data.rb` to see it, and run the tests by typing `rspec` on the command line. And Google the words I've just used: library, JSON, rspec.

## What you’ve learned

* You can reuse data sources to get the most out of your investment in your systems.
* Using one data source means you have one version of the truth, which is more efficient.
