import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  max-width: 100%;
  min-height:100vh;
  width: 100%;
  height: 100vh;
  background-color: #D5D5D5;
  
`;
export const ButtonEmail = styled.span`
 /*  display:flex;
  flex-direction: column;
  position:relative; 
  justify-content:center;
  align-items:center;
  width: 100%;
  max-width: 100px;
  height:100vh;
  max-height:50px;
  top: 5rem;
  left: 50%;
  transform:translate(-50%,-50%); */
`;
export const ContainerForm = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100vh;
`;
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    max-width:900px;
    max-height:500px;
    width:100%;
    height:100vh;
`;
export const Field = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    max-height:100px;
    height:100%;
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
  max-width: 60%;
  max-height: 40%;
  padding: 13px;
  word-wrap: break-word;
  cursor: pointer;
  &:hover{
      border: 2px solid black;
    }
 /*  @media (max-width:1920px) {
    height: 20px;
  } */
`
export const Select = styled.select`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60%;
  height:40%;
  font-weight: bold;
  cursor: pointer;
  span{
    display: flex;
    width:100%;
    height:100%;
  }
  option { 
    display: flex;
    font-size:1rem;
    align-items:center;
    padding:0px 8px;
  }
  @media (max-width:626px) {
    font-size:9px;
  }

`
export const ButtonSection = styled.div`
  display:flex;
  justify-content:space-around;
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
      background-color:red;
      color:#fff;
    }
  }
  @media (max-width:1920px) {
    button{
      max-width: 150px;
      padding: 15px;
      font-size: 15px;
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
 /*  padding: 10px; */
/*   margin: 0 0 10px 0; */
  border: 2px solid black;
  border-radius: 5px;
  background-color: black;
  .modal-div{
    width:100%;
    height: 100vh;
    max-height: 400px;
    color:#fff;
    overflow-y: scroll;
    ::-webkit-scrollbar-thumb{
        background-color: red;
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
      border: 4px solid black;
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
  }:hover{
    max-height:700px;
    max-width:1000px;
    position:absolute;
    transition: linear;
    .modal-div{
      max-height:90vh;
      transition: max-height 1s linear;
      button{
        padding:5px 20px;
      }
    }
  }
`
export const LabelChecked = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 3rem;
  cursor: pointer;
`;

export const Switch = styled.div`
position: relative;
width: 60px;
height: 32px;
background: #b3b3b3;
border-radius: 32px;
transition: 300ms all;
&:before {
    transition: 300ms all;
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 35px;
  top: 50%;
  left: 4px;
  background: white;
  transform: translate(0, -50%);
}
`;

export const InputChecked = styled.input`
  display: none;
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: green;
    
    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
export const PreviewMessage = styled.div`
  display:flex;
  justify-content:center;
  height:20vh;
  width:100%;
  max-width:40rem;
`;
