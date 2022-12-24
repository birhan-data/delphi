
let submittedLinks = [];

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