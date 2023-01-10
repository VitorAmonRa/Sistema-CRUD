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
  background-color: tomato;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
`;
export const Form = styled.form`
    display:flex;
    max-width:800px;
    max-height:600px;
    width:100%;
    height:100%;
    background-color:gray;
`;
export const Field = styled.div`
    display:flex;
    flex-direction: column;
    padding: 10px 0;
`;
export const Label = styled.label`

`;
export const Input = styled.input`

`


