// practicando cosas con el Map

// tipos de datos que puedo usar ? Boolean , Null , Undefined , Number , BigInt , String , Symbol , Object
const myMap = new Map();
myMap.set('primero',1);
myMap.set('segundo',2);
myMap.set('tercero',3);
myMap.set('cuarto',4);
console.log(myMap);

let unElemento = myMap.get('cuarto');
console.log(unElemento);

myMap.delete('cuarto');
console.log(myMap.size)

console.log(myMap)

// !iteraicon nested!
let mapreducido = new Map([...myMap].map((v,i)=> [v,'nested!'] ));
console.log(mapreducido)

// !nested
// let mapreducido = new Map(
//   [...myMap] //se seprara como array
//   .map((x)=>console.log(x))
//   );



// new Set([...mySet].map((v,i)=>`${i} ===== ${v}`));
// let nrosreducidos = numeros.reduce((acc,el)=> ([...acc,nombre='f',elemento=el]) ,[])
// console.log(nrosreducidos)

// !add


// !remove


// !paso de SET a ARRAY => SET y asi podriamos usar reduce filter map y otros


// !array rapido!!!
console.log(myMap); // normal MAP
let arr = Array.from(myMap);
console.log(arr);   // fomarto de array

var asociativo = new Array();
asociativo['one'] = 1;
asociativo['two'] = 2;
asociativo['three'] = 3;


console.log(asociativo);

var coche = {color:"rojo",CV:100,AC:true};
console.log(coche)