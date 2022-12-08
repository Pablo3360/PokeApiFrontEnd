import style from '../styles/Pokemon.module.css';

export default function Pokemon ({pokemon, dispatch}) {
    return(
      <div className={style.pokemon}>

        <div className={style.name}>
          <h5>{pokemon.name}</h5>
        </div>

        <div className={style.img}>
          <img src={pokemon.img} alt={`Pokemon ${pokemon.name}`} />
        </div>

        <div className={style.data}>
          <p>Vida: {pokemon.health}</p>
          <p>Ataque: {pokemon.attack}</p>
          <p>Defensa: {pokemon.defense}</p>
          <p>Velocidad: {pokemon.speed}</p>
          <p>Altura: {pokemon.height} [dm]</p>
          <p>Peso: {pokemon.weight}</p>
        </div>

        <div className={style.types}>
          {
            pokemon.types.map( (type, index) => 
              <p key={index}>
                { type.name }
              </p>
            )
          }
        </div>

        <div className={style.button}>
          <button onClick={dispatch} >Volver</button>  
        </div>
        


        
      </div>
    );
  };