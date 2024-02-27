---
title: Union members campaign strategy #1
date: 2024-03-21 18:00:00 +0100
hide_form: true
---

We invite all union members in beginning (and advanced) stages of organizing their workplace to signup for our first monthly membership meeting. In order to tailor the event to your needs, we ask a couple of questions below. If you cannot attend it this time, but would like to stay in touch, you can indicate that in the form as well.

If you are not involved in a workplace campaign, do not worry, there will be other events and trainings that you can participate in. For this specific campaign, we want to foster an environment that is adapted for active and newly forming workplace campaigns. 

## Agenda 
* 18:00 - Doors Open
* 18:30 - Presentations + group exercises
* 19:00 - Breakout groups
* 19:30 - Report backs and next steps
* 20:00 - We wrap up together

## Venue

[ver.di trade union, Paula-Thiede-Ufer 10](https://www.google.com/maps/place/ver.di+-+United+Services+Union/@52.5090115,13.4254409,17z/data=!3m2!4b1!5s0x47a84e39d2b8f3e7:0xbf39cd4b173cfc1f!4m6!3m5!1s0x47b832c0c6d9ed4b:0x427604a87f0392c9!8m2!3d52.5090083!4d13.4280212!16s%2Fg%2F1ts3dq2x?entry=ttu)



## Registration
<div class="social-links">
  <form name="monthly-union-meeting" class="join-form" method="POST" data-netlify="true" action="/success">
    Fields marked with* are mandatory<br><br> 
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
      <input class="input-text" id="company" type="text" required name="company" />
    </div>
    <div class="control">
      <label for="problem-solve">Are you addressing problems with your coworkers?</label>
      <select id="problem-solve" name="problem-solve" class="subscribe-button" required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Not sure">Not sure</option>
        </select>
    </div>
    <div class="control">
      <label for="issues">What are 3 main issues your coworkers have?</label>
      <input class="input-text" id="issues" type="textarea" name="issues" required placeholder="Transparency, visa trouble, harassment etc.."/>
    </div>
        <div class="control">
      <label for="obstacles">What are some obstacles your organizing group has?</label>
      <input class="input-text" id="obstacles" type="textarea" name="obstacles" required placeholder="Strategy, language barriers, unionbusting etc.."/>
    </div>
    <div class="control">   
      <label for="union">What trade union are you a member of?</label>
      <select id="union" name="union" required class="subscribe-button">
            <option value="verdi">ver.di</option>
            <option value="IG Metall">IG Metall</option>
            <option value="none">I am not a member (yet)</option>
            <option value="Other">Other</option>
        </select>
    </div>   
    <div class="control">
      <input class="input-text" id="referrer" type="hidden" name="referrer" />
    </div>
    <button class="subscribe-button" type="submit">
      Register
    </button>
  </form>
</div>


