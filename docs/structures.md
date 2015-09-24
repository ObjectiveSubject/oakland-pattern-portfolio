---
layout: page
title: Structural Elements
---

These are some basic structural elements that can be added to any layout

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Divider

Dividers are made using the horizontal rule element. They can be added to any layout to separate sections. It has a 3rem bottom margin.

{% example html %}
<hr>
{% endexample %}

**Markdown**

Any of the following will produce a horizontal rule.

<pre>
  <code>
* * *

***

*****

- - -

---------------------------------------
	</code>
</pre>

## Tables

Tables can be used to present data

{% example html %}
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

{% endexample %}