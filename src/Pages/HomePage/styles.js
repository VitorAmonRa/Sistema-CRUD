import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
`;
export const ContainerForm = styled.div`
  display:flex;
  position:relative;
  justify-content:center;
  align-items:center;
  width: 100%auto;
  max-width: 1000px;
  height:100vh;
  max-height:700px;
  border: 3px solid black;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
`;
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    max-width:800px;
    max-height:600px;
    width:100%;
    height:100%;
    /* background-color:gray; */

`;
export const Field = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 18px 0 40px 0;
    margin: 18px 0;
    border: 2px solid black;
    border-radius: 5px;
`;
export const Label = styled.label`
  font-size: 25px;
  font-weight: bold;
  padding: 5px;
`;
export const InputText = styled.input` 
  font-size: 15px;
  width:100%;
  height:100vh;
  max-width: 400px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  &:hover{
      border: 2px solid black;
    }
`
export const Select = styled.select`
  font-size: 17px;
  width:100%;
  height:100vh;
  max-width: 400px;
  max-height: 30px;
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  option{
    font-weight: bold;
    background-color:#333638;
    color:#fff;
    cursor: pointer;
  }
  &:hover{
      border: 2px solid black;
      cursor: pointer;
    }
`
export const ButtonSection = styled.div`
  display:flex;
  justify-content:space-evenly;
    button{
      display:flex;
      justify-content:center;
      align-items:center;
      padding: 20px 0;
      margin: 20px;
      font-size: 20px;
      font-weight: bold;
      width: 100%;
      height:100vh;
      max-width: 210px;
      max-height: 30px;
      cursor: pointer;
      border: 2px solid black;
      border-radius: 5px;
    &:hover{
      background-color:#A0C1D1;
    }
    }
` 
