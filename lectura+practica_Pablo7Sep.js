// ! destructuring diferente
const hola = {//
  nombre:'freddy',
  game:'cs go',
}
// ? alguien definido varaibles entre medio del codigo
let nombre = 'default';
let game = 'default';

({nombre,game} = hola); // *obtener variables ya alguien ya tenia definidas entre medio del codigo
console.log(`${nombre} le gusta jugar a ${game}`)


// ! map reduce  // en este caso vamos a regresar un campo extra llamado CANTIDADPersonajes de cada juego
let myGames = [
  {nombre:'street fighter',personajes:['ryu','chun-li']},
  {nombre:'db fighter z',personajes:['goku']},
  {nombre:'mortal kombat' , personajes:['liu kang']}
  ];
  // iteraremos cada elemnto de este array
let gamesProceced = myGames.map(
    
  function(obj){

    // elemento.reduce((acc,el)=>{acc + el.personajes.length},0)
   let cant =  obj.personajes.reduce((acc,el)=>{
    console.log(acc);
    console.log(el);
    return acc += 1;
   },0);

    // modificacion del elemento usando un reduce
    return {cantidadFighters:cant,obj};
  }
)
console.log(gamesProceced)

// ! map CONCAT sort
 
// ! map push

// ! map every

