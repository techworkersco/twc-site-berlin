---
layout: page
permalink: /learning
title: Berlin Learning Group
---
<h1>{{page.title}}</h1>
<ul
  class="list -no-list-style l-stack -vertical"
  style="--stack-spacing: 1.5rem"
  role="list">
  {% assign sorted_posts = site.events | sort: 'date' | reverse %}
  {% for post in sorted_posts %}
  {% if post.tags contains 'learning' %}
    <li>
      <article class="event-card">
        <img
          class="event-card__icon"
          src="/assets/icons/read.svg"
          alt="Learning">
        <div
          class="event-card__info-column l-stack -vertical"
          style="--stack-spacing: 0.25rem">
          <div class="aside event-card__date" >
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%A, %d %B, %R' }}</time>
          </div>
          <h2 class="event-card__title ">
            <a hreflang="{{post.lang}}-DE" href="{{ post.url }}" class="event-card__link">{{ post.title }}</a>
          </h2>
        </div>
      </article>
    </li>
  {% endif %}
  {% endfor %}
</ul>
