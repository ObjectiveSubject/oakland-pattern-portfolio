---
layout: page
category: pattern
title: Images
slug: images
---

The basic image sizes and placements across the site

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview

## Inline images

{% example html %}
<img src="http://placehold.it/604x453?text=default" alt="">
<img class="align-left" src="http://placehold.it/604x453?text=align-left" alt="">
<img class="align-right" src="http://placehold.it/604x453?text=align-right" alt="">
<img class="align-center" src="http://placehold.it/604x453?text=align-center" alt="">
{% endexample %}

## Hero image

{% example html %}
<img src="http://placehold.it/1200x400" alt="">
{% endexample %}

## Services Icons

These images are used on the Home page in the Services dropdown. They should be transparent .pngs with a white icon. The should be 50x50px total and the icon should be centered in that area.

In the context of the big menu items, they use the class `.big-menu-icon`. This positions them absolutely to the right of the menu sub-item.

{% example html %}
<div style="background-color: gray; float: left;">
	<img src="{{ site.baseurl }}/img/parking-icon.png" alt="" width="50" height="50" style="float: left;">
</div>
{% endexample %}