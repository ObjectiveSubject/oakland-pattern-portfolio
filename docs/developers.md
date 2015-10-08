---
layout: page
category: pattern
title: Developers
slug: developers
---

<div class="about-that">
	<p>This page contains docs about code guidelines, page layout, and high level info about the Oakland design system as it pertains to web development.</p>
</div>

---

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

Columns can be centered by adding `.centered` to a column element.

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

---

## HTML

### General formatting

* Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
* Paragraphs of text should always be placed in a `<p>` tag. Never use multiple `<br>` tags.
* Items in list form should always be in `<ul>`, `<ol>`, or `<dl>`. Never use a set of `<div>` or `<p>`.
* Every form input that has text attached should utilize a `<label>` tag. **Especially radio or checkbox elements.**
* Even though quotes around attributes is optional, always put quotes around attributes for readability.
* Avoid writing closing tag comments, like `<!-- /.element -->`. This just adds to page load time. Plus, most editors have indentation guides and open-close tag highlighting.
* Avoid trailing slashes in self-closing elements. For example, `<br>`, `<hr>`, `<img>`, and `<input>`.
* Don't set `tabindex` manually—rely on the browser to set the order.

{% highlight html %}
<p class="line-note" data-attribute="106">
  This is my paragraph of special text.
</p>
{% endhighlight %}

### Boolean attributes

Many attributes don't require a value to be set, like `disabled` or `checked`, so don't set them.

{% highlight html %}
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
{% endhighlight %}

For more information, [read the WhatWG section](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes).

### Lean markup

Whenever possible, avoid superfluous parent elements when writing HTML. Many times this requires iteration and refactoring, but produces less HTML. For example:

{% highlight html %}
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
{% endhighlight %}

### Forms

* Lean towards radio or checkbox lists instead of select menus.
* Wrap radio and checkbox inputs and their text in `<label>`s. No need for `for` attributes here—the wrapping automatically associates the two.
* Form buttons should always include an explicit `type`. Use primary buttons for the `type="submit"` button and regular buttons for `type="button"`.
* The primary form button must come first in the DOM, especially for forms with multiple submit buttons. The visual order should be preserved with `float: right;` on each button.

### Tables

Make use of `<thead>`, `<tfoot>`, `<tbody>`, and `<th>` tags (and `scope` attribute) when appropriate. (Note: `<tfoot>` goes above `<tbody>` for speed reasons. You want the browser to load the footer before a table full of data.)

{% highlight html %}
<table summary="This is a chart of invoices for 2011.">
  <thead>
    <tr>
      <th scope="col">Table header 1</th>
      <th scope="col">Table header 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Table footer 1</td>
      <td>Table footer 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Table data 1</td>
      <td>Table data 2</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

---

## SCSS

### Spacing

* Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
* Put spaces after `:` in property declarations.
* Put spaces before `{` in rule declarations.
* Put line breaks between rulesets.
* When grouping selectors, keep individual selectors to a single line.
* Place closing braces of declaration blocks on a new line.
* Each declaration should appear on its own line for more accurate error reporting.

### Formatting

* Use hex color codes `#000` unless using `rgba()` in raw CSS (SCSS' `rgba()` function is overloaded to accept hex colors as a param, e.g., `rgba(#000, .5)`).
* Use `//` for comment blocks (instead of `/* */`).
* Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.

### Misc

As a rule of thumb, avoid unnecessary nesting in SCSS. At most, aim for three levels. If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).

### Examples

Here are some good examples that apply the above guidelines:

{% highlight scss %}
// Example of good basic formatting practices
.styleguide-format {
  color: #000;
  background-color: rgba(0, 0, 0, .5);
  border: 1px solid #0f0;
}

// Example of individual selectors getting their own lines (for error reporting)
.multiple,
.classes,
.get-new-lines {
  display: block;
}

// Avoid unnecessary shorthand declarations
.not-so-good {
  margin: 0 0 20px;
}
.good {
  margin-bottom: 20px;
}
{% endhighlight %}

---

## Pixels vs. ems vs. rems

We use pixels to establish the base font-size for small, large and x-large breakpoints. We then use rems for everything else so that things scale up or down proportionately.

We use the grunt task [pixrem](https://github.com/robwierzbowski/grunt-pixrem) to generate pixel fallbacks for rem units to support IE8.

---

## Specificity (classes vs. ids)

Elements that occur **exactly once** inside a page should use IDs, otherwise, use classes. When in doubt, use a class name.

* **Good** candidates for ids: header, footer, modal popups.
* **Bad** candidates for ids: navigation, item listings, item view pages (ex: issue view).

When styling a component, start with an element + class namespace (prefer class names over ids),  prefer direct descendant selectors by default, and use as little specificity as possible. Here is a good example:

{% highlight html %}
<ul class="category-list">
  <li class="item">Category 1</li>
  <li class="item">Category 2</li>
  <li class="item">Category 3</li>
</ul>
{% endhighlight %}

{% highlight scss %}
.category-list { // element + class namespace

  // Direct descendant selector > for list items
  > li {
    list-style-type: disc;
  }

  // Minimal specificity for all links
  a {
    color: #f00;
  }
}
{% endhighlight %}

### CSS Specificity guidelines

* If you must use an id selector (`#selector`) make sure that you have no more than *one* in your rule declaration. A rule like `#header .search #quicksearch { ... }` is considered harmful.
* When modifying an existing element for a specific use, try to use specific class names. Instead of `.listings-layout.bigger` use rules like `.listings-layout.listings-bigger`. Think about `ack/grep`ing your code in the future.
* The class names `disabled`, `mousedown`, `danger`, `hover`, `selected`, and `active` should *always* be namespaced by a class (`button.selected` is a good example).

---

## HTML5 doctype

The Oakland site makes use of certain HTML elements and CSS properties that **require** the use of the HTML5 doctype. Include it at the beginning of all your pages.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

---

## Box-sizing

We reset `box-sizing` to `border-box` for every element in Primer. This allows us to more easily assign widths to elements that also have `padding` and `border`s.

---

## Built on Normalize

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices.

---

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

---

## Floats

Quickly float something to the left or right, and clear them later.

{% example html %}
<div class="clearfix">
  <code class="left">.left</code>
  <code class="right">.right</code>
</div>
{% endexample %}

---

## Centering content

Easily center **block level content** if it's not taking up the full width of the parent. Can be used on grid columns or any other elements.

{% example html %}
<nav class="menu centered one-third">
  <a class="menu-item" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>
{% endexample %}

---

## Text alignment

Change the `text-align` on elements with a class.

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-center">Center aligned text.</p>
{% endexample %}

---

## Muted link

When you need a hyperlink to not be `$oakland-green` or the current department color, use a `.muted-link`.

{% example html %}
Here is some example text. <a class="muted-link" href="#">And a muted link.</a>
{% endexample %}
