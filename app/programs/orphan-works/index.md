---
layout: right-inner-sidebar
sidebar: peter
breadcrumbs: true
title: Orphan-Works Project
---

This is a 2015-2016 project to identify no-risk or low-risk strategies for digitizing orphan works for open access, under US copyright law, giving special attention to strategies that do not depend on fair use.

<hr>

{% for post in site.categories["orphan-works"] limit:1 %}
## Latest News
<section class="first-post">
    <heading>
    <h3>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h3>
    <p class="policy-adoption"> {{ post.date | date: "%B %-d, %Y" }}</p>
    </heading>
    {{ post.excerpt | markdownify }}
    <a class="btn btn-default" href="{{ post.url | prepend: site.baseurl }}" role="button">Read more »</a>
{% endfor %}
</section>

<hr>

## Older Posts
<ul class="post-list">
{% for post in site.categories["orphan-works"] offset: 1 %}
  <li>
    <h3>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h3>
    <p class="policy-adoption"> {{ post.date | date: "%B %-d, %Y" }}</p>
  </li>
{% endfor %}
</ul>
