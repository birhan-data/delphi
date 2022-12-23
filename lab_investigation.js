let if_yess = [];
document.querySelectorAll('.if_yes').forEach(ele => if_yess.push(ele));

let anc1_checkbox;

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
