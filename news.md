---
layout: page
permalink: /news
---
<h1>Posts</h1>
<ul class="list">
  {% assign sorted_posts = site.news | sort: 'date' | reverse %}
  {% for post in sorted_posts %}
    <li>
      <div>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <b>{{ post.date | date: '%A, %d %B, %R' }}</b>
      </div>
    </li>
  {% endfor %}
</ul>
