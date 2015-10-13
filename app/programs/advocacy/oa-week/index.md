---
layout: full-page
breadcrumbs: true
title: Open Access Week
---
Should this even be a page on its own? (We are proud to celebrate Open Access Week every year. Here's a list of the pages we've made.) Or, should it just point to the current year's page?

We do need this html file to actually exist, for the health of Jekyll (specifically, to make sure the breadcrumbs work.) But, we can consider redirecting using .htaccess, or something else.

Hmmm.

{% assign pages = site.pages | sort: "title" | reverse %}
{% for p in pages %}
{% if p.url contains "/oa-week/" and p.url != "/programs/advocacy/oa-week/" %}
- [{{p.title}}]({{p.url}})
{% endif %}
{% endfor %}
