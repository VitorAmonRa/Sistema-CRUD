import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContainerNav, MainDiv, Title, DivNav, Button } from "./styles";
import { async } from "@firebase/util";

export const Navbar = (data) => {
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
  return (
    <>
      <ContainerNav>
        <MainDiv>
          <Title>Admin Page</Title>
          <DivNav>
            <Button><Link to="../../Pages/InterfacePage" target="_blank">Interface</Link></Button>
            <Button onClick={handleLogOut}>Logout</Button>
          </DivNav>
        </MainDiv>
      </ContainerNav>
    </>
  );
};

export default Navbar;
