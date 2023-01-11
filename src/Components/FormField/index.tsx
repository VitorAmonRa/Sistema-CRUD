import React, { Children } from 'react';

import { Container, Field, Form, InputText, Label, Select } from './styles';

const FormField = () => {
  return (
    <>
      <Container>
        <Form>
          <Field>
            <Label>Equipamentos</Label>
            <InputText  type="text" name="equipments" id="equipments" required/>
          </Field>
          <Field>
            <Label>Situação</Label>
            <Select name="equipments" id="equipments">
              <option value="empty"></option>
              <option value="Liberado">Liberado</option>
              <option value="não-liberado">Não Liberado</option>
              <option value="reserva">Reserva</option>
              <option value="em-liberação">Em Liberação</option>
            </Select>
          </Field>
          <button>Enviar</button>
        </Form>
      </Container>
    </>
  );
}

export default FormField;