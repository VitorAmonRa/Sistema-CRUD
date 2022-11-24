import React from "react";
import Global from "../../GlobalStyle/Global";

import { Container } from "./style";
import Navbar from "../../Components/Navbar";

export const HomePage: React.FC = () => {
  return (
    <>
      <Global />
      <Container>
        <Navbar />
      </Container>
    </>
  );
};
