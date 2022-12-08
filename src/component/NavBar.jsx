
import { NavLink } from 'react-router-dom';
import style from '../styles/NavBar.module.css';

function Navegacion () {

  return(
      <header className={style.header}>

        <div className={style.logo}>
          <NavLink to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt='Logo Pokemon' /></NavLink>
        </div>

        <nav>
          <ul className={style.navLinks}>
            <li><NavLink to='/pokedex/create'>Crear Pokemon</NavLink></li>
          </ul>
        </nav>
      
      </header>
  );
};

export default Navegacion;