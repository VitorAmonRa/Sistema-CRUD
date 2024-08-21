import { usePDF, Margin } from 'react-to-pdf';
import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

export const GeradorPDFdeEquipamento = () => {
    const [equipments, setEquipments] = useState([])
    const personalização = {
        // default is `save`
        method: 'open',
        page: {
            // margin is in MM, default is Margin.NONE = 0
            margin: Margin.SMALL,
            // default is 'A4'
            format: 'letter',
            // default is 'portrait'
            orientation: 'portrait',
         },
    }
   const { toPDF, targetRef } = usePDF(personalização);

   const equipamentoLiberado = equipments.filter(equipments => equipments.situation == "Liberado")
   
   const equipamentosEmLiberação = equipments.filter(equipments => equipments.situation == "Em-liberação")

   const equipamentosNãoLiberados = equipments.filter(equipments => equipments.situation == "Não-liberado")
  
   const equipamentosReservas = equipments.filter(equipments => equipments.situation == "Reserva")
   
   useEffect(() => {
    const equipmentsRef = collection(db,"Equipamentos")
    const queryRef = query(equipmentsRef,orderBy("created","asc"))
    
    const unsub = onSnapshot(queryRef,(snapshot) => {
      let list = []
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name:doc.data().name,
          situation:doc.data().situation,
          created: doc.data().created,
        })
      })
      setEquipments(list) 
    })
  },[])
   return (
      <div>
         <button onClick={() => toPDF()}>Equipamentos PDF</button>
         <div ref={targetRef} style={{
              position: "absolute",
              left: "-9999px",
              top: -"9999px",
              margin: "1rem",
              maxWidth:"40%",
              width:"100%",
         }}>
            <h1 style={{
               color:"green",
               borderBottom:"3px solid green",
               textAlign:"center",
            }}> Liberados</h1>
             {equipamentoLiberado.map((item,index) => (
                 <>  
                  <li style={{
                     margin:"0.7rem",
                     fontSize:"18px",
                  }} key={index}>
                    {item.name}
                  {/* <span>{JSON.stringify(item.created)}</span> */}
                  </li>
                 </>
              ))}

               <h1 style={{
               color:"#d6b10e",
               borderBottom:"3px solid #d6b10e",
               textAlign:"center"
            }}> Em Liberação</h1>
             {equipamentosEmLiberação.map((item,index) => (
                 <>  
                  <li style={{
                     margin:"0.7rem",
                     fontSize:"18px"
                  }} key={index}>
                    {item.name}
                  </li>
                 </>
              ))}

              <h1 style={{
               color:"red",
               borderBottom:"3px solid red",
               textAlign:"center"
            }}> Não liberados</h1>
             {equipamentosNãoLiberados.map((item,index) => (
                 <>  
                  <li style={{
                     margin:"0.7rem",
                     fontSize:"18px"
                  }} key={index}>
                    {item.name}
                  </li>
                 </>
              ))}



              <h1 style={{
               color:"#1E34A0",
               borderBottom:"3px solid #1E34A0",
               textAlign:"center"
            }}>  SS e SR Reservas</h1>
             {equipamentosReservas.map((item,index) => (
                 <>  
                  <li style={{
                     margin:"0.7rem",
                     fontSize:"18px"
                  }} key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
         </div>
      </div>
   )
}