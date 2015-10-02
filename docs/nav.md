---
layout: page
category: pattern
title: Navigation
---

The Oakland site uses several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Menus

<!-- A menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid columns as a parent and manually place menus in their own columns. Otherwise, apply a custom `width`. -->

{% example html %}
<div class="container">
  <div class="grid-row">
    <nav class="menu one-third">
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Emails</a>
      <a class="menu-item" href="#">Notifications</a>
    </nav>
    <nav class="menu one-third">
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Notifications</a>
    </nav>
    <nav class="menu one-third">
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Emails</a>
      <a class="menu-item" href="#">Notifications</a>
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Emails</a>
    </nav>
  </div>
</div>
{% endexample %}

### Menu item with span

You can also include a secondary bit of text in a menu item by wrapping it in a `<span>`. This will give it the global body text color and place it on its own line.

{% example html %}
<div class="container">
  <div class="grid-row">
    <div class="one-third">
      <a href="#" class="menu-item">
        A menu item
        <span>With some extra text</span>
      </a>
    </div>
  </div>
</div>
{% endexample %}

### Section menu

There is a variant of the menu that is used as the main section navigation that lives in the header of the various sections of the site.


{% example html %}
<h3>Default Color Example</h3>
<div class="docs-bg">
  <div class="grid-row">
    <nav class="section-menu one-fourth">
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Emails</a>
      <a class="menu-item" href="#">Notifications</a>
    </nav>
  </div>
</div>
<h3>Transportation Color Example</h3>
<div class="docs-bg transportation">
  <div class="grid-row">
    <nav class="section-menu one-fourth">
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Emails</a>
      <a class="menu-item" href="#">Notifications</a>
    </nav>
  </div>
</div>
<h3>Public Works Color Example</h3>
<div class="docs-bg public-works">
  <div class="grid-row">
    <nav class="section-menu one-fourth">
      <a class="menu-item" href="#">Account</a>
      <a class="menu-item" href="#">Profile</a>
      <a class="menu-item" href="#">Emails</a>
      <a class="menu-item" href="#">Notifications</a>
    </nav>
  </div>
</div>
{% endexample %}

### Big menu items

{% example html %}
<div class="container">
  <nav class="big-menu">
    <div class="menu-item">
      <a href="#">
        <h3>Big Menu Item</h3>
        <p>Info about the big item</p>
      </a>
      <div class="big-menu-group grid-row">
        <a href="#" class="one-third">Finding Parking</a>
        <a href="#" class="one-third">Pay a ticket</a>
        <a href="#" class="one-third">Apply for a Parking Permit</a>
        <a href="#" class="one-third">Disabled Parking</a>
        <a href="#" class="one-third">News and Alerts</a>
      </div>
    </div>
    <div class="menu-item">
      <a href="#">
        <h3>Big Menu Item</h3>
        <p>Info about the big item</p>
      </a>
      <div class="big-menu-group grid-row">
        <a href="#" class="one-third">Finding Parking</a>
        <a href="#" class="one-third">Pay a ticket</a>
        <a href="#" class="one-third">Apply for a Parking Permit</a>
        <a href="#" class="one-third">Disabled Parking</a>
        <a href="#" class="one-third">News and Alerts</a>
      </div>
    </div>
    <div class="menu-item">
      <a href="#">
        <h3>Big Menu Item</h3>
        <p>Info about the big item</p>
      </a>
      <div class="big-menu-group grid-row">
        <a href="#" class="one-third">Finding Parking</a>
        <a href="#" class="one-third">Pay a ticket</a>
        <a href="#" class="one-third">Apply for a Parking Permit</a>
        <a href="#" class="one-third">Disabled Parking</a>
        <a href="#" class="one-third">News and Alerts</a>
      </div>
    </div>
    <div class="menu-item">
      <a href="#">
        <h3>Big Menu Item</h3>
        <p>Info about the big item</p>
      </a>
      <div class="big-menu-group grid-row">
        <a href="#" class="one-third">Finding Parking</a>
        <a href="#" class="one-third">Pay a ticket</a>
        <a href="#" class="one-third">Apply for a Parking Permit</a>
        <a href="#" class="one-third">Disabled Parking</a>
        <a href="#" class="one-third">News and Alerts</a>
      </div>
    </div>
    <div class="menu-item">
      <a href="#">
        <h3>Big Menu Item</h3>
        <p>Info about the big item</p>
      </a>
      <div class="big-menu-group grid-row">
        <a href="#" class="one-third">Finding Parking</a>
        <a href="#" class="one-third">Pay a ticket</a>
        <a href="#" class="one-third">Apply for a Parking Permit</a>
        <a href="#" class="one-third">Disabled Parking</a>
        <a href="#" class="one-third">News and Alerts</a>
      </div>
    </div>
  </nav>
</div>
{% endexample %}

## Breadcrumbs

Place these at the top of interior pages to help orient the user and give them easy access to previous pages.

{% example html %}
<div class="container">
<nav class="breadcrumbs">
  <a href="#">Home</a>
  <a href="#">Breadcrumb</a>
  <a href="#">Page level 1</a>
  <span>Current Page Title</span>
</nav>
</div>
{% endexample %}

If placed in the regular page flow, the above example will just work. If on the other hand, you need to place the breadcrumbs inside the `.subheader`, you can wrap it in a div with class `.breadcrumb-wrap`. This acts as the container and will position it absolutely to the top of its parent.

{% example html %}
<div class="transportation">
<div class="subheader" style="height: 100px;">
<div class="breadcrumb-wrap">
  <nav class="breadcrumbs">
    <a href="#">Home</a>
    <a href="#">Breadcrumb</a>
    <a href="#">Page level 1</a>
    <span>Current Page Title</span>
  </nav>
</div>
</div>
</div>
{% endexample %}

## Prev/Next Links

{% example html %}
<h3>Default Color Example</h3>
<footer class="content-footer pager-footer">
  <div class="previous-next-links container clearfix">
    <a class="prev-link" href="#">
      <span class="lnr lnr-arrow-left"></span>
      <span class="prev-next-text">Back to previous page</span>
      <br>
      <small class="prev-next-small">Name of the Page</small>
    </a>
    <a class="next-link" href="#">
      <span class="prev-next-text">Forward to next page</span>
      <span class="lnr lnr-arrow-right"></span>
      <br>
      <small class="prev-next-small">Name of the Page</small>
    </a>  </div>
</footer>
<h3>Transportation Color Example</h3>
<footer class="content-footer pager-footer transportation">
  <div class="previous-next-links container clearfix">
    <a class="prev-link" href="#">
      <span class="lnr lnr-arrow-left"></span>
      <span class="prev-next-text">Back to previous page</span>
      <br>
      <small class="prev-next-small">Name of the Page</small>
    </a>
    <a class="next-link" href="#">
      <span class="prev-next-text">Forward to next page</span>
      <span class="lnr lnr-arrow-right"></span>
      <br>
      <small class="prev-next-small">Name of the Page</small>
    </a>  </div>
</footer>
<h3>Public Works Color Example</h3>
<footer class="content-footer pager-footer public-works">
  <div class="previous-next-links container clearfix">
    <a class="prev-link" href="#">
      <span class="lnr lnr-arrow-left"></span>
      <span class="prev-next-text">Back to previous page</span>
      <br>
      <small class="prev-next-small">Name of the Page</small>
    </a>
    <a class="next-link" href="#">
      <span class="prev-next-text">Forward to next page</span>
      <span class="lnr lnr-arrow-right"></span>
      <br>
      <small class="prev-next-small">Name of the Page</small>
    </a>
  </div>
</footer>
{% endexample%}
