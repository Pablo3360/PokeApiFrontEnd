import style from '../styles/Filters.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon, toFilterByType, toOrder, toDbOrApi } from '../redux/actions.js'
import FilterType from './FilterType';
import FilterOrder from './FilterOrder';
import FilterDB from './FilterDB';
import Search from './Search.jsx';

export default function Filters ( {pokemon} ) {

	const types = useSelector( state => state.types);
	const filterByType = useSelector( state => state.filterByType);
	const order = useSelector( state => state.order);
	const dbOrApi = useSelector( state => state.dbOrApi);

	const dispatch = useDispatch();

	return(
		<div className={style.filters}>

			<h3>Buscar Pokemon</h3>

			<Search 
				getPokemon={(value)=>dispatch(getPokemon(value))}
			/>

			<h3>Filtros</h3>
			
			<FilterType 
				types={types} 
				filterByType={filterByType}
				toFilterByType={(value)=>dispatch(toFilterByType(value))}
				pokemon={pokemon} 
			/>

			<FilterDB 
				dbOrApi={dbOrApi}
				toDbOrApi={ (value)=>dispatch(toDbOrApi(value))}
				pokemon={pokemon}
			/>
			
			<FilterOrder 
				order={order} 
				toOrder={(value)=>dispatch(toOrder(value))} 
				pokemon={pokemon}
			/>

		</div>
	);
};