---
layout: "page"
title: "Nominating a list of candidates"
permalink: /works-councils/nominating-candidates
---
As soon as the Works Council election date is announced, any employee interested in running only has two weeks to prepare list proposal of candidates and afterwards collect supporting signatures.
<br>This website form helps you print a customizeable candidate sheet, that you can use, to start collecting the necessary support to run. After filling out the form, you will receive a printer friendly option to save your customisable sheets. This is not the only way to do it, but it is a model template.

<div class="social-links">
  <div class="control">
    <label for="employee_count">Number of employees in your establishment</label>
    <input id="employee_count" type="number" min="1" required/>
  </div>
  <div class="control">
    <label for="list_name">Name of your list</label>
    <input id="list_name"/>
  </div>
  <div class="control">
    <label for="candidate_count">If you know <b>exact</b> number of candidates for your list</label>
    <input id="candidate_count" type="number" min="1"/>
  </div>
  <div class="control">
    <label for="list_owners">List owners (two people's names, comma separated)</label>
    <input id="list_owners" />
  </div>
  <button class="submit subscribe-button"       onclick="handleTemplateGeneratorFormSubmit()" >Generate
  </button>
  <button class="submit subscribe-button" onclick="handleTemplateGeneratorExampleFormSubmit()" >Generate random example
  </button>
</div>

<div id="works_council_size"></div>

## List of candidates
<div class="page-break">
  <table id=candidate_table>
  <caption>List of Candidates</caption>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Job title</th>
      <th scope="col">Signature</th>
    </tr>
    <tbody id="candidates_id"></tbody>
  </table>
</div>
<table id="signature_candidate_table">
  <caption>The list of ranked candidates that is presented to co-workers in order for them to decide whether to sign with their supporting signature or not. An employee can only support one list proposal. For small workplaces, signature collection is not necessary.</caption>
  <tr>
    <th scope="col">Rank</th>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Date of birth</th>
    <th scope="col">Gender</th>
    <th scope="col">Job title</th>
  </tr>
  <tbody id="signatures_candidate_id"></tbody>
</table>
<table id="supporter_signature_table">
  <tr>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Signature</th>
    <th scope="col">Minimum number of signatures</th>
  </tr>
  <tbody id="signatures_id"></tbody>
</table>
