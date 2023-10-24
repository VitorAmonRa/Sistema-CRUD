import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image:linear-gradient(to right, #fff,#530808, #530808);
`;

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width:100%;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  color: #fff;
    h1{
      font-size: 40px;
      padding: 10px 0 ;
    }
    p{
      padding: 2px 0;
    }
    .button-div{
      button{
        font-size:20px;
        font-weight: bold;
        margin: 20px;
        width: 250px;
        height:50px;
        background-color: #fff;
        border: 3px outset  #232C33;
        cursor: pointer;
        :hover{
          background-image:linear-gradient(to right, #fff, #530808);
          color:#fff;
          font-weight: bold;
          border: 4px  solid  black;
        }
      }
    }
`;

export const Field = styled.div`
  display:flex;
  flex-direction: column;
  padding: 10px 0;
  label{
    margin: 5px;
    font-weight:bolder;
    font-size:24px;
  }
  input{
    font-weight:bold;
    font-size: 20px;
    width: 600px;
    height: 40px;
    border: 3px solid  #131313;
    padding: 4px 8px;
  }
`;