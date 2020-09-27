---
layout: translated
namespace: press_mentions
permalink: /press
permalink_de: /pressespiegel
---
# {% t press.mentions %}

{% t press.inquiry %}: press@techworkersberlin.com

<ul class=" article-list list">
  {% assign sorted_posts = site.data.press  %}
  {% for post in sorted_posts %}
    <li class="press-mention">
      <div class="article-list-item press-mention-text">
        <a href="{{post.url}}">
          <span class="article-title"><b>{{post.title}}</b></span>
          <div>
            {{post.media}} —
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
          </div>
        </a>
      </div>
    </li>
  {% endfor %}
</ul>
