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
        document.querySelectorAll(`.anc${checkbox}_col, .anc${checkbox}_col_rate`).forEach(ele => {
          ele.hidden = false
        });
      } else {
        document.querySelectorAll(`.anc${checkbox}_col, .anc${checkbox}_col_rate`).forEach(ele => {
          ele.hidden = true
        });
      }
    })
  } else {
    document.querySelectorAll('[class$="col"],[class$="col_rate"]').forEach(cell => {
      cell.hidden = true;
    })

  }
enableValidateButt()
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

function handleRadioClick(input) {
  if(input.value=='Yes') {
    if_yess.forEach(el => el.hidden = false);
    
    document.querySelectorAll('[class$="col"],[class$="col_rate"]').forEach(cell => {
      cell.hidden = true;
    })
    enableValidateButt();
    handleAncCheck();
  } else {
    if(anc_checkboxs.length > 0) {
      anc_checkboxs.forEach(cb => cb.checked = false)
    }
    if_yess.forEach(el => el.hidden = true);
    enableSubmiteButt();
  }
}

if_yess.forEach(el => el.hidden = true);

document.getElementById('submit-btn').addEventListener('click', event => {
  if(!submittedLinks.includes(6)) {
    submittedLinks.push(6)
    localStorage.setItem('submittedLinks', JSON.stringify(submittedLinks));
  }
})

async function initialize() {
  submittedLinks = await JSON.parse(localStorage.getItem('submittedLinks') || '[]');
}

initialize();



let selectedsAnc1 = [];
let anc1_cols = document.querySelectorAll('.anc1_col');
var anc1_err = document.getElementById("error")

anc1_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc1.includes(event.target.value)){
        let selected_anc1_on_collision = [];
        document.querySelectorAll(".table_1_anc_1").forEach((dd) => {
          if (dd.value == event.target.value) {
            dd.value = "NA";
            selected_anc1_on_collision.push("NA");
          } else {
            selected_anc1_on_collision.push(dd.value);
          }
        });
  
        selectedsAnc1 = selected_anc1_on_collision;      
      anc1_err.textContent = "You have selected duplicated value"
      anc1_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      } else {
        selectedsAnc1 = [];
      document.querySelectorAll(".table_1_anc_1").forEach((dropdown) => {
        selectedsAnc1.push(dropdown.value);
      });
      
       error.textContent = ""
       document.getElementById("submit-btn").disabled = false;
    }
    enableValidateButt()
  })
})

let selectedsAnc2 = [];
let anc2_cols = document.querySelectorAll('.anc2_col');
var anc2_err = document.getElementById("error")

anc2_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc2.includes(event.target.value)){  
      let selected_anc2_on_collision = [];
      document.querySelectorAll(".table_1_anc_2").forEach((dd) => {
        if (dd.value == event.target.value) {
          dd.value = "NA";
          selected_anc2_on_collision.push("NA");
        } else {
          selected_anc2_on_collision.push(dd.value);
        }
      });

      selectedsAnc2 = selected_anc2_on_collision;         
      anc2_err.textContent = "You have selected duplicated value"
      anc2_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      } else {
        selectedsAnc2 = [];
      document.querySelectorAll(".table_1_anc_2").forEach((dropdown) => {
        selectedsAnc2.push(dropdown.value);
      });
     
      anc2_err.textContent = ""
       document.getElementById("submit-btn").disabled = false;
    }
    enableValidateButt()
  })
})

let selectedsAnc3 = [];
let anc3_cols = document.querySelectorAll('.anc3_col');
var anc3_err = document.getElementById("error")

anc3_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc3.includes(event.target.value)){ 
      let selected_anc3_on_collision = [];
      document.querySelectorAll(".table_1_anc_3").forEach((dd) => {
        if (dd.value == event.target.value) {
          dd.value = "NA";
          selected_anc3_on_collision.push("NA");
        } else {
          selected_anc3_on_collision.push(dd.value);
        }
      });

      selectedsAnc3 = selected_anc3_on_collision;         
      anc3_err.textContent = "You have selected duplicated value"
      anc3_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
      } else {
        selectedsAnc3 = [];
        document.querySelectorAll(".table_1_anc_3").forEach((dropdown) => {
          selectedsAnc3.push(dropdown.value);
        });
     
      anc3_err.textContent = ""
       document.getElementById("submit-btn").disabled = false;
    }
    enableValidateButt()
  })
})

let selectedsAnc4 = [];
let anc4_cols = document.querySelectorAll('.anc4_col');
var anc4_err = document.getElementById("error")

anc4_cols.forEach(check => {
  check.addEventListener('change', (event) => {
    if (selectedsAnc4.includes(event.target.value)){  
      let selected_anc4_on_collision = [];
      document.querySelectorAll(".table_1_anc_4").forEach((dd) => {
        if (dd.value == event.target.value) {
          dd.value = "NA";
          selected_anc4_on_collision.push("NA");
        } else {
          selected_anc4_on_collision.push(dd.value);
        }
      });

      selectedsAnc4 = selected_anc4_on_collision;         
      anc4_err.textContent = "You have selected duplicated value"
      anc4_err.style.color = "red"
      event.target.value="NA"
      document.getElementById("submit-btn").disabled = true;
   
      } else {
        selectedsAnc4 = [];
        document.querySelectorAll(".table_1_anc_4").forEach((dropdown) => {
          selectedsAnc4.push(dropdown.value);
        });
      
      anc4_err.textContent = ""
       document.getElementById("submit-btn").disabled = false;

    }
    enableValidateButt()
  })
})

document.getElementById("validate-btn").addEventListener("click", (event) => {
  var validation_err = document.getElementById("error");
  let valid = 0;
  let notvalid = 0;
  let allChecked = Array.from(document.querySelectorAll(".anc:checked")).map(
    (c) => Number(c.value.substring(c.value.length - 1))
  );

  if (allChecked.length > 0) {
    allChecked.forEach((checkbox) => {
      document
        .querySelectorAll(`.table_1_anc_${checkbox}, .table_2_anc_${checkbox} `)
        .forEach((data) => {
          if (data.value == "NA") {
            notvalid += 1;
          } else {
            valid += 1;
          }
        });
    });
  }
  console.log(valid);
  console.log("notvalid");
  console.log(notvalid);
  if (notvalid == 0) {
    enableSubmiteButt()
    anc4_err.textContent = "Validation successful ";
    validation_err.style.color = "black";

  } else {
    console.log("NA value entered");
    enableValidateButt()
    validation_err.textContent = "Please Enter all values";
    validation_err.style.color = "red";

  }
});


function enableValidateButt() {
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("validate-btn").disabled = false;
  document.getElementById("validate-btn").removeAttribute("hidden");
  document.getElementById("submit-btn").setAttribute("hidden", "hidden");
  document.getElementById("error").textContent="";
 
}

function enableSubmiteButt() {
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("validate-btn").disabled = true;
  document.getElementById("submit-btn").removeAttribute("hidden");
  document.getElementById("validate-btn").setAttribute("hidden", "hidden");
  document.getElementById("error").textContent="";
}


