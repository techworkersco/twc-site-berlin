---
layout: "page"
title: "Nominating a list of candidates"
permalink: /works-councils/nominating-candidates
---
As soon as the Works Council election date is announced, any employee interested in running only has two weeks to prepare list proposal of candidates and afterwards collect supporting signatures.
<br>This website form helps you print a customizeable candidate sheet, that you can use, to start collecting the necessary support to run. After filling out the form, you will receive a printer friendly option to save your customisable sheets. This is not the only way to do it, but it is a model template.

<div class="social-links">
  <label>Number of employees in your establishment
    <input id="employee_count" type="number" min="1" required/>
  </label><br/>
  <label>Name of your list
    <input id="list_name"/>
  </label><br>
  <label>If you know <b>exact</b> number of candidates for your list
    <input id="candidate_count" type="number" min="1"/>
  </label><br>
  <label>List owners (two people's names, comma separated)
    <input id="list_owners" />
  </label><br>
  <button onclick="handleTemplateGeneratorFormSubmit()" >Generate</button>
</div>  

<div id="works_council_size"></div>

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
<br>
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

<script>
  document.getElementById('employee_count').value = localStorage.getItem('election.employee_count');
  document.getElementById('candidate_count').value = localStorage.getItem('election.candidate_count');
  document.getElementById('list_name').value = localStorage.getItem('election.list_name');
  document.getElementById('list_owners').value = localStorage.getItem('election.list_owners');
</script>
