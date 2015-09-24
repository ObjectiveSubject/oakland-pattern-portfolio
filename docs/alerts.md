---
layout: page
title: Alerts
---

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default

Flash messages start off looking decently neutral—they're $oakland-green full-width rectangles.

{% example html %}
<div class="flash">
  <div class="container">
    <span class="flash-type">News</span>
    Flash message goes here
    <a href="#">Read more</a>
  </div>
</div>
{% endexample %}

## Variations

Add `.flash-warn` or `.flash-error` to the flash message to change the meaning and make it orange or red, respectively. Also be sure to change the `.flash-type` text to Warning or High Alert.

{% example html %}
<div class="flash flash-warn">
  <div class="container">
    <span class="flash-type">Warning</span>
    Flash message goes here
    <a href="#">Read more</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="flash flash-alert">
  <div class="container">
    <span class="flash-type">High Alert</span>
    Flash message goes here
    <a href="#">Read more</a>
  </div>
</div>
{% endexample %}
