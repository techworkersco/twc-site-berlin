// Constants - configure here if the Betriebsrat law changes!
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
  9001: 35,
};

// Seed data for the example generator

const lastNames = [
  'Schmidt',
  'Miller',
  'Xi',
  'Patel',
  'Ortez',
  'Goldman',
  'Shevchenko',
  'Melnyk',
  'Popova',
];
const firstNames = ['Chris', 'Sam', 'Hannah', 'Raj', 'Aditi', 'Thomas', 'Marie', 'Mahmoud'];
const jobTitles = [
  'Vulture capitalist',
  'Customer support',
  'Working student',
  'Warehouse picker',
  'IT support',
  'QA engineer',
  'Delivery rider',
  'Marketing manager',
  'Software engineer',
];

let exampleEmployeeCount = 0;
let isExample = false;

const formFields = document.querySelectorAll('form#nominating-candidates input');
const formFieldIds = []
formFields.forEach((el) => {
if (el.id) {
    formFieldIds.push(el.id)
}
}
    
);

function onLoad() {
  let employee_count = getById('employee_count');
  el('employee_count').value = employee_count;
  el('candidate_count').value = localStorage.getItem('election.candidate_count');
  el('list_name').value = getById('list_name');
  el('list_owners').value = getById('list_owners');

  if (employee_count) {
    handleTemplateGeneratorFormSubmit();
    handleEmployeeCount();
  }
}

function handleTemplateGeneratorFormSubmit() {
  if (isFormValid()) {
    persistForm();
    signaturesTable();
    candidateTable();
    el('form-error').innerText = '';
    
  } else {
    el('form-error').innerText = 'Please correct invalid field(s) in order to generate the template';
  }
}



function handleTemplateGeneratorExampleFormSubmit() {
 
  isExample = true;
  el('form-error').innerText = '';
  exampleEmployeeCount = Math.floor(Math.random() * (1000 - 25 + 1)) + 25;
  signaturesTable(true);
  candidateTable(true);
  el('print-button').classList.remove('visible')
}

function handleEmployeeCount() {
  isExample = false;
  persistValue('employee_count');

  const minCandidates = worksCouncil();
  if (minCandidates) {
    // countField.setAttribute('min', `${minCandidates}`);
    el(
      'minimum-candidates'
    ).innerText = `Note: with ${getById('employee_count')} employees, we reccomend a list with ${minCandidates * 2} candidates`;
  }
}

function isFormValid() {
  return formFieldIds.map(getValidity).every((e) => e);
}

function getValidity(id) {
  return el(id).checkValidity();
}

function persistValue(id) {
  const value = el(id).value;
  window.localStorage.setItem('election.' + id, value || '');
}

function getById(id) {
  return window.localStorage.getItem('election.' + id);
}

function el(id) {
  return document.getElementById(id);
}

function persistForm() {
  formFieldIds.forEach((id) => persistValue(id));
}

function listOwners() {
  // currently no option to directly enter candidate names, but when that happens this can be generated from that
  return getById('list_owners') || '';
}

function listName() {
  // if a list name is not provided, the first two names on list suffice
  return getById('list_name') || listOwners() || '';
}

function employeeCount() {
  return isExample ? exampleEmployeeCount : parseInt(getById('employee_count'));
}


function candidateTable() {
  const tableBody = document.querySelector('#candidates_id');
  const caption = document.querySelector('#candidate_table > caption');

  let caption_text = `${worksCouncil()} coworkers will represent you and your ${
    employeeCount() - 1
  } co-workers in your future Works Council.
    Candidate list proposal: ${listName()} ideally has ${candidates()} candidates.
    ${supporters(
      isExample
    )} supporting signature(s) are also necessary, once all the candidates for ${listName()} list are finalized.
  `;

  let tableData = '';
  if (!isExample) {
    for (let i = 0; i < candidates(); i++) {
      tableData += `<tr>
      <td>${i == 0 ? candidate1() : ''}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>`;
    }
  } else {
    for (let i = 0; i < candidates(); i++) {
      genders = ['male', 'female', 'diverse', 'non-binary'];
      tableData += `<tr>
        <td>${randomItem(firstNames)}</td>
        <td>${randomItem(lastNames)}</td>
        <td>${randomDate()}</td>
        <td>${randomItem(genders)}</td>
        <td>${randomItem(jobTitles)}</td>
        <td>${randomItem(['😅', '🙈', '✊', '👾'])}</td>
       </tr>`;
    }
  }

  tableBody.innerHTML = tableData;
  caption.innerHTML = caption_text;
}

function candidate1() {
  if (listOwners()) {
    return listOwners().split(',')[0];
  } else {
    return '';
  }
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomDate() {
  let start = new Date('1970-01-01');
  let end = new Date('2004-12-31');

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();
}

function getTableData() {
  let tableData = '';
  if (!isExample) {
    for (let i = 0; i < supporters(); i++) {
      let bgColor = i + 1 < supporters() ? '#FFCCCB' : '#66FF99';
      let text = '#FFCCCB' == bgColor ? 'Almost' : 'Congrats!';
      tableData += `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td style="background-color:${bgColor}">${text}</td>
     </tr>`;
    }
    tableData += extraSupporterRows();
  } else {
    for (let i = 0; i < supporters(); i++) {
      let bgColor = i + 1 < supporters() ? '#FFCCCB' : '#66FF99';
      let text = '#FFCCCB' == bgColor ? 'Almost' : 'Congrats!';
      tableData += `<tr>
        <td>${randomItem(firstNames)}</td>
        <td>${randomItem(lastNames)}</td>
        <td>${randomItem(['😅', '🙈', '✊', '👾'])}</td>
        <td style="background-color:${bgColor}">${text}</td>
     </tr>`;
    }
  }
  return tableData;
}

function getCandidateData() {
  let candidateData = '';

  const numCandidates = candidates();

  if (!isExample) {
    for (let i = 0; i < numCandidates; i++) {
      candidateData += `<tr>
        <td>#${i + 1}</td>
        <td>${i == 0 ? candidate1() : ''}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
       </tr>`;
    }
  } else {
    for (let i = 0; i < numCandidates; i++) {
      genders = ['male', 'female', 'diverse', 'non-binary'];
      candidateData += `<tr>
      <td>#${i + 1}</td>
      <td>${randomItem(firstNames)}</td>
      <td>${randomItem(lastNames)}</td>
      <td>${randomDate()}</td>
      <td>${randomItem(genders)}</td>
      <td>${randomItem(jobTitles)}</td>
     </tr>`;
    }
  }

  return candidateData;
}

function signaturesTable() {
  const tableSignatureBody = document.querySelector('#signatures_id');
  const tableCandidateSignatureBody = document.querySelector('#signatures_candidate_id');
  const caption = document.querySelector('#signature_candidate_table > caption');
  let caption_text = `
    List proposal Solidarity needs at least ${supporters()} supporting signatures
    for the following candidates of the Solidarity list nomination.`;

  if (!isExample) {
    caption_text = `List proposal ${listName()} needs at least ${supporters()} supporting signatures
    for the following candidates of the ${listName()} list nomination.`;
  }

  tableSignatureBody.innerHTML = getTableData();
  tableCandidateSignatureBody.innerHTML = getCandidateData();
  caption.innerHTML = caption_text;
}

function extraSupporterRows() {
  // when no signatures are required, extras are not either
  if (supporters() < 2) {
    return '';
  } else {
    return `<tr>
     <td></td>
     <td></td>
     <td></td>
     <td style="background-color:#FFD2669">Optional extra signatures</td>
  </tr>`.repeat(Math.min(supporters(), 5));
  }
}

function worksCouncil() {
  let employees = employeeCount();
  for (const limit in employeeThreshholds) {
    if (employees < limit) {
      return employeeThreshholds[limit];
    }
  }
  // if the lookup table doesn't furnish a provided limit
  return Math.ceil((employees - 9000) / 3000) * 2 + 35;
}

function candidates() {
  if (isExample) {
    return 2 * worksCouncil();
  }
  // if unknown, double works council size is recommended
  return parseInt(getById('candidate_count')) || 2 * worksCouncil();
}

function supporters() {
  let employees = employeeCount();
  if (employees < 21) {
    return 0;
  } else if (employees < 101) {
    return 2;
  } else return Math.min(Math.ceil((employees * 1.0) / 20), 50);
}

onLoad();
