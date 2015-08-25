---
layout: full-page
breadcrumbs: true
title: OSC Staff
---

We are part of HL Collections. We work with our [Advisory Committee]({{site.baseurl}}/about/committee/), [Liaisons]({{site.baseurl}}/about/liaisons), [Copyright First Responders]({{site.baseurl}}/programs/copyright/first-responders), [Open Access Fellows]({{site.baseurl}}/about/fellows), and [Special Advisors]({{site.baseurl}}/about/staff/#special-advisors). Shout out to anyone else we should mention.

<ul class="long-list">
    {% for person in site.data.staff %}
    <li><a href="{{site.baseurl}}/about/staff/#{{person.name | slugify }}">{{person.name}}</a></li>
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
