
// https://pokeapi.co/api/v2/pokemon/132/

const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
let generateBtn = document.getElementById('generate-pokemon');
let allPokemonContainer = document.getElementById('poke-container');

const fetchPokemons = () => {
    fetch(url)
    .then(response => response.json())
    .then((allPokemon)=> {
        // console.log(allPokemon);
        allPokemon.results.forEach(pokemon => {
            fetchPokemonData(pokemon);
        });
    });
};

const fetchPokemonData = (pokemon) => {
    let urlPoke = pokemon.url;
    fetch(urlPoke)
    .then(response => response.json())
    .then((pokeData) => {
        console.log(pokeData);
        makePokemon(pokeData);
    });
};

const makePokemon = (pokeData) => {
    let pokeContainer = document.createElement('div');

    let pokeName = document.createElement('h4');
    pokeName.innerHTML = pokeData.name;

    let pokeNumber = document.createElement('p');
    pokeNumber.innerHTML = '#' + pokeData.id;

    let imgFront = document.createElement('img');
    imgFront.src = pokeData.sprites.front_default;

    let imgBack = document.createElement('img');
    imgBack.src = pokeData.sprites.back_default;

    pokeContainer.append(pokeName, pokeNumber, imgFront, imgBack);

    allPokemonContainer.appendChild(pokeContainer);
};

const makeEverything = () => {
    fetchPokemons();
};

generateBtn.addEventListener('click', makeEverything);