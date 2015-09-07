---
layout: page
title: Global Components
---

These components are used on all or most pages of the site.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Header

The Header for Oakland comes in two flavors. For pages with a hero image section, the header will have a black background. For all other pages, the header will inherit the background color of the page.

**Header with hero image**

{% example html %}
<div class="header-wrap has-hero">
	<div class="container">
		<header class="page-header" role="banner">
			<a href="/" class="logo-wrap">
				<img class="site-logo" src="{{ site.url }}/img/logo-v1.png" alt="City of Oakland" />
			</a>
			<a class="header-nav-button">
				<img src="{{ site.url }}/img/hamburger-nav.png" alt="Click to open the menu" />
			</a>
		</header>
	</div>
</div>
{% endexample %}

**Header without hero image**  
This header has a transparent background and in this case shows the background color of its parent

{% example html %}
<div class="header-wrap parking">
	<div class="container">
		<header class="page-header" role="banner">
			<a href="/" class="logo-wrap">
				<img class="site-logo" src="{{ site.url }}/img/logo-v1.png" alt="City of Oakland" />
			</a>
			<a class="header-nav-button">
				<img src="{{ site.url }}/img/hamburger-nav.png" alt="Click to open the menu" />
			</a>
		</header>
	</div>
</div>
{% endexample %}

## Footer

The Footer is standard across all pages

{% example html %}
<footer class="page-footer" role="contentinfo">
	<div class="container">
		<h3>Get In Touch</h3>
		<div class="columns">
			<div class="one-third column">
				<strong>Call 3-1-1 from within the City</strong><br>
				TTY service is also available by dialing (212) 504-4115.
			</div>
			<div class="one-third column">
				<strong>Contact Mayor Libby Schaaf</strong><br>
				You may contact Mayor Libby Schaaf by postal mail, phone, or submitting an online message.
			</div>
			<div class="one-third column">
				<strong>Provide Feedback</strong><br>
				OaklandCA.gov invites you to leave your comments about our Web site.
			</div>
		</div>
		<div class="columns">
			<div class="two-thirds column">
				<h3>Oakland Government</h3>
				<ul class="footer-links list-no-style">
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
					<li><a href="">Link</a></li>
				</ul>
			</div>
			<div class="one-third column">
				<div class="columns">
					<div class="one-half column">
						<a href="/" class="logo-wrap">
							<img class="site-logo" src="{{ site.url }}/img/logo-dark.png" alt="City of Oakland" />
						</a>
						<input type="text" id="footer-search" aria-label="Search" value required="required" placeholder="Search site">
					</div>
					<div class="one-half column">
						<p><small class="text-muted">&copy; 2015 City of Oakland</small></p>
						<p><a href="#">Privacy Policy</a></p>
						<p><a href="#">Terms of Use</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
{% endexample %}

## Hero

The hero section is used on the home page to create a direct point of contact with users

{% example html %}
<div class="hero" style="background-image: url( {{ site.url }}/img/hero-1.jpg);">
	<div class="container">
		<form action="/" id="main-search" class="main-search">
			<label for="site-search">
				How can we help?
				<input type="text" id="site-search" aria-label="Search" value required="required" placeholder="Pay parking ticket">
			</label>
			<input type="submit" id="submit-search" value="Search" title="Search">
		</form>
	</div>
</div>
{% endexample %}

## Header wrap

The alternative to a hero section to include the page title and department class (for color) to the `.header-wrap` element

{% example html %}
<div class="header-wrap parking">
	<div class="container">
		<header class="page-header" role="banner">
			<a href="/" class="logo-wrap">
				<img class="site-logo" src="{{ site.url }}/img/logo-v1.png" alt="City of Oakland" />
			</a>
			<a class="header-nav-button">
				<img src="{{ site.url }}/img/hamburger-nav.png" alt="Click to open the menu" />
			</a>
		</header>
		<h1>Finding &amp; Paying for Parking</h1>
	</div>
</div>
{% endexample %}