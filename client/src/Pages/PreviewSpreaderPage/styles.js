import styled from "styled-components";
import imagemUm from "../../Images/imagemUm.jpg";
import imagemDois from "../../Images/imagemDois.jpg";

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  background-image: url(${imagemDois});
  background-size: cover;
  background-position: center;
  background-color: #131516;
  height: 100vh;
`;
export const Main = styled.main`
  display: flex;
  width: 100%;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.84);
`;
export const SectionOne = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  
`;
export const SituationOfEquipments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  max-height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: 5px solid;
  margin: 2%;
  padding-bottom: 20px;
  
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2px 0;
  padding: 5px 0;
  width: 100%;
  font-size:15px;
  border-bottom: 2px solid white;
`;
export const EquipmentsList = styled.div`
  display: flex;
  justify-content:space-between;
  font-size: 20px;
  width: 100%;
  flex-wrap:wrap;
  li {
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    padding: 0 10px;
    width: 100%;
    margin: 0.5rem 0;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    font-size: 20px;
    font-weight: bold;
    textarea{
      display: flex;
      justify-content:center;
      align-items:center;
      font-size:1.2rem;
      text-align:center;
      margin: 0 1rem;
      padding:0.5rem 1rem;
      height:3rem;
      background-color: transparent;
      color:#fff;
      resize:none;
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  position:absolute;
  top:95%;
  left:40%;
  color:#fff;
  border-bottom: #fff 2px solid;
  padding:0.5rem;
  p{
      font-size:18px;
      letter-spacing:1px;
    }

`;


