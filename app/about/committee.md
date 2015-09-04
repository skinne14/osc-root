---
layout: full-page
breadcrumbs: true
title: Advisory Committee
---

The Advisory Committee is a university-wide faculty group that provides the OSC with advice and expertise on specific programs and policies.

<div class="committee">
<ul class="list-unstyled">
{% for person in site.data.committee %}
<li><span class="h4">{{person.name}}</span> <br> {{person.info}}</li>
{% endfor %}
</ul>
</div>
