---
languages: ["en", "de"]
layout: translated
namespace: themes
permalink: /themes
---
# Themes Directory
<ul
  class="list -no-list-style l-stack -vertical"
  style="--stack-spacing: 1.5rem"
  role="list">
  <li>
    <article class="event-card">
      <img
        class="event-card__icon"
        src="/assets/icons/start.svg"
        alt="About">
      <div
        class="event-card__info-column l-stack -vertical"
        style="--stack-spacing: 0.25rem">
        <h2 class="event-card__title ">
          <a href="/about" class="event-card__link">About</a>
        </h2>
      </div>
    </article>
  </li>
  <li>
    <article class="event-card">
      <img
        class="event-card__icon"
        src="/assets/icons/blogging.svg"
        alt="Blogging notification">
      <div
        class="event-card__info-column l-stack -vertical"
        style="--stack-spacing: 0.25rem">
        <h2 class="event-card__title ">
          <a href="/news" class="event-card__link">Blog posts</a>
        </h2>
      </div>
    </article>
  </li>
  <li>
    <article class="event-card">
      <img
        class="event-card__icon"
        src="/assets/icons/news.svg"
        alt="Newspaper">
      <div
        class="event-card__info-column l-stack -vertical"
        style="--stack-spacing: 0.25rem">
        <h2 class="event-card__title ">
          <a href="{% translate_link press_mentions %}" class="event-card__link">{% t press.mentions %}</a>
        </h2>
      </div>
    </article>
  </li>
  <li>
    <article class="event-card">
      <img
        class="event-card__icon"
        src="/assets/icons/work.svg"
        alt="Work">
      <div
        class="event-card__info-column l-stack -vertical"
        style="--stack-spacing: 0.25rem">
        <h2 class="event-card__title ">
          <a href="/sectors" class="event-card__link">Workplace Sectors</a>
        </h2>
      </div>
    </article>
  </li>
  <li>
    <article class="event-card">
      <img
        class="event-card__icon"
        src="/assets/icons/activism.svg"
        alt="activism">
      <div
        class="event-card__info-column l-stack -vertical"
        style="--stack-spacing: 0.25rem">
        <h2 class="event-card__title ">
          <a href="/social-issues" class="event-card__link">Social issues</a>
        </h2>
      </div>
    </article>
  </li>
</ul>

## {% translate connect.info %}
{% include links.html %}
## {% translate global.code_of_conduct.title %}
{% translate global.code_of_conduct.summary %}
