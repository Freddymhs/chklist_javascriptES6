// practicando cosas con el Set

// tipos de datos que puedo usar ? Boolean , Null , Undefined , Number , BigInt , String , Symbol , Object
const mySet = new Set(['f','r','e','d','d','y']);
// mySet.forEach(x=>console.log(x));

let numeros = [1,2,3,4,5,6,7];
let nrosreducidos = numeros.reduce((acc,el)=> ([...acc,nombre='f',elemento=el]) ,[])
// console.log(nrosreducidos)

// !add
mySet.add(99);
console.log(mySet);

// !remove
mySet.delete(99);
console.log(mySet);

// !paso de SET a ARRAY => SET y asi podriamos usar reduce filter map y otros
let otroSet = new Set([...mySet].map((v,i)=>`${i} ===== ${v}`));
console.log(otroSet);

// !array rapido!!!
let mysuperarrayusperrapidocreadopormimismo = Array.from(otroSet)
console.log(mysuperarrayusperrapidocreadopormimismo);
