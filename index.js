const cardContainer = document.querySelector('.card-container')

function getTechnologies(technologies) {
  let list='';
  technologies.forEach(technology => {
    list+=`<li>${technology}</li> `
  });
  return list
}

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
        ${getTechnologies(project.technologies)}
      </ul>
    </div>
  </div>
  <a href="${project.link}">See Project</a>
  `
  cardContainer.appendChild(newCard)
});