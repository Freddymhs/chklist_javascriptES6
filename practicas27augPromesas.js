// !callback
// operacion(params, function(err, nice) {
//     if (err) {
//         return err
//     } else { // ningun error -> otra consulta
//         operacion2(params, function(err, nice)) {
//             if (err) {
//                 return err
//             } else { // ningun error -> carga pantalla principal
//                 operacion3(whateverParams, function(err, nice)) {
//                     if (err) {
//                         return err
//                     } else {
//                         let data = nice;
//                         operacionfinal(function(data) {
//                             const {
//                                 token
//                             } = data;
//                             if (token != undefined) {
//                                 return 'este callbacl hell esta completado';
//                             }

//                         })
//                     }
//                 }
//             }
//         }
//     }
// })


// !promises   .then
// operaciones.busqueda()
// .then(operaciones.preparlo(){return algo})
// .then(operaciones.reseteando(){return otra cosa})
// .then()
// .then(operaicones.actualizando(){return completado})
// .then(operaicon.terminar(){return listoOno})
// .catch(err => console.log(err))

// async await
// try{
// let preparado = await queseyo();
// let resetado =  await metodorandom();
// let actualizado = await otrocosa();
// let temino = await algo();
// }catch(e){
//   console.log(e);
// }
