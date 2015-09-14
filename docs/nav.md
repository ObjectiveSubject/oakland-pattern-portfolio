---
layout: page
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

## Breadcrumbs

Place these at the top of interior pages to help orient the user and give them easy access to previous pages.

{% example html %}
<nav class="breadcrumbs">
  <a href="#">Home</a>
  <a href="#">Breadcrumb</a>
  <a href="#">Page level 1</a>
  <span>Current Page Title</span>
</nav>
{% endexample %}

## Prev/Next Links

{% example html %}
<h3>Default Color Example</h3>
<footer class="content-footer" style="background-image: url(../img/repeat-demo.jpg);">
  <div class="previous-next-links container clearfix">
    <a class="prev-link" href="#">Back to previous page
      <br>
      <small>Name of the Page</small>
    </a>
    <a class="next-link" href="#">Forward to next page
      <br>
      <small>Name of the Page</small>
    </a>
  </div>
</footer>
<h3>Transportation Color Example</h3>
<footer class="content-footer transportation" style="background-image: url(../img/repeat-demo.jpg);">
  <div class="previous-next-links container clearfix">
    <a class="prev-link" href="#">Back to previous page
      <br>
      <small>Name of the Page</small>
    </a>
    <a class="next-link" href="#">Forward to next page
      <br>
      <small>Name of the Page</small>
    </a>
  </div>
</footer>
<h3>Public Works Color Example</h3>
<footer class="content-footer public-works" style="background-image: url(../img/repeat-demo.jpg);">
  <div class="previous-next-links container clearfix">
    <a class="prev-link" href="#">Back to previous page
      <br>
      <small>Name of the Page</small>
    </a>
    <a class="next-link" href="#">Forward to next page
      <br>
      <small>Name of the Page</small>
    </a>
  </div>
</footer>
{% endexample%}
