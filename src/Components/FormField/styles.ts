import styled from 'styled-components';

export const Container = styled.div`
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
    button{
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-self: center;
      align-items:center;
      padding: 20px 0;
      margin: 20px;
      font-size:20px;
      font-weight: bold;
      width: 100%;
      height:100vh;
      max-width: 200px;
      max-height: 30px;
      cursor: pointer;
      border: 2px solid black;
      border-radius: 5px;
    &:hover{
      background-color:#A0C1D1;
    }
    }
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
`
export const Select = styled.select`
  font-size: 15px;
  width:100%;
  height:100vh;
  max-width: 400px;
  max-height: 30px;
  cursor: pointer;
`


