let if_yess = [];
let submittedLinks = [];
document.querySelectorAll('.if_yes').forEach(ele => if_yess.push(ele));

function handleRadioClick(input) {
  if(input.value=='Yes') {
    if_yess.forEach(el => el.hidden = false);
    
    document.querySelectorAll('[class$="col"]').forEach(cell => {
      cell.hidden = true;
    })
  } else {
    if_yess.forEach(el => el.hidden = true);
  }
}

if_yess.forEach(el => el.hidden = true);

document.getElementById('submit-btn').addEventListener('click', event => {
  if(!submittedLinks.includes(5)) {
    submittedLinks.push(5)
    localStorage.setItem('submittedLinks', JSON.stringify(submittedLinks));
  }
})

async function initialize() {
  submittedLinks = await JSON.parse(localStorage.getItem('submittedLinks') || '[]');
}

initialize();