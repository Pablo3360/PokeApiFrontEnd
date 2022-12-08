
import { Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Pokedex from './component/Pokedex';
import CreatePokemon from './component/CreatePokemon';
import style from './styles/global.module.css'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
function App() {

  return (
    <div className={style}>
      <Route exact path='/' render={ () => <Home/> } />
      <Route path='/pokedex' render={ () => <NavBar/> } />
      <Route exact path='/pokedex' render={ () => <Pokedex /> } />
      <Route exact path='/pokedex/create' render={ () => <CreatePokemon /> } />
    </div>
  );
}

export default App;
