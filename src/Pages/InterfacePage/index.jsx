import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
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
      console.log(list)
    })
  },[])

  return (
    <>
      <Container>
        <SectionOne>
          <SituationDivs>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
              {doc.id === "Liberados"} 
              {equipments.map((item,index) => (
                <li key={index}>
                  {item.name}</li>
              ))}
            </EquipmentsList>
          </SituationDivs>
          <SituationDivs>
            <Title>
              <h1>Em Liberação</h1>
            </Title>  
            <EquipmentsList>sdada</EquipmentsList>
          </SituationDivs>
          <SituationDivs>
            <Title>
              <h1>Não Liberados</h1>
            </Title>
            <EquipmentsList></EquipmentsList>
          </SituationDivs>
        </SectionOne>
        <SectionTwo>
          <SituationDivs2></SituationDivs2>
          <SituationDivs2></SituationDivs2>
        </SectionTwo>
      </Container>
    </>
  );

}


export default InterfacePage;


