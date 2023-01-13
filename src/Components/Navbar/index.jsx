import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { NavLink, useNavigate } from "react-router-dom";
import { ContainerNav, MainDiv, Title, DivNav, Button } from "./styles";
import { async } from "@firebase/util";

const Navbar = (data) => {
  const navigate = useNavigate();

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  function handleSwitch (data) {
    const props = data
    console.log("BotaoInterface",data) 
    navigate("/InterfacePage")
    
  }

  return (
    <>
      <ContainerNav>
        <MainDiv>
          <Title>Home Page</Title>
          <DivNav>
            <Button onClick={() => handleSwitch(data)}>Interface</Button>
            <Button onClick={handleLogOut}>Logout</Button>
          </DivNav>
        </MainDiv>
      </ContainerNav>
    </>
  );
};

export default Navbar;
