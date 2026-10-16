---
layout: "page"
title: "Works Council Survey"
permalink: /works-councils/survey
---
# {{page.title}}

From 2019-Present, Berlin Tech Workers Coalition supported <b>40 different workplaces</b> in establishing Works Councils. 

We want to compile and publish more comprehensive data about companies, both those we supported and any other tech companies that formed in Berlin in recent decade. This data will by our Works Council lawyer [Daniel Weidmann](https://dka-kanzlei.de/weidmann.html), who supported us since our first [joint-training in 2020](https://techworkersberlin.com/events/16).  

## Disclaimer

There is no legal risk in sharing such information. They do not constitute business secrets and can be freely shared with the public. If you have any concerns, contact us hello@techworkersberlin.com. 

## Survey form 
<div class="social-links">
  <form name="woco-survey" class="join-form" method="POST" data-netlify="true">
    <div class="control">
      <label for="workplace">Name of your workplace</label>
      <input 
        class="input-text" 
        id="workplace" 
        type="text" 
        required
        placeholder="Berlin HelloFresh SE, Thoughts Berlin etc.." 
        name="workplace" />
    </div>
    <div class="control">
      <label for="election-date">When was your Works Councils established?</label>
      <input
        class="input-text"
        id="election-date"
        type="date"
        required
        name="election-date"
      />
    </div>
     <div class="control">
      <label for="workplace-size">Number of employees represented by works council at time of election</label>
      <input
        class="input-text"
        id="workplace-size"
        type="number"
        min=0
        max=10000
        value=0
        required
        name="workplace-size"
      />
    </div>       
    <div class="control">
      <label for="email">{% t connect.email %} (optional)</label>
      <input
        class="input-text"
        id="email"
        type="email"
        name="email"
        placeholder="max@techworkersberlin.org"
      />
    </div>
    <div class="control">
      <label for="misc">Anything else you want to share?</label>
      <input class="input-text" id="misc" type="textarea" name="misc" />
    </div>
    <div><input class="input-text" id="referrer" type="hidden" name="referrer" /></div>
    <button class="subscribe-button" type="submit">
  Submit
</button>
  </form>
</div>
