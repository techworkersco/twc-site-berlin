---
layout: page
permalink: /learning
title: Berlin Learning Group
---
<h1>{{page.title}}</h1>
<ul class="list">
  {% assign sorted_posts = site.events | sort: 'date' | reverse %}
  {% for post in sorted_posts %}
  {% if post.tags contains 'learning' %}
    <li>
      <div>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <b>{{ post.date | date: '%A, %d %B, %R' }}</b>
      </div>
    </li>
  {% endif %}
  {% endfor %}
</ul>

<ul class="pagination">
  {% if paginator.previous_page %}
    <li>
      <a href="{{ paginator.previous_page_path }}"><span class="pagination__icon">◀</span> Previous</a>
    </li>
  {% endif %}
  {% if paginator.next_page %}
    <li>
      <a href="{{ paginator.next_page_path }}">Next <span class="pagination__icon">►</span></a>
    </li>
  {% endif %}
</ul>
