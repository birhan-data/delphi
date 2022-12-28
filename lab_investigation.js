let if_yess = [];
let submittedLinks = [];
document.querySelectorAll('.if_yes').forEach(ele => if_yess.push(ele));

function handleRadioClick(input) {
  if(input.value=='Yes') {
    if_yess.forEach(el => el.hidden = false);
    
    document.querySelectorAll('[class$="col2"]').forEach(cell => {
      cell.hidden = true;
    })
  } else {
    if_yess.forEach(el => el.hidden = true);
  }
}

if_yess.forEach(el => el.hidden = true);



let selectedsAnc1 = [];
let anc1_cols = document.querySelectorAll('.anc1_col');
var anc1_err = document.getElementById("error")

anc1_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc1.includes(event.target.value)){      
      anc1_err.textContent = "You have selected duplicated value"
      anc1_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      } else {
      selectedsAnc1.push(event.target.value)
       error.textContent = ""
       document.getElementById("submit-btn").disabled = false;
    }
  
  })
})

let selectedsAnc2 = [];
let anc2_cols = document.querySelectorAll('.anc2_col');
var anc2_err = document.getElementById("error")

anc2_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc2.includes(event.target.value)){      
      anc2_err.textContent = "You have selected duplicated value"
      anc2_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      } else {
      selectedsAnc2.push(event.target.value)
      anc2_err.textContent = ""
       document.getElementById("submit-btn").disabled = false;
    }
  
  })
})

let selectedsAnc3 = [];
let anc3_cols = document.querySelectorAll('.anc3_col');
var anc3_err = document.getElementById("error")

anc3_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc3.includes(event.target.value)){      
      anc3_err.textContent = "You have selected duplicated value"
      anc3_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      } else {
      selectedsAnc3.push(event.target.value)
      anc3_err.textContent = ""
       document.getElementById("submit-btn").disabled = false;
    }
  
  })
})

let selectedsAnc4 = [];
let anc4_cols = document.querySelectorAll('.anc4_col');
var anc4_err = document.getElementById("error")

anc4_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc4.includes(event.target.value)){      
      anc4_err.textContent = "You have selected duplicated value"
      anc4_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      handleSubmitbtn()
      } else {
      selectedsAnc4.push(event.target.value)
      anc4_err.textContent = ""
       document.getElementById("submit-btn").disabled = false;
       handleSubmitbtn()
    }
  
  })
})

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