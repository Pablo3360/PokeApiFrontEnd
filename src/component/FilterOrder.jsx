
export default function FilterOrder ({ order, toOrder, pokemon }) {
  return(
    <form>
      <label htmlFor="order">Orden: </label>
      <select name='order' 
        defaultValue={ order } 
        onChange={ (e) => toOrder(e.target.value) } 
        disabled={ pokemon? true : false } 
      >
        <option value='default' key={1} >Por defecto</option>
        <option value='AZ' key={2} >AZ</option>
        <option value='ZA' key={3} >ZA</option>
        <option value='ASC_ATTACK' key={4} >Asc Ataque</option>
        <option value='DES_ATTACK' key={5} >Des Ataque</option>
        
      </select>
    </form>
  );
};

