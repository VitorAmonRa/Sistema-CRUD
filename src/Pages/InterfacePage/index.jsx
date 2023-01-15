import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { Container, SectionOne, SectionTwo, SituationDivs, SituationDivs2, Title, EquipmentsList} from './styles';

export const InterfacePage = () => {
  
  const [equipments, setEquipments] = useState([])

 

  useEffect(() => {
    const equipmentsRef = collection(db,"Equipamentos")
    const queryRef = query(equipmentsRef,orderBy("created","asc"))

    const unsub = onSnapshot(queryRef,(snapshot) => {
      let list = []
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name:doc.data().name,
          situation:doc.data().situation
        })
      })
      setEquipments(list)
    })
  },[])
  
  const equipamentoLiberado = equipments.filter(equipments => equipments.situation == "Liberado")
      equipamentoLiberado.forEach(equipments => {
        /* console.log(equipamentoLiberado) */
      })
  const equipamentosNãoLiberados = equipments.filter(equipments => equipments.situation == "não-liberado")
      equipamentosNãoLiberados.forEach(equipments => {
        console.log("nAO LIBERADO",equipamentosNãoLiberados)
      })
      const equipamentosEmLiberação = equipments.filter(equipments => equipments.situation == "em-liberação")
      equipamentosNãoLiberados.forEach(equipments => {
        console.log("EM LIBERAÇÃO",equipamentosEmLiberação)
      })
      
      async function handleDelete (id){
        const docRef = doc(db,"Equipamentos",id)
        await deleteDoc(docRef)
      }
  return (
    <>
      <Container>
        <SectionOne>
          <SituationDivs>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList >
              {equipamentoLiberado.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                    <button onClick={() => handleDelete(item.id)}>X</button>
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </SituationDivs>
          <SituationDivs>
            <Title>
              <h1>Em Liberação</h1>
            </Title>  
            <EquipmentsList>
            {equipamentosEmLiberação.map((item,index) => (
                <>  
                <li key={index}>
                  {item.name}
                  <button onClick={() => handleDelete(item.id)}>X</button>
                 </li>
                </>
              ))}
            </EquipmentsList>
          </SituationDivs>
          <SituationDivs>
            <Title>
              <h1>Não Liberados</h1>
            </Title>
            <EquipmentsList>
            {equipamentosNãoLiberados.map((item,index) => (
              <>
                <li key={index}>
                  {item.name}
                  <button onClick={() => handleDelete(item.id)}>X</button>
                </li>
              </>
              ))}
            </EquipmentsList>
          </SituationDivs>
        </SectionOne>
       {/*  <SectionTwo>
          <SituationDivs2></SituationDivs2>
          <SituationDivs2></SituationDivs2>
        </SectionTwo> */}
      </Container>
    </>
  );

}


export default InterfacePage;


