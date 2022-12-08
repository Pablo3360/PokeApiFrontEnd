
export function getPokemonsResponse(pokemons){
    return {
        type: 'GET_POKEMONS_RESPONSE',
        payload: pokemons
    }
}

export function getPokemons(value) {
    return function(dispatch) {
        fetch(`http://localhost:3001/pokemons?totalPokemons=${value}`)
        .then(r => r.json())
        .then((pokemons) => dispatch(getPokemonsResponse(pokemons)))
    }
};

export function getTypesResponse(types){
    return {
        type: 'GET_TYPES_RESPONSE',
        payload: types
    }
}

export function getTypes() {
    return function(dispatch) {
        fetch('http://localhost:3001/types')
        .then(r => r.json())
        .then((types) => dispatch(getTypesResponse(types)))
        .catch( error => console.log(error))
    }
};

export function toFilterByType(type){
    return {
        type: 'FILTER_BY_TYPE',
        payload: type
    }
}

export function toOrder(type){
    return {
        type: 'ORDER',
        payload: type
    }
}

export function getPokemonResponse(pokemon){
    return {
        type: 'GET_POKEMON_RESPONSE',
        payload: pokemon
    }
}

export function getPokemon(name) {
    return function(dispatch) {
        fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(response => {
            if(response.status !== 200){
                throw new Error('Pokemon no encontrado');
            } else {
                return response.json();
            }})
        .then((pokemon) => dispatch(getPokemonResponse(pokemon)))
        .catch( error => alert(error.message));
    }
};

export function deleteSearch(value){
    return {
        type: 'DELETE_SEARCH',
        payload: null
    }
};

export function getPokemonById(id) {
    return function(dispatch) {
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then(response => {
            if(response.status !== 200){
                throw new Error('Pokemon no encontrado');
            } else {
                return response.json();
            }})
        .then((pokemon) => dispatch(getPokemonResponse(pokemon)))
        .catch( error => alert(error.message));
    }
};

export function postCreatePokemon(dataPokemon, totalPokemons) {
    return function(dispatch) {
        fetch('http://localhost:3001/pokemons/create', {
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(dataPokemon)
            })
        .then(response => {
            if(response.status !== 200){
                throw new Error('Error al crear el pokemon');
            } else {
                return response.json();
            }})
        .then((pokemon) => {
            dispatch(getPokemons(totalPokemons));
            return pokemon})
        .then((pokemon) => alert(`Pokemon '${pokemon.name}' creado`))
        .catch( error => alert(error.message));
    }
};

export function toDbOrApi(value){
    return {
        type: 'DB_OR_API',
        payload: value
    }
}
