import { useSelector, useDispatch } from 'react-redux';
import style from'../styles/PokemonsList.module.css';
import Cards from './Cards';
import SortPokemons from './order.js';
import { getPokemon } from '../redux/actions';

export default function PokemonList() {

  const pokemons = useSelector( state => state.pokemons);
  const filterByType = useSelector( state => state.filterByType);
  const order = useSelector( state => state.order);
  const dbOrApi = useSelector( state => state.dbOrApi);
  const totalPokemons = useSelector( state => state.totalPokemons);

  const dispatch = useDispatch();

  if(pokemons.length > 0){

    let showPokemons = [];

    if(filterByType){
      showPokemons = pokemons.filter( ({types}) => types.find( ({name}) => name === filterByType) );
    } else {
      showPokemons = pokemons;
    };

    if(dbOrApi === 'DB'){
      showPokemons = showPokemons.filter( ({id}) => id > totalPokemons );
    } else if(dbOrApi === 'API'){
      showPokemons = showPokemons.filter( ({id}) => id <= totalPokemons );
    }

    let showPokemonsOk = SortPokemons([...showPokemons], order);

    return (
      <div className={style.pokemonsList} >
        <Cards 
          showPokemonsOk={showPokemonsOk} 
          getPokemon={ (value)=> dispatch(getPokemon(value))} 
        />
      </div>
    );
    
  } else {
    return (
      <div className={style.pokemonsList} >
        Cargando Pokemones...
      </div>
    );
  };

};