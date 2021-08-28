// !aca vamos APRENDER LOS METODOS DE ITERAICON QUE EXISTEN!

const isBelowThreshold = currentValue => currentValue > 0; //funcion
const array1 = [1, 30, 39, 29, 10, 13]; //array

let res = array1.every(isBelowThreshold);
console.log(res);


// **of , determinaque elementos tendria dentro
let algunos = Array.of(11,22,33,44,55,66);
// let algunos = [11,22,33,44,55,66]
algunos.push(1)
algunos.push(2)
algunos.push(3)
algunos.push(4);
algunos.push(5);
algunos.push(6);
console.log(algunos);

// **find , regresa el primero que complua la condicion y es regresado como un numero basico
// find buscar 1 elemento.
let encontrar = algunos.find((x)=> x > 22);
console.log(encontrar);

// findIndex , regresa la posicion del elemento buscado
let whatIndex = algunos.findIndex(x => x == 66 );
console.log(whatIndex);

// **filter , regresa un array con lo encontrado del filtro
// Filter filtra usando una funcion (acepta funcion)
let filtrados = algunos.filter(x => x>55)
console.log(filtrados);

// **forEach , of y fill 
let arrrrr = Array.of(8,7,5,4,3,1).fill(0);
console.log(arrrrr);

algunos.forEach(x => arrrrr.push(x));
arrrrr = arrrrr.slice(6); // quita los que estan desde index 6 en adelante
arrrrr.splice(0,9, ...'freddy'); // quita los 9 primeros y agrega esto
console.log(arrrrr);
arrrrr.splice(0, 3, 'Python');
console.log(arrrrr); // quita desde pos 1 hasta 2 pasos y agrega esto

// **every ,  los revisa todos y dice si es true  o false
let acusados = algunos.every(x => x < 0);
console.log(acusados);

// **MAP permite crear nuevo arreglo luego de alguna operacion (acepta funcion)
algunos = algunos.map(x => x*3.14);
console.log(algunos); 

// **REDUCE para sumar arreglaos , indexar elementos con reduce por alguna prop ,aplanar un array nesteado
let reducidos = algunos.reduce((acc,el)=> acc+el,0)
console.log(reducidos);


