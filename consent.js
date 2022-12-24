let submittedLinks = [];

document.getElementById('submit-btn').addEventListener('click', event => {
  if(!submittedLinks.includes(1)) {
    submittedLinks.push(1)
    localStorage.setItem('submittedLinks', JSON.stringify(submittedLinks));
  }
})

async function initialize() {
  submittedLinks = await JSON.parse(localStorage.getItem('submittedLinks') || '[]');
}

initialize();