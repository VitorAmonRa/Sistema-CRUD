import styled from "styled-components";

export const ContainerNav = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 70px;
  
`;

export const MainDiv = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;
  background-color: #F58A07;
`;

export const Title = styled.h1`
  padding: 0 0 0 10px;
`;
export const DivNav = styled.div`
  display: flex;
  height: 70px;
  padding: 20px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0 30px;
  padding: 20px 40px;
 /*  width: 80px;
  height: 40px; */
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
`;
