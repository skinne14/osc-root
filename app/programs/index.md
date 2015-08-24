---
layout: full-page
title: Programs
---

{% assign sorted_programs = site.data.programs | sort: 'name' %}
<ul class="long-list">
{% for program in sorted_programs %}
  <li><a href="#{{ program.name | slugify }}">{{ program.name }}</a></li>
{% endfor %}
</ul>

{% for program in sorted_programs %}
  <section>
      <h2 class="long-list-heading" id="{{ program.name | slugify }}"><a href="{{program.url}}">{{ program.name }}</a></h2>
      <div class="long-list-content">
          {{ program.description | markdownify}}
          <a class="btn btn-default" href="{{program.url}}" role="button">Learn more »</a>
          <a href="#top">Back to top</a>
      </div>
  </section>

{% endfor %}
