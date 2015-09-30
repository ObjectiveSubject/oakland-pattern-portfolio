---
layout: page
title: Layout
---

Oakland's layout includes basic page containers and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it's just containers, rows, and columns.

You can find all the below styles in `_layout.scss`.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Container

Center your page's contents with a `.container`. A container can be placed inside an element like a `<header>` or any other element that should stretch to the max body width of 1200px.

{% highlight html %}
<div class="container">
  <!-- contents here -->
</div>
{% endhighlight %}

The container uses Bourbon Neat's `outer-container` mixin to define max-width, margins, columns and gutters.
It also adds padding to either side of itself and `box-sizing: content-box` to maintain the grid as designed.

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
