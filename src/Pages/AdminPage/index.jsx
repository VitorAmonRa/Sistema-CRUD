import React, { useState, useEffect } from "react";
import Global from "../../GlobalStyle/Global";

import { Container , ContainerForm, Field, Form, InputText, Label, Select,ButtonSection, ModalSection, ModalDiv } from "./styles";
import Navbar from "../../Components/Navbar";
import { addDoc, collection, doc, setDoc, deleteDoc, onSnapshot, orderBy, query, deleteField } from "firebase/firestore";
import { db } from '../../services/firebaseConnection';
import { toast } from "react-toastify";
import { async } from "@firebase/util";


export const AdminPage = () => {
  const [equipments, setEquipments] = useState('');
  const [situation, setSituation] = useState({});
  const [equipmentsModal, setEquipmentsModal] = useState([]);


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
          created:doc.data().created 
        })
      })
      setEquipmentsModal(list)
    })
  },[])
  
  async function handleDelete (id){
    const docRef = doc(db,"Equipamentos",id)
    toast.success("Equipamento deletado com sucesso")
    await deleteDoc(docRef)
  
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!situation ){
      toast.error("Selecione uma opção")
      return
    }
    
    // Adicionando equipamentos ao banco de dados
     addDoc(collection(db,"Equipamentos"),{
      name:equipments,
      situation: situation,
      created: new Date()
      }).then(() => {
        setEquipments("")
        setSituation("")
        console.log("Equipamento registrado")
      })
      .catch((error) => {
        console.log("Erro ao cadatrar" + error)
        toast.error("Error")
      })
  }



  return (
    <>
      <Global />
        <Container>
          <Navbar />
          <ContainerForm>
            <Form onSubmit={handleSubmit}>
              <Field>
                <Label>Equipamentos</Label>
                <InputText  
                type="text" 
                name="equipments" 
                id="equipments" 
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                required
              />
              </Field>
              <Field>
                <Label>Situação</Label>
                <Select name="equipments" id="equipments" value={situation} onChange={(e) => setSituation(e.target.value)}  >
                  <option value="empty">Selecione uma opção</option>
                  <option value="Liberado">Liberado</option>
                  <option value="não-liberado">Não Liberado</option>
                  <option value="reserva">Reserva</option>
                  <option value="em-liberação">Em Liberação</option>
                </Select>
              </Field>
              <ButtonSection>
                <button type='submit'>Enviar</button>
              </ButtonSection>
            </Form>
              {equipmentsModal.length > 0 ? (
              <ModalSection>
                <ModalDiv>
             {equipmentsModal.map((item,index) => (
                 <>  
                  <div key={index}>
                    <p>{item.name}</p>
                    <button onClick={() => handleDelete(item.id)}>X</button>
                  </div>
                 </>
              ))}
                </ModalDiv>
              </ModalSection>) : (<></>)}
          </ContainerForm>
        </Container>
    </>
  );
}
