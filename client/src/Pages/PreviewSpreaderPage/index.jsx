import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {Image, SectionOne, SituationOfEquipments, Title, EquipmentsList,Main,Footer} from './styles';
import { Burger } from '../../Components/Burger'

export const PreviewPage = () => { 

  const [equipments, setEquipments] = useState([])
  const navigate = useNavigate();
  
/*   useEffect(() => {
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
  },[]) */
  
  const localizaçãoSpreader = equipments.filter(equipments => equipments.situation == "LocalizaçãoSpreader")
  return (
    <>
    <Image>
      <Main> 
        <Burger/> 

        <SectionOne>
          <SituationOfEquipments style={{
                borderColor:""
              }}>
            <Title>
              <h1>Localização dos Spreaders</h1>
            </Title>
            <EquipmentsList>
              <div><li>RT01 = <textarea> </textarea></li></div>
              <div><li>RT10 = <textarea> </textarea></li></div>
              <div><li>RT02 = <textarea> </textarea></li></div>
              <div><li>RT11 = <textarea> </textarea></li></div>
              <div><li>RT03 = <textarea> </textarea></li></div>
              <div><li>RT12 = <textarea> </textarea></li></div>
              <div><li>RT04 = <textarea> </textarea></li></div>
              <div><li>RT13 = <textarea> </textarea></li></div>
              <div><li>RT05 = <textarea> </textarea></li></div>
              <div><li>RT14 = <textarea> </textarea></li></div>
              <div><li>RT06 = <textarea> </textarea></li></div>
              <div><li>RT15 = <textarea> </textarea></li></div>
              <div><li>RT07 = <textarea> </textarea></li></div>
              <div><li>RT16 = <textarea> </textarea></li></div>
              <div><li>RT08 = <textarea> </textarea></li></div>
              <div><li>RT17 = <textarea> </textarea></li></div>
              <div><li>RT09 = <textarea> </textarea></li></div>
              <div><li>RT18 = <textarea> </textarea></li></div>
            </EquipmentsList>
          </SituationOfEquipments>
        </SectionOne>
       <Footer>
          <p>Developed by Vitor Amon-Rá Fernandes</p>   
       </Footer>
        </Main>
      </Image>
    </>
  );

}


export default PreviewPage;


