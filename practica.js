(function () {
   console.log('practicando para mi checklist de ma;ana');
})();

// arrow function
const arrow = ()=>{console.log('similar to regular function')};
arrow();
// destructuring nested arra y obj
const buildings = [
  {
    name: 'alon',
    floors: [
      {
        floor: 1,
        office: "Reception"
      },
      //...
      {
        floor: 13,
        office: "KLog",
        people: [
          {name: "Anthony", title: "CCO"},
          {name: "Janan", title: "CEO"},
        ]
      }
    ]
  }
]

let [{name,floors:[a,{office}]}] = buildings;
console.log(office); 

// defaykt parameters y destructuring default
function Default(estado='soy un default param !!'){
    console.log(estado);
}
Default();

// spread, toma array y separarlos
let toSpread = ['hola','mundo','con','spread'];
console.log(...toSpread); // 'hola mundo sin array'
let otroSpread = [...toSpread]
console.log(otroSpread);
console.log(...otroSpread);

// rest , recibe datos y arrayficalos
let p ="p";
let r ="r";
let m ="m";
function show(...restInFunc){
    restInFunc.map((r)=>{
        console.log(r);
    });
}
show(p,r,m);

//// consice literals
let objectoLiteral = {
    precio:200,
    unidad:92
};

// closures
// closure es similar a las clases que protegen las propiedades de esta encapsulacion/function
// closure es la encapsulacion de 'propiedades,vars,func,..etc' que son accededias si se regresa con return


// arrays (reduce,map,filter,find)

let reduceme = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70];
let reducido = reduceme.reduce((acc,el)=> acc + el   ,0);
console.log(reducido)


// promises

function promesa1() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('se resolvio con exito la primera promesa'); // regresara
        }, 3000);
    });
}

let promesa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("¡se resolvio con exito para segunda promesa!"); // regresara
        }, 1000);
    })
}

const promesa3 = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`se resolvio con exito para tercera promesa en ${t}`); // regresara
    }, t)
  })
}


    promesa1().then(r=>console.log(r))
    promesa2().then(r=>console.log(r))
    promesa3(1300).then(r=>console.log(r))

    Promise.all([promesa1(), promesa2(), promesa3(3200)]).then(values => {
    console.log(values); // todos los resultados juntos a la vez
    });

    Promise.race([promesa1(),promesa2(),promesa3(20)]).then(values=>{
        console.log(values);
    })






// https://www.youtube.com/watch?v=8x_Flw1YP0A
// async/await