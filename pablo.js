const main = () => {
  
  //I )DESTRUCTURACION
  
  const singleCompetition = {
    name: "Liga Oeste",
    season: "Apertura 2019",
    strikers: [
      ["Gonzalo De Jourdan", 9],
      ["Renzo Elgueta", 11],
      ["Anacleto Silva", 6],
    ],
    cards:{red:3,yellow:5}
  }
  
  //1. Destructure nombre de la competición
  const {name} = singleCompetition;
  //2. Destructure temporada poniendole otro nombre
  const {season:temp} =singleCompetition;
  //3. Destructure el nombre primer goleador
  const {strikers:[[n],,[p]]} = singleCompetition;
  //const {strikers} = singleCompetition;
  //const [first] =strikers;
  //const [primero] =first;
	
  const {strikers:[,[,goals]]} = singleCompetition;
  const {cards} = singleCompetition;
  const {yellow} = cards;
  const {cards:{yellow:amarillo}} = singleCompetition;
  //
  //  const {name,season,...all} = singleCompetition;  // this works !
 //
 // 
    const competitions = [
  {
    name: "Liga Norte",
    season: "Clausura 2019",
    strikers: [
      ["Saracho", 8],
      ["Italo Donoso", 10],
      ["Anacleto Silva", 5],
    ],
  },
  {
    name: "Liga Sur",
    season: "Apertura 2019",
    strikers: [
      ["Cliford Vergara", 5],
      ["Yerko Trufello", 6],
      ["Yerri Montalva", 12],
    ],
  },
  {
    name: "Liga Este",
    season: "Apertura 2020",
    strikers: [
      ["Carlo Laguna", 14],
      ["Brayan Halnodey", 7],
      ["Eriberto Butragueño", 10],
    ],
  },
]; 
// II) Manejo de arreglos
//   1. Retorne arreglo solo con los nombres de las competiciones
//   2. Retorne solo temporadas del 2019
//   3. Retorne todas las competiciones con un nuevo atributo: "completeName" que sea el name + la season 
//   (ejemplo primera competicion "Liga Norte - Apertura 2019")
//   4. BONUS: retorne todas las competiciones con nuevo atributo totalGoals usando map y reduce
//   (ejemplo primera competicion: 23)
const competitionsNames  = competitions.map(({name})=> name);
const competitionsFiltered  = competitions.filter((el)=> el.season == "Apertura 2019");
const competitionsFiltered2  = competitions.filter(({season})=> season === "Apertura 2019");
const competitionsFiltered3  = competitions.filter(({season})=> season.includes('2019'));
const fulll =   competitions.map((el)=> ({completeName:el.name+el.season,...el}));
//                     							rest                 								  spread
const fulll2 =   competitions.map(({name,season,...rest})=> ({name,season,completeName:`${name} ${season}`,...rest})); 
//const allComp = competitions.map((el) => {
//     [...el].reduce((e)=> e.totalGoals )
//});

const allComp = competitions.map((el) => {
 const totalGoals = el.strikers.reduce((acc,[,goals])=> acc += goals ,0);
 //const totalGoals = el.strikers.reduce((acc,strikerInfo)=> acc += strikerInfo[1] ,0);
 return {...el,totalGoals};
});
  
// 
let arrayDeObjetos = competitions.map((objeto)=>{
  // retornar todos los objetos + un nuevo atributo que tenga el total de goles

  return {...objeto,totalGoals = "99"}; // se separa el objeto y se agrega una prop;
})

console.log(arrayDeObjetos);
// 
  
}



 main();







// III. SQL
// https://media.discordapp.net/attachments/689872935703674904/864186997107195934/unknown.png
//en base al schema
//1) NECESITO SABER LOS PRIMEROS 10 NOMBRES DE EMBARQUES Y SU ETD


//2) NECESITAMOS SABER TODOS LOS EMBARQUES QUE NO TENGAN CONTENEDOR


//3. BONUS) NECESITO LA CANTIDAD DE EMBARQUES AGRUPADOS POR FECHA DE SALIDA

