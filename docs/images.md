---
layout: page
category: pattern
title: Images
slug: images
---

The basic image sizes and placements across the site

---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

---

## Overview

The all-purpose image size for the site is 604x453px, which is a 4:3 aspect ratio. These images will shrink fit their containers but will not stretch larger than their max size.

---

## Inline images

Inline images can be aligned left, right or center by adding an `.align-left/right/center` class. This will allow text to flow around them image (or not) while maintaining our standard gutter spacing.

{% example html %}
<div class="grid-row">
	<img src="http://placehold.it/604x453?text=default" alt="">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cupiditate natus atque deleniti cum suscipit iusto hic ipsum sint magni facere iste molestias dicta unde, esse magnam perferendis ratione! Error.</p>	
</div>
<div class="grid-row">
	<img class="align-left" src="http://placehold.it/604x453?text=align-left" alt="">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat blanditiis, numquam, magni, hic officia velit illum quas eius, officiis in amet sed itaque non! A tempora ut quibusdam exercitationem similique!</p>
</div>
<div class="grid-row">
	<img class="align-right" src="http://placehold.it/604x453?text=align-right" alt="">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, possimus illum provident. Reiciendis nobis porro laborum quasi, necessitatibus aliquam esse, illum, velit alias assumenda, doloremque mollitia ducimus autem impedit quos.</p>
</div>
<div class="grid-row">
	<img class="align-center" src="http://placehold.it/604x453?text=align-center" alt="">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum neque suscipit sint officiis, quibusdam cumque nam necessitatibus, soluta fugit tenetur nihil, voluptas accusamus eligendi, sed atque alias amet optio error?</p>	
</div>
{% endexample %}

---

## Hero image

This image type can be added to the home page `section.subheader` as a background image. These should not be added to other pages in the interest of page speed.

{% example html %}
<img src="http://placehold.it/1200x400" alt="hero image">
{% endexample %}

---

## Services Icons

These images are used on the Home page in the Services dropdown. They should be transparent .pngs with a white icon. The should be 50x50px total and the icon should be centered in that area.

In the context of the big menu items, they use the class `.big-menu-icon`. This positions them absolutely to the right of the menu sub-item.

{% example html %}
<div style="background-color: gray; float: left;">
	<img src="{{ site.baseurl }}/img/parking-icon.png" alt="" width="50" height="50" style="float: left;">
</div>
{% endexample %}