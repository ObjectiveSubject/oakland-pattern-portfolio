---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Active buttons

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

{% example html %}
<button class="btn" type="button">Button &#65515;</button>
<a class="btn" href="#" role="button">Link button &#65515;</a>
<input class="btn" type="submit" value="Submit &#65515;">
{% endexample %}

## Disabled buttons

To give a button a disabled state, add the boolean `disabled` to buttons or the class `.disabled` to links and submit inputs

{% example html %}
<button class="btn" type="button" disabled>Button &#65515;</button>
<a class="btn disabled" href="#" role="button">Link button &#65515;</a>
<input class="btn disabled" type="submit" value="Submit &#65515;">
{% endexample %}

todo: need to add javascript fallback solution to prevent click events on disabled links for older browsers