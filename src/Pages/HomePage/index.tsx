import React from "react";
import Global from "../../GlobalStyle/Global";

import { Container } from "./style";
import Navbar from "../../Components/Navbar";
import FormField from "../../Components/FormField";

export const HomePage: React.FC = () => {
  return (
    <>
      <Global />
        <Container>
          <Navbar/>
          <FormField/>
        </Container>
    </>
  );
};
