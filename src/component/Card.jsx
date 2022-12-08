
import style from '../styles/Card.module.css';

export default function Card ({ name, types, attack, img, getPokemon}) {
    return (
      <div className={style.card}>

        <h5 className={style.cardTitle}>{name}</h5>

        <img src={img} alt={`Pokemon ${name}`} onClick={ ()=> getPokemon(name)}/>

        <div className={style.cardData}>

          <div className={style.types}>
            {
              types.map( (type, index) => 
                <p key={index}>
                  { type.name }
                </p>
              )
            }
          </div>
          
          <div className={style.attack}>{attack}</div>
          
        </div>
      </div>
    );
};
