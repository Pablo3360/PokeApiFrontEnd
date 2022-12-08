
export default function FilterDB ({dbOrApi, toDbOrApi, pokemon}) {
    return(
      <form>
        <label htmlFor="src">Origen: </label>
        <select name='src' 
          disabled={ pokemon? true : false } 
          onChange={ (e) => toDbOrApi(e.target.value) } 
          defaultValue={ dbOrApi } 
        >
          <option value='All' key='1' >Todos</option>
          <option value='DB' key='2' >BD</option>
          <option value='API' key='3' >API</option>
        </select>
      </form>
    );
  };