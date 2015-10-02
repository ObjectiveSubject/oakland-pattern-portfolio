---
layout: page
category: pattern
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Primary buttons

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

{% example html %}
<button class="btn" type="button">Button</button>
<a class="btn" href="#" role="button">Link button</a>
{% endexample %}

## Buttons with icons

### Right arrow button

{% example html %}
<button class="btn" type="button">Button <span class="lnr lnr-arrow-right"></span></button>
<a class="btn" href="#" role="button">Link button <span class="lnr lnr-arrow-right"></span></a>
{% endexample %}

### Left arrow button

{% example html %}
<button class="btn" type="button"><span class="lnr lnr-arrow-left"></span> Button</button>
<a class="btn" href="#" role="button"><span class="lnr lnr-arrow-left"></span> Link button</a>
{% endexample %}

## Secondary buttons

For these inverted-style buttons, simply add the `.btn-secondary` class to any `.btn` element

{% example html %}
<button class="btn btn-secondary" type="button">Button</button>
<a class="btn btn-secondary" href="#" role="button">Link button</a>
<button class="btn btn-secondary" type="button">Button <span class="lnr lnr-arrow-right"></span></button>
<a class="btn btn-secondary" href="#" role="button">Link button <span class="lnr lnr-arrow-right"></span></a>
<button class="btn btn-secondary" type="button"><span class="lnr lnr-arrow-left"></span> Button</button>
<a class="btn btn-secondary" href="#" role="button"><span class="lnr lnr-arrow-left"></span> Link button</a>
{% endexample %}

## Disabled buttons

To give a button a disabled state, add the boolean `disabled` to buttons or the class `.disabled` to links

{% example html %}
<button class="btn" type="button" disabled>Button <span class="lnr lnr-arrow-right"></span></button>
<a class="btn disabled" href="#" role="button">Link button <span class="lnr lnr-arrow-right"></span></a>
{% endexample %}

todo: need to add javascript fallback solution to prevent click events on disabled links for older browsers

## Block Buttons

{% example html %}
<button class="btn btn-block" type="button">Button</button>
<a class="btn btn-block" href="#" role="button">Link button</a>
<button class="btn btn-block" type="button">Button <span class="lnr lnr-arrow-right"></span></button>
<a class="btn btn-block" href="#" role="button"><span class="lnr lnr-arrow-left"></span> Link button</a>
<button class="btn btn-block" type="button" disabled>Button</button>
<a class="btn btn-block disabled" href="#" role="button">Link button</a>
{% endexample %}

