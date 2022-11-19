import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image:linear-gradient(to bottom, #000000, #30345D);
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
  background-color: /* #C0C2C4 */#FFF6F6;
  border: 5px solid  #131313;
    h1{
      font-size: 35px;
      padding: 10px 0 ;
    }
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
        background-color: #30345D;
        color:#fff
      }
    }
`;

export const Field = styled.div`
  display:flex;
  flex-direction: column;
  padding: 10px 0;
  label{
    margin: 5px;
    font-weight:bold;
    font-size:20px;
  }
  input{
    font-weight:bold;
    font-size: 20px;
    width: 400px;
  }
`;

export const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100vh;
  width:100%;
  height:100vh;
  background: linear-gradient(to left, #0B2047, #19489F, #4F83E3 );
  h1{
    display: flex;
    justify-content:center;
    align-items: center;
    color: #fff;
  }
`