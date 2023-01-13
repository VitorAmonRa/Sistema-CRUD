import React, { useState } from "react";
import Global from "../../GlobalStyle/Global";

import { Container , ContainerForm, Field, Form, InputText, Label } from "./style";
import Navbar from "../../Components/Navbar";
import FormField from "../../Components/FormField";
import { Props } from "../../util/types";


export const HomePage = () => {
  const [equipments, setEquipments] = useState('');
  const [situation, setSituation] = useState('');
  const data = {
    equipments: "",
    situation: ""
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

   
  }
  return (
    <>
      <Global />
        <Container>
          <Navbar data={data}/>
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
                <InputText  
                type="text" 
                name="situation" 
                id="situation" 
                required
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                />
                {/* <Select name="equipments" id="equipments">
                  <option value="empty"></option>
                  <option value="Liberado">Liberado</option>
                  <option value="não-liberado">Não Liberado</option>
                  <option value="reserva">Reserva</option>
                  <option value="em-liberação">Em Liberação</option>
                </Select> */}
              </Field>
              <button type='submit'>Enviar</button>
            </Form>
          </ContainerForm>
        </Container>
    </>
  );
};
