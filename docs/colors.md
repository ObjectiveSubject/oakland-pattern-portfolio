---
layout: page
title: Colors
---

The look and feel of our company and product relies on using a handful of specific colors that help convey meaning and purpose.

### Brand Colors

<div class="container">
<div class="swatch swatch-green">$oakland-green</div>
<div class="swatch swatch-mint">$fruitvale-mint</div>
<div class="swatch swatch-yellow">$telegraph-yellow</div>
<div class="swatch swatch-cloud">$high-cloud</div>
<div class="swatch swatch-stone">$clinton-stone</div>
<div class="swatch swatch-steel">$nimitz-steel</div>
<div class="swatch swatch-rockridge">$rockridge-gray</div>
<div class="swatch swatch-forestland">$forestland</div>
</div>

### Tertiary Colors

These tertiary colors have been carefully selected so that they go well with the Brand colors.

#### Section Colors

When applying tertiary colors to department subsections it is suggested to use the first, darker color in each group. To create a new department color theme, find the `$themes` color map in `_variables.scss`. Simply add the class name you wish to use for the new theme as the map key and a color variable as the map value.

<pre>
	<code>
		$themes: (
			public-works: $water-blue,
			transportation: $grass-valley
		);
	</code>
</pre>

Once you've added your new theme, you can add the class name you defined to the `<body>` tag on any page you want to apply that color theme to.

#### Reds
<div class="container">
	<div class="swatch swatch-deep-red">$longfellow-rosewood</div>
	<div class="swatch swatch-bright-red">$chinatown-red</div>
	<div class="swatch swatch-light-red">$melrose</div>
</div>

#### Blues
<div class="container">
	<div class="swatch swatch-deep-blue">$water-blue</div>
	<div class="swatch swatch-bright-blue">$lakeshore</div>
	<div class="swatch swatch-light-blue">$brook</div>
</div>

#### Purples
<div class="container">
	<div class="swatch swatch-deep-purple">$jack-london-purple</div>
	<div class="swatch swatch-bright-purple">$orchard-plum</div>
	<div class="swatch swatch-light-purple">$meadow-brook-thistle</div>
</div>

#### Yellows
<div class="container">
	<div class="swatch swatch-deep-yellow">$gold</div>
	<div class="swatch swatch-bright-yellow">$summer-yellow</div>
	<div class="swatch swatch-light-yellow">$allendale</div>
</div>

#### Pinks
<div class="container">
	<div class="swatch swatch-deep-pink">$allendale-wine</div>
	<div class="swatch swatch-bright-pink">$jingletown-pink</div>
	<div class="swatch swatch-light-pink">$magnolia</div>
</div>

#### Greens
<div class="container">
	<div class="swatch swatch-deep-green">$grass-valley</div>
	<div class="swatch swatch-bright-green">$liberty-green</div>
	<div class="swatch swatch-light-green">$merritt-mint</div>
</div>

#### Oranges
<div class="container">
	<div class="swatch swatch-deep-orange">$woodminster</div>
	<div class="swatch swatch-bright-orange">$golden-gate</div>
	<div class="swatch swatch-light-orange">$maple-orange</div>
</div>

#### Bluer Blues
<div class="container">
	<div class="swatch swatch-deep-bluer">$merritt-lake</div>
	<div class="swatch swatch-bright-bluer">$broadway-blue</div>
	<div class="swatch swatch-light-bluer">$sequoyah-heights</div>
</div>

### Grays

<div class="container">
<div class="swatch swatch-gray-lighter">$gray-lighter</div>
<div class="swatch swatch-gray-light">$gray-light</div>
<div class="swatch swatch-gray">$gray</div>
<div class="swatch swatch-gray-dark">$gray-dark</div>
<div class="swatch swatch-gray-darker">$gray-darker</div>
<div class="swatch swatch-black">$black</div>
<div class="swatch swatch-white">$white</div>
<div class="swatch swatch-brown">$brown</div>
</div>

### Text Colors

<div class="container">
<div class="swatch swatch-text-body">$color-text-body</div>
<div class="swatch swatch-brown">$color-text-meta</div>
<div class="swatch swatch-gray">$muted</div>
</div>