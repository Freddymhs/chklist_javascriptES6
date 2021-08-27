const { EDEADLK } = require("constants");

(function(){console.log('el 20%')})();

// ?domino estos temas ? 
// **arrow funcions?
function normal(){}
const arrow = ()=>{}

// **destructurgin arrays y objects
const buildings = [{
    name: 'alon',
    floors: [{
            floor: 1,
            office: "Reception"
        },
        {
            floor: 13,
            office: "KLog",
            people: [{
                    name: "Anthony",
                    title: "CCO",
                    juegos: [{
                        pc: 'master race',
                        grafica: '5600tx'
                    }, {
                        consolas: ['ps4', 'switch', 'xbox']
                    }]
                },
                {
                    name: "Janan",
                    title: "CEO",
                    elementos: [{
                        planta: 'bambu',
                        mascota: {
                            name: 'gatito',
                            age: '4 anios',
                            otro: `sdasda`,
                            color: 'cafesito' //todo obtener
                        }
                    }]
                },
            ]
        }
    ]
}]
let [{floors:[,{people:[{},{elementos:[{mascota:{color:elcolor}}]}]}]}] = buildings; //! destructuring super duper nested!
console.log(elcolor)

// ** default parameteres y destructuring defaults
function mostrar(persona){
  let {age = "aaa",job = "bb"} =  persona || {}; //! asignar default params
  console.log(age);
  return (age);
}
console.log('mostrar(null):',mostrar(null));

// ?rest y spread
function rest(...losArgumentos){ //!rest conviert elementos a un array
losArgumentos.map((r)=>{console.log(r)});
}
rest(1,2,3,4,5,6,7,8,9,);


function spread(q,w,e,r,t,y){ 
  console.log(q);
  console.log(w);
  console.log(e);
  console.log(r);
  console.log(t);
  console.log(y);
}

let contenido = [1,"d",true,{}];
spread(...contenido); //!spread es poner un array despadazado :o

let location = {name: 's',aniversary: '1',city : 'xq' }
let time = {hour:'s',min: '1',seconds : 'xq' };
let places = [home='chile', destiny='usa',lovely='mexico'];

let generado = {...time , ...location} // ! spread genera un objecto
let generadoar = [...places,...places];
let generadormix1 =  [...places,{...time},...places]
let generadormix2 =  {...location , ['nuevaprop'] :[...places] ,time}
console.log('================================================================');
console.log(generado);
console.log(generadoar);
console.log(generadormix1);
console.log(generadormix2);
console.log('================================================================');

// ?concise literals
// !closuses
(function(){
    console.log('hola')
})()

// closure son funcioens dentro de otras funciones
// una closure guarda las referencias a un scope superior
// un ambito congelado en el tiempo
// el closure es la funcion que se vincula al scope superior 
// el Clousure es una caracteristica del javascript, y debo conocerlo porque existe en muchos lados

// stack con pop push show ! HACERLO
// funciones anidadas e imprimir el ultimo con su valor de su propio scpope
const micontador =(function(){
    let _contadorPrivado = 0;
    function incrementar(){_contadorPrivado++};
    function mostrar(){console.log(_contadorPrivado)}

    return {incrementar , mostrar}
})();

const mycounter =function(){
    let _contadorPrivado = 0;
    function incrementar(){_contadorPrivado++};
    function mostrar(){console.log(_contadorPrivado)}

    return {incrementar , mostrar}
}
mycounter();
micontador();



// ?arrays y filtros
// !promises
// !async await


// 2da unidad penultimo video

// set arrays de valores unicos


const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));