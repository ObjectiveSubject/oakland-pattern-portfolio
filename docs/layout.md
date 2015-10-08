---
layout: page
category: visual
title: Layout
slug: layout
---

Oakland's layout includes basic page containers and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it's just containers, rows, and columns.

You can find all the below styles in `_layout.scss`.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

---

## Container

Center your page's contents with a `.container`. A container can be placed inside an element like a `<header>` or any other element that should stretch to the max body width of 1200px.

{% highlight html %}
<div class="container">
  <!-- contents here -->
</div>
{% endhighlight %}

The container uses Bourbon Neat's `outer-container` mixin to define max-width, margins, columns and gutters.
It also adds padding to either side of itself and `box-sizing: content-box` to maintain the grid as designed.

---

## Grid

### How it works

The grid is pretty standard—you create rows with `.grid-row` and individual columns with a column class and fraction class. Here's how it works:

- Add a `.container` to encapsulate everything and provide ample horizontal gutter space.
- Create your outer row to clear the floated columns with `<div class="grid-row">`.
- Add your fractional width classes to set the width of the child div columns (e.g., `.one-fourth`). These are defined using Neat's `span-columns` mixin.
- Neat automatically removes the trailing gutter from the last child elements that use the `span-columns` mixin

### Demo

In practice, your columns will look like the example below. **The demos add the `.column` class for the sole purpose of adding the green background and border to visualize the columns. This class should not be used in production.**

{% example html %}
<div class="container">
  <div class="grid-row">
    <div class="one-fourth column">
      .one-fourth
    </div>
    <div class="three-fourths column">
      .three-fourths
    </div>
  </div>
  <div class="grid-row">
    <div class="one-third column">
      .one-third
    </div>
    <div class="two-thirds column">
      .two-thirds
    </div>
  </div>
  <div class="grid-row">
    <div class="one-half column">
      .one-half
    </div>
    <div class="one-half column">
      .one-half
    </div>
  </div>
</div>
{% endexample %}

### Centered

Columns can be [centered](/utilities/#centering-content) by adding `.centered` to the `.column` class.

{% example html %}
<div class="grid-row">
  <div class="one-half column centered">
    .one-half
  </div>
</div>
<div class="grid-row">
  <div class="one-third column centered">
    .one-third
  </div>
</div>
<div class="grid-row">
  <div class="one-fourth column centered">
    .one-fourth
  </div>
</div>
{% endexample %}

### Last column

If you want to remove a column's gutters for any reason, you can apply the `.column-last` class. This would typically be used when you want a column to float right when there aren't other columns to fill the row.

{% example html %}
<div class="grid-row">
  <div class="one-third column">
    .one-third
  </div>
  <div class="one-third column right column-last">
    .column-last
  </div>
</div>
{% endexample %}

***

## Divider

Dividers are made using the horizontal rule element. They can be added to any layout to separate sections. It has a 3rem bottom margin.

{% example html %}
<hr>
{% endexample %}

**Markdown**

Any of the following will produce a horizontal rule.

<div class="highlight-md">
<pre><code>
* * *

***

*****

- - -

---------------------------------------
</code></pre>
</div>

***

## Tables

Tables should be placed inside a `.table-wrap` element to give it a simple responsive treatment. This lets tables become longer than the viewport and have an independent horizontal scroll.

Currently there is a min-width applied to tables as a proof of concept, but **this should be updated during implementation**.

More info about table markup can be found in the [Code Guidelines]({{ site.baseurl }}/guidelines/).

{% example html %}
<div class="table-wrap" style="background: white;">
  <table>
    <thead>
      <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Body content 1 with very very very very long text</td>
        <td>Body content 2</td>
      </tr>
      <tr>
        <td>Body content 3</td>
        <td>Body content 4</td>
      </tr>
      <tr>
        <td>Body content 5</td>
        <td>Body content 6</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="table-wrap" style="background: white;">
  <table>
    <thead>
      <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
        <th>Header content 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Body content 1 with very very very very long text</td>
        <td>Body content 2</td>
        <td>Some more content</td>
      </tr>
      <tr>
        <td>Body content 3</td>
        <td>Body content 4</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ea.</td>
      </tr>
      <tr>
        <td>Body content 5</td>
        <td>Hi</td>
        <td>Body content 6</td>
      </tr>
    </tbody>
  </table>
</div>

{% endexample %}