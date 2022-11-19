import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Form,
  Field,
  LoadingPage
} from './styles';

export const LoginPage: React.FC = () => {

  return(
    <Container>
      <Form >
        <h1>Faça seu login aqui</h1>
        <p>eve.holt@reqres.in</p>
        <p>cityslicka</p>
        <Field>
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" id="email" />
        </Field>
        <Field>
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="password" />
        </Field>
        <button type='button'> Entrar </button>
      </Form>
    </Container>
  )
    
}

