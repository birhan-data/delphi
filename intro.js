
let submittedLinks = [];



let selectedsAnc1 = [];
let anc1_cols = document.querySelectorAll('.anc_col');
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
  
  })
})
document.getElementById('submit-btn').addEventListener('click', event => {
  if(!submittedLinks.includes(2)) {
    submittedLinks.push(2)
    localStorage.setItem('submittedLinks', JSON.stringify(submittedLinks));
  }
})

async function initialize() {
  submittedLinks = await JSON.parse(localStorage.getItem('submittedLinks') || '[]');
}

initialize();


document.getElementById("validate-btn").addEventListener("click", (event) => {
  var validation_err = document.getElementById("error");
  let valid = 0;
  let notvalid = 0;
  // let allChecked = Array.from(document.querySelectorAll(".anc:checked")).map(
  //   (c) => Number(c.value.substring(c.value.length - 1))
  // );

  // if (allChecked.length > 0) {
  //   allChecked.forEach((checkbox) => {
      document.querySelectorAll(`.table_1_anc_1, .table_2_anc_1 `)
        .forEach((data) => {
          if (data.value == "NA") {
            notvalid += 1;
          } else {
            valid += 1;
          }
        });
  //   });
  // }
  console.log(valid);
  console.log("notvalid");
  console.log(notvalid);
  if (notvalid == 0) {
    validation_err.textContent = "Validation successful ";
    validation_err.style.color = "black";
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("validate-btn").disabled = true;
    document.getElementById("submit-btn").removeAttribute("hidden");
    document.getElementById("validate-btn").setAttribute("hidden", "hidden");
  } else {
    console.log("NA value entered");
    validation_err.textContent = "Please Enter all values";
    validation_err.style.color = "red";
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("validate-btn").disabled = false;
    document.getElementById("validate-btn").removeAttribute("hidden");
    document.getElementById("submit-btn").setAttribute("hidden", "hidden");
  }
});