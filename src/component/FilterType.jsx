
export default function FiltroType ({ types, filterByType, toFilterByType, pokemon }) {
  return(
    <form>
      <label htmlFor="types">Tipo: </label>
      <select name='types' 
        defaultValue={ filterByType } 
        onChange={ (e) => { toFilterByType(e.target.value) } } 
        disabled={ pokemon? true : false }
      >
        <option value='' key='all' >Todos</option>
        {
          types.map( t => 
            <option value={t.name} key={t.id} >
              { t.name }
            </option>
          )
        }
      </select>
    </form>
  );
};