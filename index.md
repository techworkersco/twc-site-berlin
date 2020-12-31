---
layout: translated
namespace: index
templateClass: tmpl-home
permalink: /
---

<section>
  {% t home.summary %}
</section>

{% unless site.lang == 'pl' %}
  <section class="bg-black" aria-labelledby="hl-blm">
    <h2 id="hl-blm">{% t home.black_lives_matter.title %}</h2>
    {% t home.black_lives_matter.summary %}
  </section>
{% endunless %}

<section class="titled-block" aria-labelledby="hl-events">
  <h2 id="hl-events">{% t home.events.title %}</h2>

  {% t home.events.summary | safe %}

  {% include events.html limit=5 %}
</section>

<section class="titled-block" aria-labelledby="hl-news">
  <h2 id="hl-news">{% t home.news.title %}</h2>
  {% include news.html limit=3 %}
</section>


<section class="titled-block" aria-labelledby="hl-links">
  <h2 id="hl-links">{% t connect.title %}</h2>
  {% include links.html %}
</section>

<section class="titled-block" aria-labelledby="hl-a11y">
  <h2 id="hl-a11y">{% t global.accessibility.title %}</h2>
  {% t global.accessibility.summary %}
</section>

<section class="titled-block" aria-labelledby="hl-coc">
  <h2 id="hl-coc">{% t global.code_of_conduct.title %}</h2>
  {% t global.code_of_conduct.summary %}

</section>
