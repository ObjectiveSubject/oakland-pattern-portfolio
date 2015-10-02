---
layout: page
category: pattern
title: Modules
---

These components are used on all or most pages of the site.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Header

{% example html %}
<div class="header-wrap">
	<div class="container">
		<header class="page-header" role="banner">
			<a href="#" class="logo-wrap">
				<img class="site-logo" src="{{ site.url }}/img/logo-v2.png" alt="City of Oakland" />
			</a>
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

## Footer

The Footer is standard across all pages

{% example html %}
<footer class="site-footer" role="contentinfo">
	<div class="container">
		<h4>Get In Touch</h4>
		<div class="grid-row">
			<div class="one-fourth column-shift">
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
		<div class="grid-row">
			<h4>Oakland Government</h4>
			<ul class="footer-links list-no-style one-third">
				<li><a href="">Animal Services</a></li>
				<li><a href="">City Clerk</a></li>
				<li><a href="">Community & Economic Development</a></li>
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
			<a href="#" class="logo-wrap">
				<img class="site-logo" src="{{ site.url }}/img/logo-v2.png" alt="City of Oakland" />
			</a>
			<div class="one-third right">
				<small class="text-muted">&copy; 2015 City of Oakland</small><br>
				<a href="#"><small>Privacy Policy</small></a>
				<a href="#"><small>Terms of Use</small></a>
			</div>
		</div>
	</div>
</footer>
{% endexample %}