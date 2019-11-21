---
layout: guides
title:  <span class="time">14.30 </span> Use your own data
permalink: using-own-data
toc: true
category: Using data
order: 4
---

<p class="content__abstract">
  This article tells you how to use your own data.
</p>

## ONIX
Nielsen have kindly provided access to the ONIX 3.0 data they generate for delegates today, and we have stored that data in its raw ONIX format in your code repository. The data is in the same file format that your publishing company generates from its publishing management system (a system like our [Consonance](https://consonance.app), or Klopotek or Biblio) and which it sends to data aggregators such as Nielsen, BDS, Bowker, EBSCO, JSTOR, and Amazon. By knowing how to use and reuse assets such as ONIX files to create websites and marketing materials, you get better value out of your investment in systems, and benefit from "one version of the truth". You can populate the website you're building today with your own ONIX 3 files, after the Day of Code, by saving your ONIX files in the __data_ folder.

You've been mainly making changes in a text editor so far, and reviewing the results in a browser. Now you're going to use the command line to change the source of data you're using. On the Mac, the command line is called the [Terminal](glossary#terminal). On Windows, it's called the [Command Prompt](glossary#command-prompt). Open the relevant one now.

> <span class="content__learn-more"> Troubleshoot</span>
* Don't get confused between a Terminal and a text editor window. Some developers set their Terminal's theme to have a light background and their text editor to have a dark background, or vice versa, to avoid confusion.

Your server is running in one tab, so you'll need to add a new tab to write commands. Use the menu to do that:

![Screenshot showing how to create a new terminal tab](assets/images/term1.png)

> <span class="content__learn-more"> Troubleshoot</span>
* Make sure you are in the correct directory. Your prompt should show you are in the "publisher-website" folder. If you are not, use the instructions from [Get Started](/get-started) to change into the correct directory.

## Transforming ONIX into JSON

To learn how to transform your ONIX data into the JSON format that your Liquid code will understand, open the _README_ file (found at the root of your _repo_ folder) in your text editor. It is written in Markdown: you can see it turned into HTML [here](https://github.com/GeneralProducts/publisher-website/tree/master).

It says:

{% highlight markdown %}
To process the records for a publisher called snowbooks, run:

ruby lib/seed.rb --adaptor onix --publisher snowbooks
{% endhighlight  %}

In your new Terminal tab, paste the following, changing the word "name" to be the name of the publisher you want to see the data for.

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher name
{% endhighlight  %}

If you are from Elsevier, you would type

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher Elsevier
{% endhighlight  %}

If you want to see the books from a publisher with more than one word in its name, enclose the name in quotes. For Hodder & Stoughton, you would type

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher "Hodder & Stoughton"
{% endhighlight  %}

If you want to see the books from all the publisher's variations, provide just a fraction of the name. For the books from all of Penguin Adult,
Penguin Books (SA) (Pty) Ltd,
Penguin Books Australia,
Penguin Books India Pvt Ltd,
Penguin Books Ltd,
Penguin Group (NZ),
Penguin Putnam Inc,
Penguin Random House India,
and Penguin USA, you would type "Penguin"

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher penguin
{% endhighlight  %}

Here is a full list of all the publishers that you can choose from:

```
Bloomsbury
Cambridge University Press
Institute of Physics Publishing
Librarie Philosophique J. Vrin
Morgan & Claypool Publishers
Oxford University Press
British Library Publishing
Egmont UK Ltd
Elsevier Science & Technology
Elsevier Science Publishing Co Inc
Hachette Children's Group
Hardie Grant Egmont
Hodder & Stoughton General Division
Hodder & Stoughton
Jacaranda Books Art Music Ltd
John Murray Press
Oxford University Press Inc
Oxford University Press Southern Africa
Oxford University Press, Canada
Oxford University Press
Penguin Adult
Penguin Books (SA) (Pty) Ltd
Penguin Books Australia
Penguin Books India Pvt Ltd
Penguin Books Ltd
Penguin Group (NZ)
Penguin Putnam Inc
Penguin Random House India
Penguin USA
Prelude
Profile Books Ltd
Quercus Publishing
Royal Yachting Association
SAGE Publications India Pvt Ltd
SAGE Publications Ltd
Soaring Penguin Press
Taylor & Francis
```

If you want to see every single book with a cover, you would type two double quotes:

{% highlight terminal %}
  ruby lib/seed.rb --adaptor onix --publisher ""
{% endhighlight  %}

Press **enter**. You'll see a message like this:

{% highlight terminal %}
  ONIX is being processed for Elsevier. Processed data will be put into _data/processed_books.json
{% endhighlight  %}

> <span class="content__learn-more">Troubleshooting</span>
* If you see messages like `lib/ adaptors/ onix/ v3/ reference/ product.rb:134: syntax error, unexpected '.' ..urrency_code}']/ PriceAmount")&.content`, you are using an old version of Ruby which doesn't support the safe navigation `&.`. Try `rbenv global 2.5.5` or `rvm use ruby-2.5.5` on the Command Line.

Now refresh your browser window and you'll see your own data being used. Note that you didn't change any HTML, just the source of data.

> <span class="content__learn-more"> Where does this data come from?</span>
* As sponsors of Day of Code, Nielsen kindly allowed the Consonance team, who put together this course, access to their database of book data. The Consonance team ran searches by the publisher name of each of the delegates attending the Day of Code, to get a range of familiar products, which Nielsen created an ONIX 3.0 file for, and which the team downloaded. The code you ran to process that ONIX excludes products which do not have a cover on Nielsen, removes duplicates, and makes the publisher query case-insensitive and fuzzy (it checks to see if the publisher name `contains`, rather than `is equal to`, the query). The code is in `lib/adaptors/onix/v3/reference.rb`, in the `products` method.
* Additionally, for the Consonance clients at Day of Code, we have used ONIX 3 data straight out of [Consonance](https://consonance.app).

## VERY IMPORTANT: take a screenshot!

On Monday 25th November, your hosts from Consonance have to present a summary of the Day of Code at the FutureBook conference. We need screenshots from every delegate to showcase our results! Please screenshot your portfolio page, and index page, and send the images to us now via Slack or email: info@consonance.app. Thanks!

> <span class="content__learn-more">Learn more later</span>
*  You have used a library written by the Consonance team to transform ONIX 3 into JSON which Jekyll can understand. Go to `lib/write_data.rb` to see it, and run the tests by typing `rspec` on the command line. And Google the words I've just used: library, JSON, rspec.

## What you’ve learned

* You can reuse data sources to get the most out of your investment in your systems.
* Using one data source means you have one version of the truth, which is more efficient.
