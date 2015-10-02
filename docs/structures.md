---
layout: page
category: pattern
title: Structural Elements
---

<p class="about-that">These are some basic structural elements that can be added to any layout.</p>

***

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

***

## Divider

Dividers are made using the horizontal rule element. They can be added to any layout to separate sections. It has a 3rem bottom margin.

{% example html %}
<hr>
{% endexample %}

**Markdown**

Any of the following will produce a horizontal rule.

<div class="highlight-md">
<pre><code>
* * *

***

*****

- - -

---------------------------------------
</code></pre>
</div>

***

## Tables

Tables should be placed inside a `.table-wrap` element to give it a simple responsive treatment. This lets tables become longer than the viewport and have an independent horizontal scroll.

Currently there is a min-width applied to tables as a proof of concept, but **this should be updated during implementation**.

More info about table markup can be found in the [Code Guidelines]({{ site.baseurl }}/guidelines/).

{% example html %}
<div class="table-wrap" style="background: white;">
	<table>
		<thead>
		  <tr>
		    <th>Header content 1</th>
		    <th>Header content 2</th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
		    <td>Body content 1 with very very very very long text</td>
		    <td>Body content 2</td>
		  </tr>
		  <tr>
		    <td>Body content 3</td>
		    <td>Body content 4</td>
		  </tr>
		  <tr>
		    <td>Body content 5</td>
		    <td>Body content 6</td>
		  </tr>
		</tbody>
	</table>
</div>

<div class="table-wrap" style="background: white;">
	<table>
		<thead>
		  <tr>
		    <th>Header content 1</th>
		    <th>Header content 2</th>
		    <th>Header content 3</th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
		    <td>Body content 1 with very very very very long text</td>
		    <td>Body content 2</td>
		    <td>Some more content</td>
		  </tr>
		  <tr>
		    <td>Body content 3</td>
		    <td>Body content 4</td>
		    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ea.</td>
		  </tr>
		  <tr>
		    <td>Body content 5</td>
		    <td>Hi</td>
		    <td>Body content 6</td>
		  </tr>
		</tbody>
	</table>
</div>

{% endexample %}