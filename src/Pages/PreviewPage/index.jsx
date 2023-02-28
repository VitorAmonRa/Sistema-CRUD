import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {Image, SectionOne, SectionTwo, SituationOfEquipments, BackupOfEquipments, Title, EquipmentsList,SectionThree,Main} from './styles';
import { Burger } from '../../Components/Burger'
import imagemDois  from '../../Images/imagemDois.jpg'
import imagemUm  from '../../Images/imagemUm.jpg'

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

  const equipamentosNãoLiberados = equipments.filter(equipments => equipments.situation == "não-liberado")
  
  const equipamentosEmLiberação = equipments.filter(equipments => equipments.situation == "em-liberação")
 
  const equipamentosReservas = equipments.filter(equipments => equipments.situation == "reserva")
  
  const equipamentosProximoDia = equipments.filter(equipments => equipments.situation == "proximo-dia")

  
  return (
    <>
    <Image>
      <Main> 
        <Burger/> 

        <SectionOne>
            {equipamentoLiberado.length > 7 ? (
            <>
              <SituationOfEquipments style={{
                borderColor:"green"
              }}>
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
            <SituationOfEquipments 
            style={{ 
              maxHeight: "100%", 
              height: "400px",
              borderColor:"green"
              }}>
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
        </SectionOne>

        <SectionTwo>
        {equipamentosEmLiberação.length > 3 ? (
            <>
              <SituationOfEquipments 
              style={{
                borderColor:"yellow"
              }}>
            <Title>
              <h1>Em Liberação</h1>
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
            <SituationOfEquipments style={{ 
              maxHeight: "100%", 
              height: "200px",
              borderColor:"yellow"
              }}>
            <Title>
            <h1>Em Liberação</h1>
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
            <Title>
              <h1>Prévia do Proximo dia &rarr; 
                <input 
                type="date" 
                name="data" 
                id="data"
                />
              </h1>
            </Title>
            <EquipmentsList>
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

        <SectionThree>
        {equipamentosNãoLiberados.length > 7 ? (
            <>
              <SituationOfEquipments style={{
                borderColor:"red"
              }}>
            <Title>
              <h1>Não Liberados</h1>
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
            <SituationOfEquipments style={{ 
              maxHeight: "100%", 
              height: "400px",
              borderColor:"red"
              }}>
            <Title>
            <h1>Não Liberados</h1>
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
        </SectionThree>
        </Main>
      </Image>
    </>
  );

}


export default PreviewPage;


