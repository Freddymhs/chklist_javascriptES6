console.log('init!');

// primitivos
let zero = 0;
let nulo = null;
let indefinido = undefined;
let string = 'texto' // true
let number = 27; // true
let boleano = true; // true
let negativo = -2; // true

// tipos objectos
let consolawtf = console.log();
let consolawut = console.log; // true
let consola = console; // true
let objeto = {}; // true
let array = []; // true
let fecha = new Date(); // true
let funcion = function() {} // true
let error = new Error(); // true
let promesa = new Promise((resolve, reject) => {}); // true
// recorrido............... el OR encuetra el true que necesita y lo regresa!!! , el resto  ni se llega a evaluar
let cadena = true && true || false || false || true || false || true || false || true || false || true || false || true || false || true || false || true || false || true || false || true || false || true || false || true;

realbolean = !!cadena;
// console.log(realbolean); //NICE!

// CADENAS
// las cadenas usando "&&" buscan algun false para regresarlo y sino existe , regresa un true
// las cadenas usando "||" buscan algun true para regresarlo y sino existe  , regresa un false

// la expresion busca reducir la comparacion a un valor de true o false, entonces regresa un valor en base si buscaba un valor true "||" o si buscaba un valor false "&&";
let cadenita1 = true && false; // FALSE
let cadenita2 = false && true; // FALSE
let cadenita3 = true && true; // TRUE
let cadenita3b = false && false; // el operador && busca un falso y por esto regresa el primero FALSE
let cadenita4 = false && false; // FALSisimo!el el && buscan un falso y el primero lo es!
let cadenita5 = false && false || true; // FALSO ? DEBERIA SER  TRUE **//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////**
let cadenita5b = false || false && true; // FALSO ? DEBERIA SER  TRUE **//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////**]
let cadenita5c = true || true && false; // FALSO ? DEBERIA SER  TRUE **//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////**
let cadenita5d = false || false && true; // FALSO ? DEBERIA SER  TRUE **//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////**
let cadenita6 = true || true; //  EL PRIMER TRUE
let cadenita7 = false || true || false; // TRUE
let cadenita8 = true && false || false; // EL SEGUNDO FALSO , falso porque la cadena evalua tambien el segundo caso y NO SOLO REGRESA LO PRIMERO QUE ENCUENTRA
let cadenita9 = true || false && false; // REGRESA PRIMER TRUE? DEBERIA EVALUAR TRUE && FALSE==FALSE 

// se debe pensar en el resultado de las operaciones y no en lo primero que regresara el && o el || 
console.log(cadenita9);

// destructuring default value
const data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo' //todo obtener esto
    }, {
        id: 2,
        name: 'bar'
    }]
};

const root = {
    leftChild: {
        l: 'lelelel',
        leftChild: {
            leftChild: null,
            rightChild: null,
            data: 42
        },
        rightChild: {
            leftChild: null,
            rightChild: 'nulisimo',
            data: 5
        }
    },
    rightChild: {
        r: '',
        leftChild: {
            leftChild: null,
            rightChild: null,
            data: 6
        },
        rightChild: {
            leftChild: 'anulado', //todo obtener esto
            rightChild: null,
            data: 7
        }
    }
};
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
                            age: "4 anios",
                            color: 'cafesito' //todo obtener
                        }
                    }]
                },
            ]
        }
    ]
}]
var car = [{
        manufacturer: "Toyota",
        vitz: ["Blue", "Hatchback"],
        corolla: ["Silver", "Sedan"],
    },
    {
        manufacturer: "Honda",
        Civic: ["White", "Hatchback"],
        city: ["Black", "Sedan"],
    }
];

let [{floors:[,{people:[,{elementos:[{mascota:{color:algo}}]}]}]}] = buildings;

console.log(algo);

console.log(0 == "0");




// let [{floors:[{},{people:[{juegos:[{},{consolas:[a,b,algo]}]},{}]}]}] = buildings;


// todos los objetos se acceden atraves del uso de propiedades