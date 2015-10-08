---
layout: page
category: pattern
title: Forms
slug: forms
---

Style individual form controls and utilize common layouts.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview

- We reset several elements' default styles for cross browser consistency and easier manipulation later. This includes `<fieldset>`s, WebKit validation bubbles, and most textual `<input>`s.
- Specific types of textual `<input>`s are styled automatically, but `.form-control` is available should you need it.
- Always declare a `type` on your `<button>`s.
- Form layouts rely on form groups.

## Example form

Form controls in Primer currently have no basic layout specified (this is by design). You'll need to use `<fieldset>`s, `<div>`s, or other elements and styles to rearrange them.

{% example html %}
<form>
  <label for="first-name">
    Name<br>
    Example Text
    <input type="text" id="first-name">
  </label>
  <a href="#" class="form-info">Where can I find more info about this?</a>

  <label for="email-address">
    Email address
    <input type="email" id="email-address">
  </label>

  <label for="user-comment">
    Enter your comments here
    <textarea name="user-comment" id="user-comment" cols="30" rows="10"></textarea>
  </label>

  <div class="form-group">
    <p>Do you live in Oakland, CA?</p>
    <label for="yep" class="form-radio">
      <input type="radio" id="yep" name="yepnope">Yep
    </label>
    <label for="nope" class="form-radio">
      <input type="radio" id="nope" name="yepnope">Nope
    </label>
  </div>

  <div class="form-group">
    <label for="remember-me" class="form-checkbox">
      <input type="checkbox" id="remember-me">Remember me
    </label>
  </div>

  <button class="btn arrow-right" type="submit">Submit</button>
</form>
{% endexample %}

<!-- ## Form contrast

Textual form controls have a white background by default. You can change this to a light gray with `.input-contrast`.

{% example html %}
<form>
  <input type="text" placeholder="Default input">
  <input class="input-contrast" type="text" placeholder="Input with contrast">
</form>
{% endexample %}

## Selects

Primer adds light `height` and `vertical-align` styles to `<select>`s for all browsers to render them consistently with textual inputs.

{% example html %}
<form>
  <select>
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>
</form>
{% endexample %}

### Custom

Custom `<select>`s are also available—just add `.select`. **Only available in latest WebKit, Firefox, and IE browsers.**

{% example html %}
<form>
  <select class="select">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>
</form>
{% endexample %}

### Small

Use the `.select-sm` class to resize both default and custom `<select>`s to match the size of [our small buttons](/buttons/#default-buttons).

{% example html %}
<select class="select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>

<select class="select select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>
{% endexample %}

## Form groups

{% example html %}
<form>
  <dl class="form">
    <dt><label>Example Text</label></dt>
    <dd><input type="text" value="Example Value"></dd>
  </dl>

  <dl class="form">
    <dt><label>Example Label</label></dt>
    <dd>
      <select class="select">
        <option>Choose an option</option>
        <option>Git</option>
        <option>Subversion</option>
        <option>Social Coding</option>
        <option>Beets</option>
        <option>Bears</option>
        <option>Battlestar Galactica</option>
      </select>
    </dd>
  </dl>
</form>
{% endexample %}

## Form group validation

Convey errors and warnings for form groups. Add the appropriate class—either `.errored` or `.warn`—to the `<dl class="form">` to start. Then, house your error messaging in an additional `<dd>` with either `.error` or `.warning`.

{% example html %}
<form>
  <dl class="form errored">
    <dt><label>Example Text</label></dt>
    <dd><input type="text" value="Example Value"></dd>
    <dd class="error">This example input has an error.</dd>
  </dl>
  <br>
  <dl class="form warn">
    <dt><label>Example Text</label></dt>
    <dd><input type="text" value="Example Value"></dd>
    <dd class="warning">This example input has a warning.</dd>
  </dl>
</form>
{% endexample %}

## Checkboxes and radios

Utilities to spice up the alignment and styling of checkbox and radio controls.

{% example html %}
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      Available for hire
    </label>
    <p class="note">
      This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
    </p>
  </div>
</form>
{% endexample %}

You may also add emphasis to the label:

{% example html %}
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      <em class="highlight">Available for hire</em>
    </label>
  </div>
</form>
{% endexample %}

## Input group

Attached an input and button to one another.

{% example html %}
<form>
  <div class="input-group">
    <input type="text" placeholder="Username">
    <span class="input-group-button">
      <button class="btn">
        <span class="octicon octicon-clippy"></span>
      </button>
    </span>
  </div>
</form>
{% endexample %}

## Form actions

Align buttons to the right—via `float: right` on the buttons—in forms with `.form-actions`. The floats are automatically cleared for you.

{% example html %}
<div class="form-actions">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>
{% endexample %} -->
