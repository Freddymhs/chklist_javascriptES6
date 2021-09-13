//! STRINGS includes,concat,startWidth , replace , trim
// ?includes
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// busca un STRING desde ALGUNA POSICION, true o false
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(
`================================================
encontramos la palbra ${word}
resultado = ${sentence.includes(word) ? 'SI' :'NO'} 
================================================`
);


let whereStart =0;
console.log(`
${"boby".includes('bob')}
${"boby".includes('bob',whereStart)}
`)

console.log("1".includes(''));

// ?,concat
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// concatena UNO o MAS elementos a UN STRING y regresa la COMBINACION
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
console.log(str2.concat('_-_', str1));
console.log(str2.concat('_-_', ...[1,2,3,4])); // hace un spread
console.log(str2.concat('_-_', ...'pepito'));  // hace spread
console.log(str2.concat('_-_', ...'pepito',[9,8,7,6]));  // hace spread
console.log(str2.concat('_-_', 1,2,3,4));      // contatenados con COMAS
console.log(str2.concat('_-_', +2));           // + a string parece ser nada...invisible
console.log(str2.concat('_-_', [1,2,3,4]));    // agrega los elementos con COMAS
console.log(str2.concat('_-_', null));         // transformado a string
console.log(str2.concat('_-_', !![]));         // true transformado a string
console.log(str2.concat('_-_', ()=>{},1 ,"gg","EZZZ"));       // funcion transofrmado a string

// ? ,startWidth , 
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// busca un STRING al COMIENZO o en ALGUNA POSICION , true o false , CASE SENSITYVE
let untextoSimple = '                                    Saturday night  plans';
console.log(untextoSimple.startsWith('Sat'));
console.log(untextoSimple.startsWith('rday night', 4));
console.log(untextoSimple.startsWith('Sat', 100));

// ? replace 
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// replaza el PRIMER MATCH , regresa nuevo string , case sensitive
console.log(untextoSimple.replace('plans',()=>'___________ rsultado de una funcion alv!'));
console.log(untextoSimple.replace('plans','PLANES y mas texto nuevo :O :D :P'));
console.log(untextoSimple.replace(/plans/i,'usando regex tambien funciona :O'));


// ?, trim
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// elimina espaciso en blanco a los EXTREMOS
console.log(untextoSimple.trim());

//! ARRAYS concat,every,find,includes,join,map,push,reduce,some,sort
// ?concat
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// une a un ARRAY uno o mas  , regresa un array nuevo
const arrayPrincipal = ['a', 'b', 'c'];
const array2 = ["letras", "spanglich" , ['d', 'e', 'f'], [1,[2,[3]]]] 
let  [primeros,segundos,terceros] = array2; // destructuracion

console.log(arrayPrincipal.concat([array2]))
console.log(arrayPrincipal.concat(array2[0],array2[1],array2[2])); // *
console.log(arrayPrincipal);

// ?every
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// determinan si todos los elementos de un array complen una condicion , regresa true o false, every no modifica array
const mismaLetra = ['a', 'a', 'a'];
function callbackEvery(elemento, indice, arrreglo){
return elemento === 'a';
}[this];

console.log(arrayPrincipal.every(callbackEvery));
console.log(mismaLetra.every(callbackEvery));
// arr.every(callback(element[, index[, arr]])[, thisArg])
// element= elemento actual
// index = indice del array que vamos a recorrer
// array = arreglo sobre el cual fue llamado el every
// thisArg = valor para usar como THIS


// ?find
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// regresa el PRIMER MATCH del elemento en formato VALOR y sino regresa undefined  
const numeritos =[77,88,99];
function callbackFind(elemento, indice, arrreglo){
  return elemento >= 99;
}[this];
console.log(numeritos.find(callbackFind)); //

// ?includes
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// busca si un arreglo tiene algun ELEMENTO , regresa true o false , camelcase
let abecedario = ['a','b','c','d','e','f','g','h','i','a'];
console.log(abecedario.includes('a'));   //true
console.log(abecedario.includes('b', 2)); // false
console.log(abecedario.includes('a', -400)); // true
(function() { // arguments palabra reservada que se da al IFFE
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');

// ?join
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una nueva cadena y devuelve esta cadena.
// une todos los elementos nuevos a los existentes y regresa STRING , si algun elemento es null o undeined regresa cadena vacia
let cajas = ['mercadolibre','ubereats','pedidosya'];
console.log(cajas.join()); //s
console.log(cajas.join(['+', '-','=']));
console.log(cajas.join(null));
console.log(cajas.join(undefined));
console.log(cajas.join());         //
 
//! ARRAY=>TEXT=>ARRAY AGAIN ! :O 
var arr = ['80', '9', '700', 40, 1, 5, 200];

let texxto = arr.join(","); // let texxto = arr.toString(""); //*texto
console.log(texxto.split(',')); //* array
console.log(texxto.split()); //


// ?,map,
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// crea un nuevo array con resultados del CALLBACK que aplica sobre cada elemento usando su indice, el indice debe tener un valor asignado , nuevos elementos agregados post map (indice+value) no eran procesados
let listadoDeNumeros = [1, 2,3,4];
function callbackMap(currentValue, index, array){  
   console.log(index)
   console.log(array)
   return currentValue * 2;
}

let resultadoMultiplicados = listadoDeNumeros.map(callbackMap);
console.log(resultadoMultiplicados); // 


console.log(resultadoMultiplicados.map(Math.abs)); //  :O que bonito lo mini que es
console.log(resultadoMultiplicados.map(Math.sqrt)); //  :O que bonito lo mini que es
console.log(resultadoMultiplicados.map(Math.tanh));
console.log(resultadoMultiplicados.map((elemento)=>Math.sqrt(elemento)));
console.log(resultadoMultiplicados.map(function(elemento){return Math.sqrt(elemento)}));

// ?push
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// agrega un elemento al final del array y regresa la LONGITUD de este
const animals = ['pigs', 'goats', 'sheep']; // 
animals.push('dogs'); //
console.log(animals.push('horses','dunkys'));//eleme
console.log(animals)//

// ?,reduce,
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// ejecuta una funcion sobre cada elemento , devolviendo un valor unico
console.log(resultadoMultiplicados.reduce(function(acc,el){return acc =+ el},0));  //


// ?some  
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// revisa si alguno de los elementos comple la condicion con la funcion proporcionada , regresa true o false
// si un elemento fuese alterado por el callback antes de ser iterado este tendra el valor original y no el editado
const arreglesSome = [1,2,3];
// const callbackSome = () => ;
function callbackSome(element,index,arregloActual){
console.log(index)
console.log(arregloActual)
return element % 2 === 0;
}[this];

console.log(arreglesSome.some(callbackSome)); // true! 1 != 0 , el resto si es = 0

// ?,sort.
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// ordenacion de los elementos de un arreglo , regresa el array ordenado, sort 
// sin callback = convierte a string y compara con codificación Unicode
// con callback = 
//      ( a<b = -1 || A estara a la izquierda de B )
//      (a>b = 1)  || A estara a la derecha de B
//      (a === b  = 0 || A no tiene cambio de posicion)

let paraLaOrdenacion =[null,undefined,()=>{},[],{objeto:true},7,9,4,1,'a','b','c'];
console.log(paraLaOrdenacion.sort());

console.log(paraLaOrdenacion);


console.log(['banana','Cherry',9,80].sort());
console.log([9,80].sort());
console.log(['banana','Cherry'].sort());
console.log(['10 word', '1 word'].sort());


var arr = ['80', '9', '700', 40, 1, 5, 200];
function callbackComparar(a, b) { return a - b};

console.log(arr.join());
console.log(arr.sort(callbackComparar));
console.log('ordenado sin función:', arr.sort());






