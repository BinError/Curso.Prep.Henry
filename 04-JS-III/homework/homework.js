// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  indice = array.length - 1;
  return array[indice];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for(var i = 0; i < array.length ; i++){
    array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var mensaje = "";
for(var i = 0; i < (palabras.length -1); i++){
mensaje += palabras[i] + " ";
}
mensaje += palabras[palabras.length -1];

return mensaje;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var contador = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] === elemento){
      contador++;
    }
  }
  return (contador > 0);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for(var valor in numeros){
    total += parseInt(numeros[valor],10);
  }
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0;
  var divisor = resultadosTest.length;
  for(var valor in resultadosTest){
    total += resultadosTest[valor];
  }
  return total / divisor;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var valorMasGrande = null;
  for (var valor in numeros){
    if(valorMasGrande <= numeros[valor]){
      valorMasGrande = numeros[valor];
    }
  }
  return valorMasGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var misArgumentos = 1;
  switch(arguments.length){
    case 0: return 0;

    case 1: return arguments[0];
    
    default: for(var indice in arguments){
      misArgumentos *= arguments[indice];
    } 
  }
  return misArgumentos;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayorA18 = 0;
  for(var esMayorQue18 in arreglo){
    if(arreglo[esMayorQue18] > 18){
      mayorA18++;
    }
  }
  return mayorA18;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 2 
    || numeroDeDia === 3 
    || numeroDeDia === 4 
    || numeroDeDia === 5 
    || numeroDeDia === 6){
      return "Es dia Laboral";
  } else return "Es fin de semana";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nuevaString = n.toString(10);
    return nuevaString[0] == 9;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var contador = 0;  
  for(var valor in arreglo){
    if(arreglo[valor] === arreglo[0]){
      contador++
    }
  }
  return contador === arreglo.length;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesOrdenados = [];
  var control = 0;
  for(var valores in array){
    if(array[valores] === "Enero" 
    || array[valores] === "Marzo" 
    || array[valores] === "Noviembre"){
      mesesOrdenados.push(array[valores]);
      control++;
    }
    
  }
  if(control === 3){
    return mesesOrdenados;
  } else return "No se encontraron los meses pedidos";

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresQue100 = [];
  for(var esMayorQue100 in array){
    if( array[esMayorQue100] > 100){
      mayoresQue100.push(array[esMayorQue100]);
    }
  }
  return mayoresQue100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var status = 0;
  var devolverCadaValorMas2 = [];
  for(var i = 0; i < 10; i++){
    numero += 2;
    if( numero === i){
      status=1;
      break;
    }else devolverCadaValorMas2.push(numero);
  }
  if (status === 0) {return devolverCadaValorMas2;}
  else return "Se interrumpió la ejecución";

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var valoresAumentadosEn2SalvoQuintaIteracion = [];
  for(var i = 0; i < 10; i++){
    if(i === 4){
      continue;
    }
    numero += 2;
    valoresAumentadosEn2SalvoQuintaIteracion.push(numero);
  }
  return valoresAumentadosEn2SalvoQuintaIteracion;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
