import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import { ContainerNav, MainDiv, Title, DivNav, Button } from "./styles";

const Navbar: React.FC = () => {
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
          <Title>Home Page</Title>
          <DivNav>
            <Button>Interface</Button>
            <Button onClick={() => handleLogOut()}>Logout</Button>
          </DivNav>
        </MainDiv>
      </ContainerNav>
    </>
  );
};

export default Navbar;
