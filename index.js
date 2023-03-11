const cardContainer = document.querySelector('.card-container')
const asideTechnologies = document.querySelector('#aside-tech')
const socialMedia = document.querySelector('#social')
const myAge = document.querySelector('#myAge')
const currentLanguages = document.querySelector('#languages')

function getElements(elements) {
  let list='';
  elements.forEach(element => {
    list+=`<li>${element}</li> `
  });
  return list
}

function getMyAge(){
  return new Date(new Date()-new Date('05/08/1995')).getFullYear()-1970
}

myAge.innerHTML=`${getMyAge()}`

projects.forEach(project => {
  const newCard = document.createElement('div')
  newCard.className='card'
  newCard.innerHTML=`
  <img src="./imgs/projects/${project.img}" alt="project-image">
  <div class="card-content">
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div>
      <span>Technologies:</span>
      <ul>
        ${getElements(project.technologies)}
      </ul>
    </div>
  </div>
  <a href="${project.link}">See Project</a>
  `
  cardContainer.appendChild(newCard)
});

currentTechnologies.forEach(currentTech => {
  const newTech = document.createElement('div')
  newTech.innerHTML=`
  <span>${currentTech.name}</span>
  <span>${currentTech.value}</span>
  <progress value="${currentTech.progress}" max="100"></progress>
  `
  asideTechnologies.appendChild(newTech)
})

socials.forEach(social => {
  const newSocial = document.createElement('li')
  newSocial.innerHTML=`
  <a href="${social.link}" target="_blank">
  <img class="social-media-icon" src="./imgs/social-media/${social.img}" alt="${social.altText}"></a>
  `
  socialMedia.appendChild(newSocial)
});

languages.forEach(language => {
  const newLanguage = document.createElement('p')
  newLanguage.innerHTML=`${language.language}: ${language.level}`

  currentLanguages.appendChild(newLanguage)
})