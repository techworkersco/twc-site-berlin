---
languages: ["en", "de"]
layout: translated
namespace: directory
permalink: /directory
---
# Directory
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
          <a href="/news" class="event-card__link">Articles</a>
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
  <li>
    <article class="event-card">
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        class="event-card__icon"
        style="enable-background:new 0 0 24 24;"
        xml:space="preserve">
        <path d="M20,3h-1V1h-2v2H7V1H5v2H4C2.9,3,2,3.9,2,5v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,21H4V8h16V21z"/>
        <text transform="matrix(1 0 0 1 5.3281 19.1641)" class="st0 st1">{{ site.events.size }}</text>
      </svg>
      <div
        class="event-card__info-column l-stack -vertical"
        style="--stack-spacing: 0.25rem">
        <h2 class="event-card__title ">
          <a href="/events" class="event-card__link">Events</a>
        </h2>
      </div>
    </article>
  </li>
</ul>

## {% translate connect.info %}
{% include links.html %}
## {% translate global.code_of_conduct.title %}
{% translate global.code_of_conduct.summary %}
