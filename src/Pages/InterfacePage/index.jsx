import React, { useState } from 'react';
import { Props } from '../../util/types';


import { Container, SectionOne, SectionTwo, SituationDivs, SituationDivs2, Title} from './styles';

const InterfacePage = (data) => {
  console.log("Interface", data)
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


