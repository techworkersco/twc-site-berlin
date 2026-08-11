---
layout: translated
permalink: /telegram-outreach
namespace: join-telegram
---
# 👋 Hello again
Berlin Tech Workers Coalition has grown a lot over the past 5 years. Reflecting back, we want to know what our members are up to and how we can empower our members to change the tech industry.

The form below is designed to better understand what topics are important for members of our internal Telegram group. In addition we update personal info. 

<div class="social-links">
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://t.me/TechWorkersBer"
    >
    <img class="social-icon telegram" src="/assets/icons/telegram.svg" alt="Telegram">
    Telegram <span style="color:black">{ </span>public</a><a
  rel="noopener noreferrer"
  target="_blank"
  href= "https://t.me/+-7rD_lN0tP1kNjNi"
  ><span style="color:black"> | </span>private <span style="color:black">}</span></a>
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://twitter.com/TechWorkersBER"
    >
    <img class="social-icon twitter" src="/assets/icons/twitter.svg" alt="Twitter">
    Twitter</a
  >
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://instagram.com/techworkersber"
    >
    <img class="social-icon instagram" src="/assets/icons/instagram.svg" alt="Instagram">
    Instagram</a
  >
</div>
<div class="social-links">
<form name="telegram-outreach" class="join-form" method="POST" action="/success" data-netlify="true">
    <div class="control">
    <label for="name">{% t connect.name %}</label>
    <input class="input-text" id="name" type="text" required name="name" />
    </div>
    <div class="control">
    <label for="email">{% t connect.email %}</label>
    <input
        class="input-text"
        id="email"
        type="email"
        required
        name="email"
    />
    </div>
    <div class="control">
    <label for="company">{% t connect.company %}</label>
    <input class="input-text" required id="company" type="text" name="company" />
    </div>
    <div>
    <input class="input-text" id="referrer" type="hidden" name="referrer" />
    </div>
    <div class="control">
        <label for="telegram_display">Your Telegram display name</label>
        <input
        class="input-text"
        id="telegram_display"
        type="text"
        required
        name="telegram_display"
        placeholder="Kim"
        />
    </div>
    <div class="control">
        <label for="telegram">Your Telegram Handle or Phone Number</label>
        <input
        class="input-text"
        id="telegram"
        type="text"
        required
        name="telegram"
        placeholder="@Kim123 or +49 XXX XXX XXXX"
        />
    </div>
    <div class="control">
        <label for="how_did_hear">What topics do you want to focus on within TWC?</label>
        <input
        class="input-text"
        id="how_did_hear"
        type="text"
        name="how_did_hear"
        />
    </div>
      <button class="subscribe-button" type="submit">
        {% t connect.subscribe %}
      </button>
    </form>
  </div>
