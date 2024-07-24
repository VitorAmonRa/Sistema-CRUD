import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContainerNav, MainDiv, Logo, DivNav, Button } from "./styles";

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
          <Logo/>
          <DivNav>
          <Button>
              <Link 
              to="PreviewSpreaderPage" 
              relative="path"
              >Spreader Page
              </Link>
              </Button>
            <Button>
              <Link 
              to="PreviewPage" 
              relative="path"
              >Preview Page
              </Link>
              </Button>
            <Button onClick={handleLogOut}>Logout</Button>
          </DivNav>
        </MainDiv>
      </ContainerNav>
    </>
  );
};

export default Navbar;
