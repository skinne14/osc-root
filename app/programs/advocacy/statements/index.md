---
layout: full-page
breadcrumbs: true
title: Statements
---
<ul>
{% assign pages = site.pages | sort: "title" %}
{% for p in pages %}
{% if p.url contains "/statements/" and p.url != "/programs/advocacy/statements/" %}
    <li><a href="{{p.url}}">{{p.title}}</a></li>
{% endif %}
{% endfor %}
</ul>
