var element = document.getElementById('nav');
var trigger = document.getElementById('navBtn');

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('hide');
});

function candidateTable() {
  const tableBody = document.querySelector("#tableCandidateBody");
  const caption = document.querySelector("#candidate_table > caption");
  let employeeCount = parseInt(document.getElementById('employee_count').value);
  let list_owners = document.getElementById('list_owners').value
  let list_name = document.getElementById('list_name').value || list_owners
  let recommended_candidates_size = worksCouncilSize(employee_count)*2;


  let caption_text = `
    The future works council will have ${worksCouncilSize(employee_count)} members.
    Candidate <b>list proposal: ${list_name}</b> ideally has ${recommended_candidates_size} candidates.
    A mandatory ${supportingCandidates(worksCouncilSize(employee_count))} supporting signatures are also necessary, once all candidates are collected.
  `

  tableData = ""
    for (let i = 0; i < recommended_candidates_size; i++) {
       tableData +=
       `<tr>
          <td>#${i+1}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
       </tr>`
   }

  tableBody.innerHTML = tableData;
  caption.innerHTML = caption_text
}

function worksCouncilSize(employeeCount) {
  if (employeeCount < 6) {
    return 0
  } else if (employeeCount < 21) {
    return 1
  } else if (employeeCount < 51) {
    return 3
  } else if (employeeCount < 101) {
    return 5
  } else if (employeeCount < 201) {
    return 7
  } else if (employeeCount < 401) {
    return 9
  } else if (employeeCount < 701) {
    return 11
  } else if (employeeCount < 1001) {
    return 13
  } else if (employeeCount < 1501) {
    return 15
  } else if (employeeCount < 2001) {
    return 17
  } else if (employeeCount < 2501) {
    return 19
  } else if (employeeCount < 3001) {
    return 21
  } else if (employeeCount < 3501) {
    return 23
  } else if (employeeCount < 4001) {
    return 25
  } else if (employeeCount < 4501) {
    return 27
  } else if (employeeCount < 5001) {
    return 29
  } else if (employeeCount < 6001) {
    return 31
  } else if (employeeCount < 7001) {
    return 33
  } else if (employeeCount < 9001) {
    return 35
  } else {
    return Math.ceil((employeeCount - 9000)/3000.0) + 35
  }
}

function supportingCandidates(employeeCount){ return Math.min(employeeCount/20, 50)}
