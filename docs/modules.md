---
layout: page
category: pattern
title: Modules
slug: modules
---

Modules are specialized groupings of elements that can be in various layouts. Some of them are global and should only be used once per page. Others can be used multiple times and in mulitple ways.

**Disclaimer: some modules don't display correctly inside the example containers.**

---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

---

## Header

The header is a global component that sits at the top of all pages of the Oakland site. It contains the city logo, search bar, and menu icon. It can also contain a department logo on a department page.

{% example html %}
<div class="header-wrap">
  <div class="container">
    <header class="page-header" role="banner">
      <div class="multi-logo-wrap">
        <a href="#" class="site-logo-wrap">
          <img class="site-logo logo-black" src="{{ site.url }}/img/coo-logo-black.svg" onerror="this.src='{{ site.url }}/img/coo-logo-black.png'; this.onerror=null;" alt="City of Oakland" />
        </a>
      </div>
      <div class="header-actions">
        <form role="search" class="header-search" method="get" action="">
          <label>
            <input type="text" placeholder="How can we help?" title="Search for:">
          </label>
          <span class="lnr lnr-magnifier search-icon"></span>
        </form>
        <a class="header-nav-button navicon-button x" href="#">
          <div class="navicon"></div>
        </a>
      </div>
    </header>
  </div>
</div>
{% endexample %}

The header is 'sticky' on medium to large screens. This means it will stay affixed to the top of the page as the user scrolls.

This behavior is accomplished by wrapping the header markup above in a div called `.sticky-menu`.

Because this wrapper is a fixed position element, **it should always be followed by an empty div called `.sticky-placeholder`**. This will preserve the height of the header and prevent the rest of the content from sliding up behind it.

{% example html %}
<div class="sticky-menu">
	<!-- header markup -->
</div>

<div class="sticky-placeholder"></div>
{% endexample %}

---

## Footer

The Footer is standard across all pages

{% example html %}
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <h4>Get In Touch</h4>
    <div class="grid-row">
      <div class="one-fourth">
        <strong>Call 3-1-1 from within the City</strong><br>
        TTY service is also available by dialing (212) 504-4115.
      </div>
      <div class="one-fourth column-shift">
        <strong>Contact Mayor Libby Schaaf</strong><br>
        You may contact Mayor Libby Schaaf by postal mail, phone, or submitting an online message.
      </div>
      <div class="one-fourth column-shift">
        <strong>Provide Feedback</strong><br>
        OaklandCA.gov invites you to leave your comments about our Web site.
      </div>
    </div>
    <hr>
    <h4>Oakland Government</h4>
    <div class="grid-row">
      <ul class="footer-links list-no-style one-third">
        <li><a href="">Animal Services</a></li>
        <li><a href="">City Clerk</a></li>
        <li><a href="">Community &amp; Economic Development</a></li>
        <li><a href="">Finance</a></li>
        <li><a href="">Fire Department</a></li>
      </ul>
      <ul class="footer-links list-no-style one-third">
        <li><a href="">Housing &amp; Community Development</a></li>
        <li><a href="">Human resources Management</a></li>
        <li><a href="">Human Services</a></li>
        <li><a href="">Information Technology</a></li>
        <li><a href="">Parks &amp; Recreation</a></li>
      </ul>
      <ul class="footer-links list-no-style one-third">
        <li><a href="">Planning &amp; Building</a></li>
        <li><a href="">Police Department</a></li>
        <li><a href="">Public Library</a></li>
        <li><a href="">Public Works</a></li>
      </ul>
    </div>
    <hr>
    <div class="footer-omega">
      <div class="one-third right column-last">
        <small>&copy; 2015 City of Oakland</small><br>
        <a href="#"><small>Privacy Policy</small></a>
        <a href="#"><small>Terms of Use</small></a>
      </div>
      <a href="#" class="logo-wrap">
        <img class="site-logo" src="{{ site.url }}/img/logo-v2.png" alt="City of Oakland" />
      </a>
    </div>
  </div>
</footer>
{% endexample %}

---

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
<div class="container default">
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

---

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

---

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

---

## Post excerpts

These post excerpts can be placed in any kind of layout. You can simply add a layout class to `.post-excerpt` elements to control their size and position.

{% example html %}
<div class="container">
	<div class="post-excerpt">
		<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
		<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
		<p>The City of Oakland will mark the start of a new planning process for Downtown Oakland with a community kick-oﬀ event on Thursday, September 3, 2015. “Plan Downtown” will help guide the future development of Oakland’s urban core. The Speciﬁc Plan will focus on making it easier and more attractive to walk, bike, shop, work and live in Downtown Oakland.</p>
	</div>
	<div class="post-excerpt">
		<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
		<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
	</div>
	<div class="post-excerpt">
		<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
		<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
		<p>The City of Oakland will mark the start of a new planning process for Downtown Oakland with a community kick-oﬀ event on Thursday, September 3, 2015. “Plan Downtown” will help guide the future development of Oakland’s urban core. The Speciﬁc Plan will focus on making it easier and more attractive to walk, bike, shop, work and live in Downtown Oakland.</p>
	</div>
</div>
{% endexample %}

### Excerpts with images + grid

{% example html %}
<div class="container">
	<div class="post-excerpt">
		<img src="http://placehold.it/604x453" alt="">
		<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
		<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
		<p>The City of Oakland will mark the start of a new planning process for Downtown Oakland with a community kick-oﬀ event on Thursday, September 3, 2015. “Plan Downtown” will help guide the future development of Oakland’s urban core. The Speciﬁc Plan will focus on making it easier and more attractive to walk, bike, shop, work and live in Downtown Oakland.</p>
	</div>
	<div class="grid-row">
		<div class="post-excerpt one-third">
			<img src="http://placehold.it/604x453" alt="">
			<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
			<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
		</div>
		<div class="post-excerpt one-third">
			<img src="http://placehold.it/604x453" alt="">
			<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
			<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
			<p>The City of Oakland will mark the start of a new planning process for Downtown Oakland with a community kick-oﬀ event on Thursday, September 3, 2015&hellip;</p>
		</div>
		<div class="post-excerpt one-third">
			<img src="http://placehold.it/604x453" alt="">
			<p class="post-data"><a href="#">Category</a> - <time datetime="">September 9, 2015</time></p>
			<h3><a href="#">City of Oakland Kicks off "Plan Downtown"</a></h3>
			<p>The City of Oakland will mark the start of a new planning process for Downtown Oakland with a community kick-oﬀ event on Thursday&hellip;</p>
		</div>
	</div>

</div>
{% endexample %}