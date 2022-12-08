
export default function SortPokemons(showPokemons, order){

  if(order === 'default'){
    function SortPokemonsById(x, y){
      if (x.id < y.id) {return -1;}
      if (x.id > y.id) {return 1;}
      return 0;
    }
    return showPokemons.sort(SortPokemonsById);
  };
  
  if(order === 'AZ'){
    function SortPokemonsAlfabeticamenteAZ(x, y){
      if (x.name < y.name) {return -1;}
      if (x.name > y.name) {return 1;}
      return 0;
    }
    return showPokemons.sort(SortPokemonsAlfabeticamenteAZ);
  };
  
  if(order === 'ZA'){
    function SortPokemonsAlfabeticamenteZA(x, y){
      if (x.name > y.name) {return -1;}
      if (x.name < y.name) {return 1;}
      return 0;
    }
    return showPokemons.sort(SortPokemonsAlfabeticamenteZA);
  };

  if(order === 'ASC_ATTACK'){
    function SortPokemonsAscAttack(x, y){
      if (x.attack < y.attack) {return -1;}
      if (x.attack > y.attack) {return 1;}
      return 0;
    }
    return showPokemons.sort(SortPokemonsAscAttack);
  };

  if(order === 'DES_ATTACK'){
    function SortPokemonsDesAttack(x, y){
      if (x.attack > y.attack) {return -1;}
      if (x.attack < y.attack) {return 1;}
      return 0;
    }
    return showPokemons.sort(SortPokemonsDesAttack);
  };
};


