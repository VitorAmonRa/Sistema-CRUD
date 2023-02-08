import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-height:100vh;
  width: 100%;
  height: 100vh;
  background-color: grey;
`;
export const ContainerForm = styled.div`
  display:flex;
  flex-direction: column;
  position:relative;
  justify-content:center;
  align-items:center;
  width: 100%;
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
    padding: 20px 0 ;
    width:100%;
    height:100vh;
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
  font-size: 22px;
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
export const Select = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 19px;
  margin-top: 10px;
  width:100%;
  height:100vh;
  max-width: 700px;
  max-height: 30px;
  font-weight: bold;
  cursor: pointer;
  div{
    margin: 20px 0;
    input{
      margin: 10px;
      padding: 5px;
      background-color:#333638;
      color:#fff;
      cursor: pointer;
      &:checked + label{
            border-color: rgb(51, 122, 183);
        }
    }
    label{
      cursor:pointer;
    }
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
export const ModalSection = styled.section`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  max-width:800px;
  max-height:200px;
  width:100%;
  height: 100vh;
  padding: 10px;
  margin: 18px 0;
  border: 2px solid black;
  border-radius: 5px;
  background-color:#A0C1D1;
`
export const ModalDiv = styled.div`
  width:100%;
  height: 100vh;
  max-height: 200px;
  color:#fff;
  overflow-y: scroll;
  ::-webkit-scrollbar-thumb{
      background-color: #A0C1D1;
      border: 2px solid black;
      cursor:pointer;
    }
    ::-webkit-scrollbar{
      border: 2px solid black;
      background-color:#fff;
      color:black;
      cursor:pointer;
    }
  div{
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color:grey;
    padding: 10px 0;
    margin: 10px;
    border: 2px solid black;
    p{
      font-size: 18px;
      padding: 0 10px;
    }
    button{
      font-weight:bold;
      border:2px solid black;
      padding:6px;
      cursor: pointer;
      padding: 5px;
      margin: 0 8px;
    }
   
  }
`

