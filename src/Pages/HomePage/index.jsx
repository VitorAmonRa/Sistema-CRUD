import React, { useState } from "react";
import Global from "../../GlobalStyle/Global";

import { Container , ContainerForm, Field, Form, InputText, Label, Select,ButtonSection } from "./styles";
import Navbar from "../../Components/Navbar";
import { addDoc, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../services/firebaseConnection';
import { toast } from "react-toastify";


export const HomePage = () => {
  const [equipments, setEquipments] = useState('');
  const [situation, setSituation] = useState({});

  const handleSubmit = (e) =>{
    e.preventDefault();

    // Adicionando equipamentos ao banco de dados

    if(situation === ""){
      toast.error("Selecione um campo")
      return
    }

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
                required
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
              />
              </Field>
              <Field>
                <Label>Situação</Label>
                <Select name="equipments" id="equipments" value={situation} onChange={(e) => setSituation(e.target.value)}>
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
          </ContainerForm>
        </Container>
    </>
  );
}
