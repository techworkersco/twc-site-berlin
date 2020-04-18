---
layout: translated
namespace: index
permalink: /
---

<style>h1, .main-wrapper h2, h3 {text-align: left; font-weight: bold;}</style>
{% t home.summary %}

## {% t home.events.title %}
{% t home.events.summary %}

{% include all_posts.html limit=7 %}
## {% t home.connect.title %}
{% t home.connect.links %}

## {% t global.accessibility.title %}
{% t global.accessibility.summary %}

## {% t global.code_of_conduct.title %}
{% t global.code_of_conduct.summary %}
