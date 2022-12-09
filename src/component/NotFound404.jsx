import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../redux/actions.js';
import { useEffect } from 'react';
import style from '../styles/Home.module.css';
import mimikyu from '../images/mimikyu.png';

export default function NotFound404 () {
  const totalPokemons = useSelector( state => state.totalPokemons );
  const dispatch = useDispatch();

  useEffect( ()=> {
    dispatch(getPokemons(totalPokemons));
    dispatch(getTypes());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.home}>

      <div className={style.message}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt='Logo Pokemon' />
        <h1>¡Pagina no encontrada!</h1>
        <h5>404 - Not Found</h5>
        <div className={style.entry}>
          <NavLink to='/pokedex'><button>Ir al Pokedex</button></NavLink>
        </div>
      </div>

      <img src={mimikyu} alt='Mimikyu'></img>
      
    </div>
  );
};
