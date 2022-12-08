import style from '../styles/CreatePokemon.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { validate } from './validate.js';
import { useSelector, useDispatch } from 'react-redux';
import { postCreatePokemon, getPokemons, getTypes } from '../redux/actions';

function CreatePokemon() {

  const types = useSelector( state => state.types);
  const totalPokemons = useSelector( state => state.totalPokemons);
  const pokemons = useSelector( state => state.pokemons);
  
  let dispatch = useDispatch();

  let initialdataPokemon = { id: '', typeId: '1', name: '', health: 0, attack: 0, defense: 0, speed: 0, height: 0, weight: 0, img: ''};
  let initialError = { id: '', typeId: '', name: '', health: '', attack: '', defense: '', speed: '', height: '', weight: '', img: ''};

  let [ dataPokemon, setdataPokemon] = useState(initialdataPokemon);
  let [ error, setError ] = useState(initialError);

  function handleChange(event){

    setdataPokemon( dataPokemon => { 
      return {
        ...dataPokemon, 
        [event.target.name]: event.target.value
      }}
    );

    setError( error => { 
      return {
        ...error, 
        [event.target.name]: validate(event.target.value, event.target.name)
      }}
    );
  };

  function handleSubmit(event) {
    event.preventDefault();

    dataPokemon.id = [...pokemons].pop().id + 1;

    if(dataPokemon.name && dataPokemon.typeId){
      dispatch( postCreatePokemon(dataPokemon, totalPokemons) ); 
    } else{
      alert('Faltan datos obligatorios');
    }
  };

  useEffect( ()=> {
    dispatch(getPokemons(totalPokemons));
    dispatch(getTypes());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.createPokemon}>

      <h1>Crear Pokemon</h1>

        <form className={style.contenedor} onSubmit={(e) => handleSubmit(e)}>

          <div className={style.element}>
            <label htmlFor='name'>Nombre: <span>{error.name}</span></label>
            <input
              type='text'
              name='name'
              autoComplete='off'
              placeholder='nombre...'
              value={dataPokemon.name}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.element}>
            <label htmlFor='typeId'>Tipo: <span>{error.typeId}</span></label>
              <select name='typeId' onChange={ (e) => handleChange(e) } >
                {
                  types.map( type => 
                    <option value={type.id} key={type.id} >
                      { type.name }
                    </option>
                  )
                }
              </select>
          </div>

          <div className={style.element}>
            <label htmlFor='health'>Vida: <span>{error.health}</span></label>
              <input
                type='number'
                name='health'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.health}
                onChange={(e) => handleChange(e)}
              />
          </div>

          <div className={style.element}>
            <label htmlFor='attack'>Ataque: <span>{error.attack}</span></label>
              <input
                type='number'
                name='attack'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.attack}
                onChange={(e) => handleChange(e)}
              />
          </div>

          <div className={style.element}>
            <label htmlFor='defense'>Defensa: <span>{error.defense}</span></label>
              <input
                type='number'
                name='defense'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.defense}
                onChange={(e) => handleChange(e)}
              />
          </div>

          <div className={style.element}>
            <label htmlFor='speed'>Velocidad: <span>{error.speed}</span></label>
              <input
                type='number'
                name='speed'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.speed}
                onChange={(e) => handleChange(e)}
              />
          </div>

          <div className={style.element}>
            <label htmlFor='height'>Altura: <span>{error.height}</span></label>
              <input
                type='number'
                name='height'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.height}
                onChange={(e) => handleChange(e)}
              />
          </div>

          <div className={style.element}>
            <label htmlFor='weight'>Peso: <span>{error.weight}</span></label>
              <input
                type='number'
                name='weight'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.weight}
                onChange={(e) => handleChange(e)}
              />
          </div>

          <div className={style.element}>
            <label htmlFor='img'>Imagen: <span>{error.img}</span></label>
              <input
                type='text'
                name='img'
                autoComplete='off'
                placeholder=''
                value={dataPokemon.img}
                onChange={(e) => handleChange(e)}
              />
          </div>
          
          <div className={style.element}>
            <button type="submit">Guardar</button>
          </div>

        </form>

      <div className={style.image}>
        <img src='https://art.pixilart.com/2b223ed39f2f2de.png' alt='Creando Pokemon' />
      </div>

      <div className={style.back}>
        <NavLink to='/pokedex'><button>Volver a Pokedex</button></NavLink>
      </div>
      
    </div>
  );
  }
  
export default CreatePokemon;