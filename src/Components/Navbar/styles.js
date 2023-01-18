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
  background-color: #A0C1D1;
  padding: 0 0 25px 0;
`;

export const Title = styled.h1`
  padding: 10px 0 0 10px;
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
export const DivNav = styled.div`
  display: flex;
  height: 70px;
  padding: 20px;
  text-decoration: none;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0 30px;
  padding: 20px 40px;
  font-size:17px;
  font-weight: bold;
  border: 2px solid black;
  color:black;
  text-decoration: none;
  cursor: pointer;
  a{
    text-decoration: none;
    color: inherit;
  }
  &:hover{
      border: 3px solid black;
    }
`;


