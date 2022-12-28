
let submittedLinks = [];


let selectedsAnc1 = [];
let anc1_cols = document.querySelectorAll('.anc_col');
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