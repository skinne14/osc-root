---
layout: full-page
breadcrumbs: true
title: Copyright First Responders
---

This is a blurb about CFRs. Contact them. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque possimus minus vero dolor amet consectetur, praesentium quod natus dicta debitis autem dolorum nostrum eius quasi aliquid provident, quae culpa fugit?

{% assign locations = site.data.cfrs | group_by: "location" | sort: "name" %}

<ul class="long-list">
{% for location in locations %}
<li><a href="/copyright/first-responders#{{location.name | slugify}}">{{location.name}}</a></li>
{% endfor %}
</ul>

{% for location in locations %}
<h2 id="{{location.name | slugify}}" class="long-list-heading">{{location.name}}</h2>

{% for person in location.items %}
<div class="long-list-content address">
<h3> {{person.name}} </h3>
<p> {{person.title}} </p>
<p><a href="mailto:{{person.email}}">{{person.email}}</a></p>
<p><a href="tel:+1{{person.phone | remove: "-"}}">{{person.phone}}</a></p>
<a href="#top">Back to top</a>
</div>

{% endfor %}
{% endfor %}


