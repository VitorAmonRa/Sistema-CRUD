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
  background-color: rgba(0, 0, 0, 0.84);
  @media (min-width:1024px) {
    height: 100vh;
  }

`;
export const SectionOne = styled.div`
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
  @media (min-width: 1024px) and (max-width: 1281px){
    max-width:250px;
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
  @media (min-width: 1024px) and (max-width: 1281px) {
      h1{font-size: 20px;}
  }
  p {
    font-size: 28px;
    padding: 5px 15px;
  }
  span{
    font-size: 18px;
    margin-left: 20px;
    padding: 3px;
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
  @media (min-width: 1440px) and (max-width:1920px) {
      li{font-size:18px;}
  
  }
  @media (min-width: 1024px) and (max-width: 1281px) {
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
    footer{
      padding:0.5rem;
      border-bottom: 1px solid white;
      p{
      color: #fff;
      font-size:18px;
      letter-spacing:1px;
    }
   
  }
`;
export const BackupOfEquipments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 450px;
  color: #fff;
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
      
    }  
  }
  &:nth-child(2) {
    max-width: 500px;
    max-height:380px;
    @media (min-width: 1440px) and (max-width:1920px) {
      max-height:280px;
      p{
        font-size:16px;
      }
      @media (min-width: 1024px) and (max-width: 1281px) {
        max-height:190px;
        p{
        font-size:14px; 
      }
  }
}
  }
  &:nth-child(3) {
    height: 100%;
    max-height: 450px;
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
    p{
      @media (min-width: 1440px) and (max-width:1920px) {
          font-size:16px; 
      }
      @media (min-width: 1024px) and (max-width: 1281px) {
      font-size:15px; 
  }
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
export const SupportEquipaments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 440px;
  height: min-content;
  padding-bottom: 20px;
  margin-top:1rem;
  color: #fff;
  border: 5px solid;

 /*  border-left: 5px solid;
  border-top: 5px solid;
  border-right:5px solid; */
  background-color: rgba(0, 0, 0, 0.4);
`;
