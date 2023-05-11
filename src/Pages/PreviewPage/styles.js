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
`;
export const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.84);

`;
export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-width: 100%;
`;
export const SituationOfEquipments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: min-content;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: 5px solid;
  margin: 2%;
  padding-bottom: 20px;
  @media (max-width:1840px) {
      max-width:440px;
  
  }
  @media (max-width:1440px) {
      max-width:320px;
  
  }
  @media (max-width: 1024px) {
    max-width:200px;
}
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2px 0;
  padding: 5px 0;
  width: 100%;
  border-bottom: 2px solid white;
  @media (max-width:1440px) {
        h1{font-size: 28px;}
}
@media (max-width: 1024px) {
    h1{font-size: 20px;}
}
  p {
    font-size: 25px;
    padding: 5px 15px;
    @media (max-width:1440px) {
        font-size: 15px;
}

  }
`;
export const EquipmentsList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  li {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 0 10px;
    width: 100%;
    margin: 10px 0;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    font-size: 22px;
    font-weight: bold;
  }
  @media (max-width:1440px) {
      li{font-size:18px;}
  
  }
  @media (max-width: 1024px) {
    li{font-size: 15px;}
}
`;
export const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
export const BackupOfEquipments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 450px;
  color: #fff;
  margin: -5% 0 15% 0;

  li {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding: 2px 0;
    margin: 5px 0 0 0;
    border-bottom: 2px dashed rgba(255, 255, 255, 0.2);
    font-size: 22px;
    
    p {
      font-weight: bold;
      @media (max-width:1440px) {
      font-size:18px;
  
  }
    }
    
  }
  &:nth-child(2) {
    max-width: 500px;
    width: 100%;
  }
  &:nth-child(3) {
    height: 100%;
    max-height: 450px;
    background-color: transparent;
    border: none;
    color: #fff;
    div {
      display: flex;
    }
    li {
      display: flex;
      justify-content: start;
      padding: 0 5px;
      border-bottom: none;
      font-weight: bold;
    }
  }
`;
export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  max-height: 40px;
  cursor: pointer;
`;
export const SectionThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
