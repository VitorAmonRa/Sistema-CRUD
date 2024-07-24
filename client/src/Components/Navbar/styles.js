import styled from "styled-components";
import PortonaveLogo from '../../Images/PortonaveLogo.png'
import Porto from '../../Images/Porto.png'

export const ContainerNav = styled.div`
  width: 100%;
`;

export const MainDiv = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;
  background-image:linear-gradient(to right, #fff, red);
`;

export const Logo = styled.div`
  background-image: url(${Porto});
  background-size:cover;
  background-position: center;
  display: flex;
  width:100%;
  max-width:300px;
  height:100vh;
  max-height:60px;
  margin:10px 0 0 20px;
`;
export const DivNav = styled.div`
  display: flex;
  justify-content:center;
  text-decoration: none;
  width:100%;
  max-width:300px;
  height:100vh;
  max-height:40px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  margin:0 30px;
  padding: 18px;
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


