import React, { useState } from 'react';

import { Container, SectionOne, SectionTwo, SituationDivs, SituationDivs2, Title} from './styles';

export const InterfacePage = (data) => {
  console.log("Interface",)
  return (
    <>
      <Container>
        <SectionOne>
          <SituationDivs>
            <Title></Title>
          </SituationDivs>
          <SituationDivs>{}</SituationDivs>
          <SituationDivs>adaasdfa</SituationDivs>
        </SectionOne>
        <SectionTwo>
          <SituationDivs2></SituationDivs2>
          <SituationDivs2></SituationDivs2>
        </SectionTwo>
      </Container>
    </>
  );

}


export default InterfacePage;


