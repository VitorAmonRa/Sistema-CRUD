import React, { useState} from 'react';
import {useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseConnection';
import { toast } from 'react-toastify';
import { 
  Container,
  Form,
  Field,
  LoadingPage
} from './styles';

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassoword] = useState("")
  const navigate = useNavigate();
  
const handleLogin = (e) =>{
  e.preventDefault();

  if(email === '' || password === ''){
    toast.error("Preencha todos os campos")
    return
  }
  signInWithEmailAndPassword(auth, email , password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(userCredential)
      toast.success("Bem-vindo")
      navigate("/", {replace:true})
    })
    .catch((error) => {
      toast.error("Email ou senha incorreta")
    })

}

  return(
    <Container>
      <Form onSubmit={handleLogin}>
        <h1>Faça seu login aqui</h1>
        <p>teste@teste123.com</p>
        <p>123123</p>
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
        <button type="submit" > Entrar </button>
      </Form>
    </Container>
  )
}    



