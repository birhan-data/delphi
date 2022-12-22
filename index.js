function submit() {

  let form = document.forms[0];
  let formData = new FormData(form);
  let search = new URLSearchParams(formData);
  let queryString = search.toString();
  let startStr = "https://docs.google.com/forms/d/e/1FAIpQLSfYfyh8YbZbUuGyJMvCMVB-BvHzeM5Z64EQqwSV8kqDMaZyhg/formResponse?"
  console.log(search.toString())

  var http = new XMLHttpRequest();

  //http.open("GET", startStr+"?"+queryString, true);
  http.open("GET", "https://www.google.com", true)
  

}

document.getElementById("submit-btn").addEventListener("click", submit);