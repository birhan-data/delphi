let if_yess = [];
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
