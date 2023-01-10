let formLinks = document.querySelectorAll('[class^="form_');
let clickedLinks = [];
let submittedLinks = [];

formLinks.forEach(fl => {
  fl.addEventListener('click', (event) => {
    let clickedLink = event.target.classList[0].substring(5)
    console.log(clickedLink)
    if(!clickedLinks.includes(clickedLink)) {
      clickedLinks.push(clickedLink)
      localStorage.setItem('clickedLinks', JSON.stringify(clickedLinks))
    }
    fl.style.backgroundColor = '#33A699'
    fl.style.color = 'white'
  })
})

async function initialize() {
  submittedLinks = await JSON.parse(localStorage.getItem('submittedLinks') || '[]');
  submittedLinks.forEach(num => {
    let el = document.querySelector(`.form_${num}`)
    el.style.backgroundColor = '#33A699'
    el.style.color = 'white'
  })
}

initialize();