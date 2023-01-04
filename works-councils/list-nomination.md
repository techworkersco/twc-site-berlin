---
layout: "page"
title: "Nominating a list of candidates"
permalink: /works-councils/nominating-candidates
---
You only have two weeks to start collecting candidates, and afterwards supporting signatures for your list proposal for Works Council elections. This website form helps you print a customizeable candidate sheet, that you can use, to start collecting the necessary support to run. After filling out the form, you will receive a printer friendly option to save your customizeable sheets

<div class="social-links">
  <label>Number of employees in your establishment
    <input id="employee_count" />
  </label><br/>
  <label>Name of your list
    <input id="list_name" />
  </label><br>
  <label>List owners (two people's names)
    <input id="list_owners" />
  </label><br>
  <button onclick="candidateTable();signaturesTable();" >Generate</button>
</div>  

<div id="works_council_size"></div>

<table id=candidate_table>
<caption>Candidates</caption>
  <tr>
    <th scope="col">Rank on list</th>
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
<table id=supporter_signature_table>
  <caption>Name of the supporteers themselves</caption>
  <tr>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Signature</th>
    <th scope="col">Minimum number of signatures</th>
  </tr>
  <tbody id="signatures_id"></tbody>
</table>
