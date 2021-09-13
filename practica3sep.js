 (()=>{console.log('alv!!!')})()

// ! todo tiene balor true o false en javasript
let loQueSea=!!0;
console.log(loQueSea); 

// ** el cod IMPERATIVO convierte todo a TRUE o FALSE [if,while,for] excepto el SWITCH
// ? operadores logicos  
// ! regresaraun valor depediente del operador '|| true'  '&& false'  
console.log( !!null  || null || "contenido");
console.log( !!true && undefined && !!"contenido"); 
console.log( undefined && true && "contenido");


// ! operadores matematicos
        //   1    0    5
console.log(true+null +5);

// !operadores relacionales

console.log(!!null < 999);
console.log(!!null > 999);

// ! what that hellll
console.log(!!null >= 0); //son iguales
console.log(!!null == 0); //tenemos bolean y bolean
console.log(null == 0  ); //! WTFFFFFFF TYPE COESION
// **usando modo estricto de igualdad para evitar la coesion automatica
console.log(null === 0  );console.log(!!null === 0  ); //ESTRICT COMPARATION

// !contat
console.log('freddy' + 7);
console.log(7 + 'freddy');







