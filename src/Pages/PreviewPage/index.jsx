import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth } from '../../services/firebaseConnection';
import { db } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { GrUserAdmin } from 'react-icons/gr'
import { Container, SectionOne, SectionTwo, SituationOfEquipments, BackupOfEquipments, Title, EquipmentsList} from './styles';
import { Burger } from '../../Components/Burger'

export const PreviewPage = () => { 

  const [equipments, setEquipments] = useState([])
  const navigate = useNavigate();
  
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
  })
  const equipamentosNãoLiberados = equipments.filter(equipments => equipments.situation == "não-liberado")
  equipamentosNãoLiberados.forEach(equipments => {
  })
  const equipamentosEmLiberação = equipments.filter(equipments => equipments.situation == "em-liberação")
  equipamentosNãoLiberados.forEach(equipments => {
  })
  const equipamentosReservas = equipments.filter(equipments => equipments.situation == "reserva")
  equipamentosReservas.forEach(equipments => {
  })    
  const equipamentosProximoDia = equipments.filter(equipments => equipments.situation == "proximo-dia")
  equipamentosProximoDia.forEach(equipments => { 
  })    

  let date = new Date()
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;

  let data = day + "/" + month

  return (
    <>
      <Container>
        <Burger/> 
        <SectionOne>
            {equipamentoLiberado.length > 9 ? (
            <>
              <SituationOfEquipments>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
              {equipamentoLiberado.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </SituationOfEquipments>
            </>
            ) : (
            <>
            <SituationOfEquipments style={{ maxHeight: "100%", height: "400px"}}>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
            {equipamentoLiberado.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
            </SituationOfEquipments>
            </>
            )}
         {equipamentosEmLiberação.length > 9 ? (
            <>
              <SituationOfEquipments>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
              {equipamentosEmLiberação.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </SituationOfEquipments>
            </>
            ) : (
            <>
            <SituationOfEquipments style={{ maxHeight: "100%", height: "400px"}}>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
            {equipamentosEmLiberação.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
            </SituationOfEquipments>
            </>
            )}
          {equipamentosNãoLiberados.length > 9 ? (
            <>
              <SituationOfEquipments>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
              {equipamentosNãoLiberados.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </SituationOfEquipments>
            </>
            ) : (
            <>
            <SituationOfEquipments style={{ maxHeight: "100%", height: "400px"}}>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
            {equipamentosNãoLiberados.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
            </SituationOfEquipments>
            </>
            )}
        </SectionOne>
        <SectionTwo>
          <BackupOfEquipments>
            <Title><h1>Spreader's Reservas</h1></Title>
            <EquipmentsList >
              {equipamentosReservas.map((item,index) => (
                 <>  
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </BackupOfEquipments>
          <BackupOfEquipments>
            <Title><h1>Prévia do Proximo dia -- {data}</h1></Title>
            <EquipmentsList >
              {equipamentosProximoDia.map((item,index) => (
                 <> 
                 <div>
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                 </div>
                 </>
              ))}
            </EquipmentsList>
          </BackupOfEquipments>
        </SectionTwo>
      </Container>
    </>
  );

}


export default PreviewPage;


