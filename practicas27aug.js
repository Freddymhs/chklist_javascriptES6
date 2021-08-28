// ** seccion 1
// default params
// ?desutrcutiring defaults

function defaultParams(p){  console.log(p);}

//basicamente imprimimos lo que sea que mandemos
defaultParams('texto');
defaultParams(3);
defaultParams(null);
defaultParams(undefined);
defaultParams(false);
defaultParams(true);
defaultParams([]);
defaultParams({});

//si mi funicon necesita desestructurar algo? . el enviado podria ser algo

let complex = [1,2,3,4,5,6,{},[],aqui={listadoPersonas:[{huamno:"freddy" , perro:'boby'},{huamno:undefined, perro:'bob'}]}]

function defaultDestruct([,,,,,,,,{listadoPersonas:[_,{huamno="humano-default"}]}]){console.log(huamno); }
defaultDestruct(complex);

// !funcion que desestructura un array  y me gustaria que regresara algo por defecto
let contenido = [monitor='asus',torre='supertorre',set='razer' ,setalt='logitech'];
function defaultDestructArrNull(array=[]){
  // en caso de que lelga undefined
      // let [a,b,d,ultimo="era undefined pero se definio arrriba"] = array;
      // console.log(ultimo);
  // en caso de que llega null
      //  let [a,b,c,d,ultimo ="parchado!!"] = array || [];
      //  console.log(ultimo);
  // en caso de que venga un array vacio
    // let [a="sda",ultimo="1231213"] = array;
    // console.log(ultimo);
  // flujo normal
    let [a,b,c,d,ultimo] = array;
    console.log(ultimo);
}
// defaultDestructArrNull([1,'a','01','k','0']);
// defaultDestructArrNull([]);
// defaultDestructArrNull(null);
defaultDestructArrNull(undefined);
// defaultDestructArrNull(contenido);
// defaultDestructArrNull('texto');
// defaultDestructArrNull(3);
// defaultDestructArrNull(undefined);
// defaultDestructArrNull(false);
// defaultDestructArrNull(true);
// defaultDestructArrNull([]);
// defaultDestructArrNull({});
// defaultDestructArrNull();
// defaultDestructArrNull(null);
// defaultDestructArrNull([9,9,9,9,9,9,1])

// !funcion que desestructura datos de un objeto y si no existen los define por default
function defaultDestructObjNull(objeto={}){
  let {monitor="default",torre="default",set="s",setalt="a"} = objeto;
  console.log('debo mostrar los datos que vienen de fuera')
  console.log(monitor,torre,set,setalt);
}
let partes = {undefined,torre:'originalRazer',set:'original' ,setalt:'original'}; // objeto creado
defaultDestructObjNull(partes); // se enviar datos

// **seccion 2
// rest
// spread
// ?objetos literales
let letters = ['a','b','c','d','e','f','g','h','i','j'];
let number  = [1,2,3,4,5,6,7,8,9,10,];
let booleans = [true, false, false,true,false,false,false,false,false,false];
let raros = [null,undefined , null , undefined , null, undefined];
let objetospr = {a1:'v1',a2:'v2'}
let parte = {a3:'v3',a4:'v4'} 
// rest , para separar un array
// spread , para unificar elementos

let todo = letters.forEach(e=>{return e})
console.log(todo);



// ** seccion 3

// !closures
// arrays func expresivas
// !Promises
// !`async/await


let numerosrandom = Array(200000).fill(7);
let qqq =numerosrandom.map(x=>x)

console.log('qqq',qqq);






