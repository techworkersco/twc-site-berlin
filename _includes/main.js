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
  }
  if(el.attributes.type && el.attributes.type === "number") {
    window.localStorage.setItem("candidates." + id, parseInt(el.value))
  }
  else {
    window.localStorage.setItem("candidates." + id, el.value)
  }
}

function persistForm() {
  persistValue('employee_count')
  persistValue('list_owners')
  persistValue('list_name')
}

function candidateTable() {
  const tableBody = document.querySelector("#candidates_id");
  const caption = document.querySelector("#candidate_table > caption");
  let list_owners = localStorage.getItem('candidates.list_owners') || ''; // document.getElementById('list_owners').value
  let list_name = (localStorage.getItem('candidates.list_owners') || list_owners) || ''
  let caption_text = `
    ${worksCouncil()} coworkers will represent you in your future Works Council.
    Candidate list proposal: ${list_name} ideally has ${worksCouncil()*2} candidates.
    ${supporters()} supporting signature(s) are also necessary, once all the candidates for ${list_name} list are finalized.
  `

  tableData = ""
  for (let i = 0; i < worksCouncil()*2; i++) {
     tableData +=
     `<tr>
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
  const tableSignatureBody = document.querySelector("#signatures_id");
  const tableCandidateSignatureBody = document.querySelector("#signatures_candidate_id");
  const caption = document.querySelector("#supporter_signature_table > caption");
  let caption_text = `
   ${supporters()} supporting signatures are necessary to support this list.
  `

  candidateData = ""
  for (let i = 0; i < worksCouncil()*2; i++) {
     candidateData +=
     `<tr>
        <td>#${i+1}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
     </tr>`
  }

  tableData = ""
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

  tableSignatureBody.innerHTML = tableData;
  tableCandidateSignatureBody.innerHTML = candidateData;
  caption.innerHTML = caption_text
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
 let employees = parseInt(localStorage.getItem('candidates.employee_count'))
 for (const limit in employeeThreshholds) {
   if (employees < limit) {
     return employeeThreshholds[limit];
    }
  }
  // if the lookup table doesn't furnish a provided limit
  return Math.ceil((employees - 9000)/3000)*2 + 35
}

function supporters() {
  let employees = parseInt(localStorage.getItem('candidates.employee_count'))
  if (employees < 21) {
    return 0
  } else if (employees < 101 ) {
    return 2
  } else
  return Math.min(Math.ceil(employees/20), 50)
}
