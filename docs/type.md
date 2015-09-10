---
layout: page
title: Typography
---

Headings, paragraphs, blockquotes, lists, and more have some global resets. It's worth noting these aren't the same as our Markdown styles.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Headings

{% example html %}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{% endexample %}

**Markdown**

<pre>
  <code>
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  </code>
</pre>

### Faux headings

Sometimes you will want to have a text element that appears like a certain heading without affecting the [Document Outline](http://www.w3.org/html/wg/drafts/html/master/semantics.html#outline). You can accomplish this with heading classes.

{% example html %}
<h6 class="h1">Faux h1</h6>
<h5 class="h2">Faux h2</h5>
<h4 class="h3">Faux h3</h4>
<h3 class="h4">Faux h4</h3>
<h2 class="h5">Faux h5</h2>
<h1 class="h6">Faux h1</h1>
{% endexample %}

## Body text

{% example html %}
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
{% endexample %}

**Markdown**

<pre>
  <code>
    Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

    Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
  </code>
</pre>

## Links

{% example html %}
<a href="http://example.com/">Body Link</a>
<h3><a href="http://example.com/">Heading Link</a></h3>
{% endexample %}

**Markdown**

<pre><code>
  [Body Link](http://example.com/)

  ###[Heading link](http://example.com/)
</code></pre>

Links will inherit the color of the site section they are in.

{% example html %}
<div class="container transportation">
  <a href="http://example.com/">Body Link</a>
  <h3><a href="http://example.com/">Heading Link</a></h3>
</div>
<div class="container public-works">
  <a href="http://example.com/">Body Link</a>
  <h3><a href="http://example.com/">Heading Link</a></h3>
</div>
{% endexample %}

## Inline text elements

Styling for common inline HTML5 elements.

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endexample %}

## Blockquotes

Wrap `<blockquote>` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote. For straight quotes, we recommend a `<p>`.

{% example html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

## Lists

### Unordered

A list of items in which the order does *not* explicitly matter.

{% example html %}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### Ordered

A list of items in which the order *does* explicitly matter.

{% example html %}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
{% endexample %}

## Post data

This element should be added to any single post or post excerpt. It will display a small, muted bit of text for display category or date info.

{% example html %}
<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
{% endexample %}

## Horizontal Rule

Horizontal rules can be added to any layout to separate sections. It has a 3rem bottom margin.

{% example html %}
<hr>
{% endexample %}
