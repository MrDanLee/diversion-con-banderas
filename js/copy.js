// sacar info de la API
// pais y bandera
// oragnizar por sort()
// al clickar, aparece menu flotante 
// boton de cerrar
// todo funcionando

/*

const info = document.getElementById('info')
const countriesList = document.getElementById('countries-list')

const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,car,population,capital')
    if (!response.ok) {
      throw new Error(console.log(response.status))
    }
    const data = await response.json()
    sortedCountries(data)
    return data
  } catch (err) {
    console.log(err)
  }
}


function sortedCountries (countries) {
  countries.sort((a, b) => {
    const nameA = a.name.common.toUpperCase()
    const nameB = b.name.common.toUpperCase()
    return nameA.localeCompare(nameB, "es")
  })
}

getCountries().then(countries => {
  const allCountries = countries.map(country => {
    const {flags, name: {common}} = country 
    const template = `
      <li class="card">
        <h2>${common}</h2>
        <img src="${flags.png}" alt="${flags.alt}">
      </li>
    `
    return template
  }).join("")
  countriesList.innerHTML = allCountries

  const cards = document.querySelectorAll('.card')

  cards.forEach((card, i) => {
    card.addEventListener("click", () => {

      info.classList.add("visible")
      
      const country = countries[i]
      const { flags, name: { common }, car, population, capital  } = country 
      
      const template = `
        <section class="info-country">
          <div class="info-container">
            <div id="closed" class="closed">X</div>
            <h2>${common}</h2>
            <p>${car.side}</p>
            <img src="${flags.png}" alt="${flags.alt}">
            <p>${population}</p>
            <p>${capital[0]}</p>
          </div>
        </section>
      `
      info.innerHTML = template
    })
  })
  info.addEventListener('click', (e) => {
    if (e.target.classList.contains("closed")) {
      info.classList.remove("visible")
    }
  })
})

*/