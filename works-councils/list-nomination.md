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
  <button onclick="candidateTable();supportersTable();" >Generate</button>
</div>  

<div id="works_council_size"></div>

<table id=candidate_table>
<caption></caption>
  <tr>
    <th scope="col">Rank on list</th>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Date of birth</th>
    <th scope="col">Gender</th>
    <th scope="col">Job title</th>
  </tr>
  <tbody id="tableCandidateBody">

  </tbody>
</table>

<table id=supporter_table>
  <tr>
    <th scope="col">Rank on list</th>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Date of birth</th>
    <th scope="col">Gender</th>
    <th scope="col">Job title</th>
  </tr>
  <tr>
    <th scope="col">Rank on list</th>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Date of birth</th>
    <th scope="col">Gender</th>
    <th scope="col">Job title</th>
  </tr>
  <tbody id="tableBody">

  </tbody>
</table>
