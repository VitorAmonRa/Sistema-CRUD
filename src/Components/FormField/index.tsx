import React from 'react';

import { Container, Field, Form, Input, Label } from './styles';

const FormField: React.FC = () => {
  return (
    <>
      <Container>
        <Form>
          <Field>
            <Label>ADSA</Label>
            <Input/>
          </Field>
        </Form>
      </Container>
    </>
  );
}

export default FormField;