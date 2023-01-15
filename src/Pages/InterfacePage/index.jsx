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
      console.log("alo",equipments)
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
            <EquipmentsList >
              {equipments.filter(element => element === "Liberado") ? (
                equipments.map((item,index)=>(
              <li key={index}>
                {item.name}
              </li>
             ))): (null)}
            </EquipmentsList>
          </SituationDivs>
          <SituationDivs>
            <Title>
              <h1>Em Liberação</h1>
            </Title>  
            <EquipmentsList>
            {equipments.filter(element => element === "não-liberado") ? (
                equipments.map((item,index)=>(
              <li key={index}>
                {item.name}
              </li>
             ))): (null)}
            </EquipmentsList>
          </SituationDivs>
          <SituationDivs>
            <Title>
              <h1>Não Liberados</h1>
            </Title>
            <EquipmentsList>
            {equipments.filter(element => element === "em-liberação") ? (
                equipments.map((item,index)=>(
              <li key={index}>
                {item.name}
              </li>
             ))): (null)}
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


