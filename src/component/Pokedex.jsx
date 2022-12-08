
import Filters from "./Filters";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";
import style from '../styles/Pokedex.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSearch } from '../redux/actions.js';

function Pokedex () {

  const pokemon = useSelector( state => state.pokemon );
  const dispatch = useDispatch();

  return(
    <div className={style.pokedex}>

      <Filters pokemon={pokemon}/>

      { pokemon? <Pokemon pokemon={pokemon} dispatch={()=> dispatch(deleteSearch())} /> : <PokemonList /> }

    </div>
  )

};

export default Pokedex;