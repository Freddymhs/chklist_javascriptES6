//! practicando algo de intevals
let interval =2000;
setInterval(() => {
  console.log('practica de un interval!')
}, interval);

// ! inteval + clearIntervallimpiando + save ref to interval in memory
let intervalId;    // contiene el INTERVALO
function sayHello(){
  runCount++;
  if (runCount >= 5){ // maximo 5 vueltas
   clearInterval(intervalId);  //?  si llegamos a 5 CLEAR INTERVALOS!
  }
  console.log('sayHello'); // mensaje de la funcion
}
let runCount=0;
intervalId= setInterval(sayHello,1000); // funcion y tiempo + intervalId => stop it!


// ! interval + clearInterval + this
function sayHello(){
  runCount++;
  if (runCount >= 5){ // maximo 5 vueltas
   clearInterval(this);  //?  si llegamos a 5 CLEAR INTERVALOS!
  }
  console.log('sayHello'); // mensaje de la funcion
}
let runCount=0;
setInterval(sayHello,1000); // funcion y tiempo



