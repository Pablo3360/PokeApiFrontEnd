import { useState } from 'react';

function validate(value) {
  let error = '';
  if (!/^[A-Z]*$/i.test(value)) {
    error = 'Nombre invalido (solo letras)';
  } else {
    error = '';
  }
  return error;
};

export default function Search ({ getPokemon }) {

  let [ state, setState ] = useState(''); // valor del input de type text
  let [ error, setError ] = useState('');

  function handleChange(event){
    setState(event.target.value);
    setError(validate(event.target.value));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if(!state){
      alert('Debe ingresar el nombre de un Pokemon');
    } else{
      getPokemon(state); 
    }
    
  };

  return(
      <form onSubmit={(e) => handleSubmit(e)}>

        <p>{error}</p>

        <input
          type='text'
          name='search'
          autoComplete='off'
          placeholder='nombre...'
          value={state}
          onChange={(e) => handleChange(e)}
        />
          
        <button type="submit">Buscar</button>
          
      </form>
  );
};