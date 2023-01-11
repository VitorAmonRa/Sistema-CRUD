import React from 'react';

import { Container, Field, Form, InputText, Label } from './styles';

const FormField: React.FC = () => {
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
            <InputText id='situation' name='situation'/>
          </Field>
        </Form>
      </Container>
    </>
  );
}

export default FormField;