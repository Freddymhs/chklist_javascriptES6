(function init() {
  console.log('iniciado!!!!');
})();

//! spread = PROPAGADOR , SEPARA , ROMPE
nums = [1, 5, 6, 7, 1, 2, 3, 6];
lets = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// uniendo arrays
let algo = [...nums, ...lets];
console.log(algo);

// uninedo objetos
let persona = { name: 'freddy', edad: 27 },
  mascota = { name: 'boby' };
let mezclado = { ...persona, ...mascota }; //corrupted

// uninenod objetos con diferentes nombres
// let {name:nombrePersona,edad:edadPersona}  = persona; // mezclado
// let {name:nombreMascota} = mascota; // mezclado
// let qt = {nombrePersona, nombreMascota, edadPersona}; // mezclado
// let qt = { ...({ name } = persona) };
// let {name} = persona
// console.log(edad);

//! rest = EMPAQUETAR , UNE , PEGA
// s rest  permite representar ELEMENTOS => ARRAY
// ?ejemplo 1
let datosSueltos = [1,2];
let empaquetado =[...datosSueltos,3]; //**

// ?ejemplo 2 , COMO PARAMETRO
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
let sumSPREAdD = sum(1,2,3,4,5,6,7,8,9,10);
console.log(sumSPREAdD); //**

// ?ejemplo 3 , DESESTRUCTURANDO UN REST 
function multi(algo ,...[altura,ancho,profundidad]){
    console.log(`destructurado contenia ${altura} x ${ancho} x ${profundidad}.`);
    console.log(algo);
}
multi(v="hola mundo" , h="100",w="20",p="40");

// ?ejemplo 4 , DESESTRUCTURANDO  contenido
function sortArguments(...arguments)  {
  return arguments.sort();
}
console.log(sortArguments(5,3,7,1));
console.log(sortArguments([5,3,7,1]));
console.log(sortArguments({5:5,3:3,7:7,1:1}));


// ?ejemplo 5 , LA SUPER DESESTRUCTURACION creando nuevos arrays
function desestructurador3000(a,b,c,...[algo,...[resto,...papas]]){
console.log(a); // un valor desestructurado
console.log(b); // otro valor desestructurado
console.log(c); // otro mas desestructurado
console.log(algo); //el resto lo meti en un ARRAY y saco UNA PARTE
console.log(resto);
console.log(papas);
}
console.log(desestructurador3000(1,2,3,"freddy",()=>{},{},{},[]));


// ?ejemplo 6 , LA SUPER DESESTRUCTURACION creando nuevos objetos
// quiero crear un array dentro de un objeto mientras voy desestructurando :v
function desestructurador4000(a,p,o,i,u,y,t,...[b,c,d,e,f,g,...{...objeto}]){
  console.log(a,p,o,i,u,y,t);
  console.log(b,c,d,e,f,g);
  console.log(objeto); //los objetos encesitan su indice
 
}
console.log(desestructurador4000(..."holamundo desestructurando cosas aqui"));
