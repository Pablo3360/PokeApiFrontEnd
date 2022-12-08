import Card from './Card.jsx';
import style from'../styles/Cards.module.css';
import { useState, useEffect } from 'react';

export default function Cards ({ showPokemonsOk, getPokemon }) {

  const totalItems = showPokemonsOk.length;
  const itemsPerPage = 10;
  const lastPage = Math.ceil(totalItems/itemsPerPage);

  const [ showPokemonsPage, setShowPokemonsPage ] = useState([ ...showPokemonsOk].splice( 0, itemsPerPage));
  const [ currentPage, setCurrentPage] = useState( 0 );

  const nextHandler = ()=>{
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPerPage;
    if( firstIndex >= totalItems) return;
    setShowPokemonsPage( [ ...showPokemonsOk].splice( firstIndex, itemsPerPage) );
    setCurrentPage(nextPage);
  };

  const prevHandler = ()=>{
    const prevPage = currentPage - 1;
    if(prevPage < 0) return;
    const firstIndex = prevPage * itemsPerPage;
    setShowPokemonsPage( [ ...showPokemonsOk].splice( firstIndex, itemsPerPage) );
    setCurrentPage(prevPage);
  };

  useEffect( ()=> {
    setShowPokemonsPage([ ...showPokemonsOk].splice( 0, itemsPerPage));
    setCurrentPage( 0 );
  }, [showPokemonsOk]);

  return (
    <>
      <div className={style.pagination}>

        <p>Pokemons encontrados: {totalItems}</p>

        <div className={style.buttons}>
          <button onClick={prevHandler}>Anterior</button>
          <button disabled>{currentPage + 1}/{lastPage}</button>
          <button onClick={nextHandler}>Siguiente</button>
        </div>
        
      </div>
      
      <div className={style.cards} >
        {
            showPokemonsPage.map( p =>
              <Card
              key={p.id}
              name = {p.name}
              types = {p.types}
              attack = {p.attack}
              img = {p.img}
              getPokemon={getPokemon}
              />
            )
          }
      </div>
    </>  
  );
};
