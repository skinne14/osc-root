---
layout: full-page
title: Open Access Liaisons
breadcrumbs: true
---

Open Access Liaisons provide support to schools and research centers that have adopted open access policies. They seek out and process deposits into [DASH](http://dash/harvard.edu/), Harvard's open-access repository, and assist faculty with questions about the policy and its implementation.

<ul class="long-list">
    {% for org in site.policies %}
        {% assign liaisons = site.data.liaisons | where: "liaison-to", org.abbr %}

        {% if liaisons != empty %}
        <li><a href="{{site.baseurl}}/about/liaisons#{{org.abbr}}">{{org.org}}</a></li>
        {% endif %}
    
    {% endfor %}
</ul>

{% for org in site.policies %}
    
{% assign liaisons = site.data.liaisons | where: "liaison-to", org.abbr %}

{% if liaisons != empty %}
{% for person in liaisons %}

<h2 id="{{org.abbr}}" class="long-list-heading">{{org.org}}</h2>
<div class="long-list-content address">
<h3> {{person.name}} </h3>
<p> {{person.title}} </p>
<p> {{person.location}} </p>
<p><a href="mailto:{{person.email}}">{{person.email}}</a></p>
<p><a href="tel:+1{{person.phone | remove: "-"}}">{{person.phone}}</a></p>
<a href="#top">Back to top</a>
</div>
{% endfor %}
{% endif %}

{% endfor %}
