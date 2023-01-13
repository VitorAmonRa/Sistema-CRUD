
import { useState } from 'react';

import { ContainerForm, Field, Form, InputText, Label } from './styles';

const FormField = () => {
  const [equipments, setEquipments] = useState('');
  const [situation, setSituation] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

   
  }
  function handleValues ()  {
    const data = {equipments, situation}
  }

  return (
    <>
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
          </Field>
          <button type='submit' onClick={handleValues}>Enviar</button>
        </Form>
      </ContainerForm>
    </>
  );
}

export default FormField;