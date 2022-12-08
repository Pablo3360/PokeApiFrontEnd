
export function validate(value, inputName) {
  let error = '';
  switch (inputName) {
    case 'name':
      if (!/^[A-Z]*$/i.test(value)) {
        error = 'Nombre invalido (solo letras)';
      } else {
        error = '';
      }
      return error;
    
    case 'typeId': 
      if (!/^\d+$/i.test(value)) {
        error = 'Tipo es invalido';
      } else {
        error = '';
      }
      return error;

    case 'img': 
    if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value)) {
      error = 'Invalido';
    } else {
      error = '';
    }
    return error;
    
    default: 
      if (!/^\d*$/i.test(value)) return error = 'Invalido. Solo numeros [0-100]';
      if(value > 100 || value <0) return error = 'Invalido. [0-100]';
      return error='';

  }
};

// *: 0 o más ocurrencias del caracter anterior.
// +: 1 o más ocurrencias del caracter anterior.
// \d: dígitos ([0-9])
// i: no distingue entre mayúsculas y minúsculas.