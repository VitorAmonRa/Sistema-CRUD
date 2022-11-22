import React, { useCallback, useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../services/firebaseConnection'
import {useNavigate } from 'react-router-dom';
import Global from '../../GlobalStyle/Global';

import { 
  Container,
} from './style';

export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  function handleLogOut() {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login")
    }).catch((error) => {
      // An error happened.
    });
    
  }


  return(
    <>
    <Global />
        <Container>
          <div>Pagina HOME</div>
          <button onClick={() => handleLogOut()}></button>
        </Container>
    </>
  );
}


