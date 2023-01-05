var element = document.getElementById('nav');
var trigger = document.getElementById('navBtn');

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('hide');
});

function handleTemplateGeneratorFormSubmit() {
  signaturesTable()
  candidateTable()
  persistForm()
}

function persistValue(id) {
  const el = document.getElementById(id);
  if(!el || !el.value || el.value.length === 0) {
    return
  } else {
    window.localStorage.setItem("election." + id, el.value)
  }
}

function persistForm() {
  persistValue('employee_count')
  persistValue('candidate_count')
  persistValue('list_owners')
  persistValue('list_name')
}

function listOwners() {
  // currently no option to directly enter candidate names, but when that happens this can be generated from that
  return localStorage.getItem('election.list_owners') || ''
}

function listName() {
  // if a list name is not provided, the first two names on list suffice
  return (localStorage.getItem('election.list_name') || listOwners()) || ''
}

function candidateTable() {
  const tableBody = document.querySelector("#candidates_id");
  const caption = document.querySelector("#candidate_table > caption");
  let list_owners = localStorage.getItem('election.list_owners') || ''; // document.getElementById('list_owners').value

  let caption_text = `${worksCouncil()} coworkers will represent you in your future Works Council.
    Candidate list proposal: ${listName()} ideally has ${candidates()} candidates.
    ${supporters()} supporting signature(s) are also necessary, once all the candidates for ${listName()} list are finalized.
  `

  let tableData = ""
  for (let i = 0; i < candidates(); i++) {
     tableData +=
     `<tr>
        <td>${i == 0 ? candidate1() : ''}</td>
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

function candidate1(){
  if (listOwners()){
   return listOwners().split(",")[0]
 } else {
   return ''
 }
}

function signaturesTable() {
  const tableSignatureBody = document.querySelector("#signatures_id");
  const tableCandidateSignatureBody = document.querySelector("#signatures_candidate_id");
  const caption = document.querySelector("#signature_candidate_table > caption");
  let caption_text = `
    List proposal ${listName()} needs at least ${supporters()} supporting signature
    for the following candidates of the ${listName()} list nomination.`

  let candidateData = ""
  for (let i = 0; i < candidates(); i++) {
     candidateData +=
    `<tr>
      <td>#${i+1}</td>
      <td>${ i == 0 ? candidate1() : '' }</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
     </tr>`
  }

  let tableData = ""
  for (let i = 0; i < supporters(); i++) {
    let bgColor = i + 1 < supporters() ? "#FFCCCB" : "#66FF99"
    let text = "#FFCCCB" == bgColor ? "Almost" : "Congrats!"
    tableData +=
    `<tr>
      <td></td>
      <td></td>
      <td></td>
      <td style="background-color:${bgColor}">${text}</td>
   </tr>`
  }
  tableData += extraSupporterRows()

  tableSignatureBody.innerHTML = tableData;
  tableCandidateSignatureBody.innerHTML = candidateData;
  caption.innerHTML = caption_text
}

function extraSupporterRows() {
  // when no signatures are required, extras are not either
  if (supporters() < 2) {
    return ''
  } else {
  rowsHTML =
  `<tr>
     <td></td>
     <td></td>
     <td></td>
     <td style="background-color:#FFD2669">Optional extra signatures</td>
  </tr>`.repeat(Math.min(supporters(), 5))
  return rowsHTML
  }
}

const employeeThreshholds = {
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

function worksCouncil() {
 let employees = parseInt(localStorage.getItem('election.employee_count'))
 for (const limit in employeeThreshholds) {
   if (employees < limit) {
     return employeeThreshholds[limit];
    }
  }
  // if the lookup table doesn't furnish a provided limit
  return Math.ceil((employees - 9000)/3000)*2 + 35
}

function candidates() {
  // if unknown, double works council size is recommended
  return parseInt(localStorage.getItem('election.candidate_count')) || 2 * worksCouncil()
}

function supporters() {
  let employees = parseInt(localStorage.getItem('election.employee_count'))
  if (employees < 21) {
    return 0
  } else if (employees < 101 ) {
    return 2
  } else
  return Math.min(Math.ceil(employees * 1.0 / 20), 50)
}
