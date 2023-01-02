const API = `https://pokeapi.co/api/v2/pokemon/`
const container = document.querySelector('.pokedex-container')

const types = {
    grass : 'rgb(216, 247, 216)',
    fire : 'rgb(253, 209, 189)',
    water : 'rgb(183, 226, 255)',
    normal : 'rgb(238, 237, 237)',
    bug : 'rgb(192, 179, 149)',
}

async function getFetch(counter){
    const res = await fetch(`${API}${counter}`)
    const data = await res.json()
    const create_poke = document.createElement('div')
    create_poke.className = 'pokedex'
    create_poke.innerHTML = `
    <div class="images-container">
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="">
    </div>
    <div class="text-container">
        <div class="level">#${`${counter}`.padStart(3,0)}</div>
        <h3 class="name">${data.forms[0].name[0].toUpperCase() + data.forms[0].name.slice(1)}</h3>
        <small class="type">Type: ${data.types[0].type.name}</small>
    </div>
    `
   create_poke.style.backgroundColor = types[data.types[0].type.name]
    container.appendChild(create_poke)
}

for (let i = 0; i < 50; i++){
    getFetch(i)
}
