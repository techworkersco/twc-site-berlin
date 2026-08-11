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

const actualCandidates = [
 {
    list: 'lista',
    gender: 'man',
    present: true,
    position: 0
 },
 {
    list: 'lista',
    gender: 'man',
    present: true,
    position: 1
 },
  {
    list: 'lista',
    gender: 'man',
    present: true,
    position: 3
 },
 {
   list: 'lista',
   gender: 'man',
   present: true,
   position: 4
},
{
  list: 'lista',
  gender: 'man',
  present: true,
  position: 5
},
  {
    list: 'listb',
    gender: 'man',
    present: true,
    position: 0
 },
 {
    list: 'listb',
    gender: 'woman',
    present: true,
    position: 1
 },
 {
    list: 'listb',
    gender: 'non_binary',
    present: true,
    position: 2
 },
 {
    list: 'listb',
    gender: 'non_binary',
    present: true,
    position: 3
 },
 {
    list: 'listc',
    gender: 'non_binary',
    present: true,
    position: 0
 }
]


// userInputs {
//   employeeWorkforce || genderQuotaOnWorksCouncil,
//   exampleVoterTally,
//   genderOfCandidates
// };

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

let employeeWorkforce = { men: 200, women: 58, non_binary: 0 };

const exampleVoterTally = { lista: 210, listb: 120, listc: 38 };
const output = { lista: 5, listb: 3, listc: 1 }


function worksCouncil() {
  let employees = sumValues(employeeWorkforce)
  for (const limit in employeeThreshholds) {
    if (employees < limit) {
      return employeeThreshholds[limit];
    }
  }
  // if the lookup table doesn't furnish a provided limit
  return Math.ceil((employees - 9000) / 3000) * 2 + 35;
}

function dHondt (lists, seats){

  let dHondt_arrs = []
  for (let i = 0; i < seats; i++) {
    for (const [k, v] of Object.entries(lists)) { dHondt_arrs.push([k, v / i]) }
  }
  return dHondt_arrs .sort((a, b) => b[1]-a[1]).slice(0, seats).reduce((obj, [k]) => {
    if (!obj[k]) {
    obj[k] = 0
    }
    obj[k] ++;
    return obj
    }, {})
 }

function minorityGender(employeeWorkforce) {
  if (employeeWorkforce['men'] > employeeWorkforce['women']){
    return 'women'
  } else {
    return 'men'
  }
}

const listResults = dHondt(exampleVoterTally, worksCouncil())
Object.entries(listResults).reduce((obj, [k, v]) => {
  obj[k] = dHondt(employeeWorkforce, v)
  return obj
}, {})

function idealGenderQuota(voterTally, worksCouncilSize){
  const listResults = dHondt(voterTally, worksCouncilSize)
  Object.entries(listResults).reduce((obj, [k, v]) => {
    obj[k] = dHondt(employeeWorkforce, v)
    return obj
  }, {})
}

function actualSeatDistribution(){
  minorityGender = minorityGender(employeeWorkforce);
  // should iterate over idealGenderQuota (sorted by largest lists first)
  actualCandidates
}
