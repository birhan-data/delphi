let if_yess = [];
let submittedLinks = [];
document.querySelectorAll('.if_yes').forEach(ele => if_yess.push(ele));

let anc_checkboxs = [];

function showCheckedAncColsTable() {
  let allChecked = Array.from(document.querySelectorAll('.anc:checked'))
    .map(c => Number(c.value.substring(c.value.length-1)));
  
  if(allChecked.length > 0) {
    [1, 2, 3, 4].forEach(checkbox => {
      if(allChecked.includes(checkbox)) {
        document.querySelectorAll(`.anc${checkbox}_col`).forEach(ele => {
          ele.hidden = false
        });
      } else {
        document.querySelectorAll(`.anc${checkbox}_col`).forEach(ele => {
          ele.hidden = true
        });
      }
    })
  } else {
    document.querySelectorAll('[class$="col"]').forEach(cell => {
      cell.hidden = true;
    })

  }
}

function handleAncCheck() {
  [1, 2, 3, 4].forEach(num => {
    anc_checkboxs.push(document.getElementById(`anc${num}`))
  })
  anc_checkboxs.forEach(check => {
    check.addEventListener('change', (event) => {
      showCheckedAncColsTable();
    })
  })
}

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

function handleSubmitbtn(){
  let if_error = [];
   [1, 2, 3, 4].forEach(i => {
    if_error.push(document.querySelectorAll(`.anc${i}_err`).values)
   
    

  })
  console.log(if_error)
}


function handleRadioClick(input) {
  if(input.value=='Yes') {
    if_yess.forEach(el => el.hidden = false);
    
    document.querySelectorAll('[class$="col"]').forEach(cell => {
      cell.hidden = true;
    })
    handleAncCheck();
  } else {
    if(anc_checkboxs.length > 0) {
      anc_checkboxs.forEach(cb => cb.checked = false)
    }
    if_yess.forEach(el => el.hidden = true);
  }
}

if_yess.forEach(el => el.hidden = true);


document.getElementById('submit-btn').addEventListener('click', event => {
  if(!submittedLinks.includes(3)) {
    submittedLinks.push(3)
    localStorage.setItem('submittedLinks', JSON.stringify(submittedLinks));
  }
})

async function initialize() {
  submittedLinks = await JSON.parse(localStorage.getItem('submittedLinks') || '[]');
}

initialize();