
const initialState = {
  totalPokemons: 50,
  pokemons: [],
  types: [],
  filterByType: '',
  order: 'default',
  dbOrApi: 'all',
  pokemon: null
};

const rootReducer = function (state = initialState, action){
  switch (action.type){
    case 'GET_POKEMONS_RESPONSE':
      return {
        ...state,
        pokemons: action.payload
      }
    case 'GET_TYPES_RESPONSE':
      return {
        ...state,
        types: action.payload
      }
    case 'FILTER_BY_TYPE':
      return {
        ...state,
        filterByType: action.payload
      }
    case 'ORDER':
      return {
        ...state,
        order: action.payload
      }
    case 'GET_POKEMON_RESPONSE':
      return {
        ...state,
        pokemon: action.payload
      }
    case 'DELETE_SEARCH':
      return {
        ...state,
        pokemon: action.payload
      }
    case 'DB_OR_API':
      return {
        ...state,
        dbOrApi: action.payload
      }
    default:
      return { ...state };
  }
};

export default rootReducer;