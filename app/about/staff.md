---
layout: full-page
breadcrumbs: true
title: OSC Staff
---

We are part of HL Collections. We work with our [Advisory Committee](/about/committee/), [Liaisons](/about/liaisons), [Copyright First Responders](/programs/copyright/first-responders), [Open Access Fellows](/about/fellows), and [Special Advisors](/about/staff#special-advisors). Shout out to anyone else we should mention.

<ul class="long-list">
    {% for person in site.data.staff %}
    <li><a href="/about/staff#{{person.name | slugify }}">{{person.name}}</a></li>
    {% endfor %}
</ul>

{% for person in site.data.staff %}
<h2 id="{{person.name | slugify }}" class="long-list-heading">{{person.name}}, {{person.title}}</h2>
<div class="long-list-content">{{person.bio | markdownify}}
<a href="#top">Back to top</a>
</div>
{% endfor %}


## Special Advisors

{% for person in site.data.special-advisors %}
<p id="{{person.name | slugify }}">{{person.name}}, {{person.title}}</p>    
{% endfor %}
<a href="#top">Back to top</a>
