---
layout: page
title: Utilities
---

There are a handful of utilities in Primer for quick behaviors, floats, colors, alignment, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Truncation

`.css-truncate` will shorten text with an ellipsis. The maximum width of the truncated text can be changed by overriding the max-width of the .css-truncate-target.

{% example html %}
<span class="branch-ref css-truncate css-truncate-target">
  really-long-branch-name
</span>
{% endexample %}

You can reveal the entire string on hover with the addition of `.expandable`.

{% example html %}
<span class="css-truncate expandable">
  <span class="branch-ref css-truncate-target">this-is-a-really-long-branch-name</span>
</span>
{% endexample %}

## Floats

Quickly float something to the left or right, and clear them later.

{% example html %}
<div class="clearfix">
  <code class="left">.left</code>
  <code class="right">.right</code>
</div>
{% endexample %}

## Centering content

Easily center **block level content** if it's not taking up the full width of the parent. Can be used [on grid columns](/layout/#centered) or any other elements.

{% example html %}
<nav class="menu centered one-third">
  <a class="menu-item" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>
{% endexample %}


## Text alignment

Change the `text-align` on elements with a class.

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-center">Center aligned text.</p>
{% endexample %}

## Muted link

When you need a hyperlink to not be `$oakland-green` or the current department color, use a `.muted-link`.

{% example html %}
Here is some example text. <a class="muted-link" href="#">And a muted link.</a>
{% endexample %}
