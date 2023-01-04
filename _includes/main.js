var element = document.getElementById('nav');
var trigger = document.getElementById('navBtn');

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('hide');
});

function employeeCount(){
  return parseInt(document.getElementById('employee_count').value);
}

function candidateTable() {
  const tableBody = document.querySelector("#candidates_id");
  const caption = document.querySelector("#candidate_table > caption");
  let list_owners = document.getElementById('list_owners').value
  let list_name = document.getElementById('list_name').value || list_owners

  let employee_count = employeeCount();
  let caption_text = `
    The future works council will have ${worksCouncilSize(employee_count)} members.
    Candidate <b>list proposal: ${list_name}</b> ideally has ${worksCouncilSize(employee_count)*2} candidates.
    A mandatory ${supportingCandidates(employee_count)} supporting signatures are also necessary, once all candidates are collected.
  `

  tableData = ""
    for (let i = 0; i < worksCouncilSize(employee_count)*2; i++) {
       tableData +=
       `<tr>
          <td>#${i+1}</td>
          <td></td>
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

function signaturesTable() {
  const tableBody = document.querySelector("#signatures_id");
  const caption = document.querySelector("#supporter_signature_table > caption");

  let employee_count = employeeCount();
  let caption_text = `
    A mandatory ${supportingCandidates(employee_count)} supporting signatures are also necessary, once all candidates are collected.
  `

  tableData = ""
    for (let i = 0; i < supportingCandidates(employee_count); i++) {
       let bgColor = i + 1 < supportingCandidates(employeeCount()) ? "#FFCCCB" : "#66FF99"
       let text = "#FFCCCB" == bgColor ? "Almost" : "Congrats!"
       tableData +=
       `<tr>
          <td></td>
          <td></td>
          <td></td>
          <td style="background-color:${bgColor}">${text}</td>
       </tr>`
   }

  tableData +=

  tableBody.innerHTML = tableData;
  caption.innerHTML = caption_text
}

const employeeCounts = {
  5: 0,
  21: 1,
  51: 3,
  101: 5,
  201: 7,
  401: 9,
  701: 11,
  1001: 13,
  1501: 15,
  2001: 17,
  2501: 19,
  3001: 21,
  3501: 23,
  4001: 25,
  4501: 27,
  5001: 29,
  6001: 31,
  7001: 33,
  9001: 35
}

function worksCouncilSize(employees) {
 for (const limit in employeeCounts) {
   if (employees < limit) {
     return employeeCounts[limit];
    }
  }
  // if the lookup table doesn't furnish a provided limit
  return Math.ceil((employeeCount - 9000)/3000)*2 + 35
}

function supportingCandidates(employeeCount) {
  if (employeeCount < 21) {
    return 0
  } else if (employeeCount < 101 ) {
    return 2
  } else
  return Math.min(Math.ceil(employeeCount/20), 50)
}
