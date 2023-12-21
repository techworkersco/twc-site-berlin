---
title: 🥗 Social potlock
date: 2024-01-20 19:30:00 +0200
hide_form: true
tags: null
---
We want to set the mood of 2024 by getting together around a table full of food, drinks and lovely company. Therefore, we invite you to join us for a potluck dinner at Bilgisaray

At this potluck dinner, each of us brings something to drink and eat to stimulate each other's taste buds and fill our stomachs. In order to accommodate everyone, we request all food is vegetarian. You can specify additional restriction/preferences in the form below

## Venue

[Bilgisaray, Oranienstrasse 45, Berlin](https://www.google.com/maps/place/Bilgisaray/@52.499971,13.4204474,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84e34f7d3f0db:0x4a368a3631962abc!8m2!3d52.499971!4d13.4226362) offers space for about 40 people and has a fully equipped kitchen. Thus it is possible to warm food up there. 

If you are interested in joining, please sign up using the form below. 
In case you know already what you want to bring you may indicate it in the form. 

## Schedule

* 18:00 Doors open. 
* 18:30 Setting the tables and, if necessary warming up food
* 19:30 Dinner time
* 23:30 Wrap up and clean

<div class="social-links">
  <form name="social-potluck" class="join-form" method="POST" data-netlify="true">
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
    Your dietary restrictions/preferences:
    <br>
    <div class="flex flex-row ai-ctr"> 
      <label for="vegetarian">Vegetarian food</label>  
      <input id="vegetarian" type="checkbox" name="vegetarian"/> 
    </div> 
    <div class="flex flex-row ai-ctr"> 
      <label for="vegan">Vegan food</label>  
      <input id="vegan" type="checkbox" name="vegan"/>  
    </div>
    <div class="flex flex-row ai-ctr"> 
      <label for="Halal">Halal food</label>  
      <input id="Halal" type="checkbox" name="Halal"/>  
    </div>
    <div class="flex flex-row ai-ctr"> 
      <label for="other">Other restrictions</label>  
      <input class="input-text" id="other" type="text" name="other"/>  
    </div>        
    <div class="control">
      <label for="misc">What dishes or drinks will you bring?</label>
      <input class="input-text" id="misc" type="textarea" name="misc" />
    </div>
    <div><input class="input-text" id="referrer" type="hidden" name="referrer" /></div>
    <button class="subscribe-button" type="submit">
  Register
</button>
  </form>
</div>

## Accessibility

Bilgisaray is a smoke-free environment. Children are welcome. Unfortunately the venue is not wheelchair accessible.