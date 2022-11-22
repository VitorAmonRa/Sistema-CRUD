import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Form,
  Field,
  LoadingPage
} from './styles';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassoword] = useState("")

const handleLogin = (e: { preventDefault: () => void; }) =>{
  e.preventDefault();
}

  return(
    <Container>
      <Form onSubmit={handleLogin}>
        <h1>Faça seu login aqui</h1>
        <p>eve.holt@reqres.in</p>
        <p>cityslicka</p>
        <Field>
          <label htmlFor="email"> Email </label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </Field>
        <Field>
          <label htmlFor="password"> Password </label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassoword(e.target.value)}
          />
        </Field>
        <button type='button'> Entrar </button>
      </Form>
    </Container>
  )
    
}

