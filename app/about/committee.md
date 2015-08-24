---
layout: full-page
breadcrumbs: true
title: Advisory Committee
---

This is a description of what the advisory committee does. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque possimus minus vero dolor amet consectetur, praesentium quod natus dicta debitis autem dolorum nostrum eius quasi aliquid provident, quae culpa fugit?

<div class="committee">
<ul class="list-unstyled">
{% for person in site.data.committee %}
<li><span class="h4">{{person.name}}</span> <br> {{person.info}}</li>
{% endfor %}
</ul>
</div>
