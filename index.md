---
layout: translated
namespace: index
permalink: /
---

<style>h1, .main-wrapper h2, h3 {text-align: left; font-weight: bold;}</style>
{% t home.summary %}

<div class="bg-black">
  <h2>{% t home.black_lives_matter.title %}</h2>
  {% t home.black_lives_matter.summary %}
</div>
## {% t home.events.title %}
{% t home.events.summary %}
{% include events.html limit=5 %}

## {% t home.news.title %}
{% include news.html limit=3 %}

## {% t home.connect.title %}
{% t home.connect.links %}

## {% t global.accessibility.title %}
{% t global.accessibility.summary %}

## {% t global.code_of_conduct.title %}
{% t global.code_of_conduct.summary %}
