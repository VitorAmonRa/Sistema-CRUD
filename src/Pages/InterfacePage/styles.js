import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    /* background-image:linear-gradient(to bottom, #000000, #A0C1D1); */
    background-color: #131516;
`;
export const SectionOne = styled.div`
    display:flex;
    justify-content:space-evenly;
    width: 100%;
    max-width: 100%;
    height: 100vh;
`
export const SituationOfEquipments = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    width: 50%;
    height: 100vh;
    max-width: 400px;
    max-height: 400px;
    background-color:#333638;
    color:white;
    border:5px solid green;
    margin:2% 5%;
    &:nth-child(2){
        border:5px solid yellow;
    }
    &:nth-child(3){
        border:5px solid red;
    }
`
export const Title = styled.div`
    display:flex;
    justify-content:center;
    padding: 5px 0;
    width:100%;
`
export const EquipmentsList = styled.div`
    display:flex;
    flex-direction:column;
    padding: 15px 10px ;
    font-size:20px;
    width:100%;
    height:100vh;
    li{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        padding: 2px;
        border-bottom: 2px solid black;
        font-size: 22px;
        button{
            color:#fff;
            font-weight:bold;
            border:2px solid #fff;
            background-color:#333638;
            padding:6px;
            cursor: pointer;
        }
    }
`
export const SectionTwo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    max-width: 100%;
    height: 100vh;
`

export const BackupOfEquipments = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    width: 100%;
    height: 100vh;
    max-width: 700px;
    max-height: 320px;
    margin:5% 5%;
    background-color:#EBEEFC;
    border: 2px solid #333638;
    &:last-child{
        display:flex;
        align-items:center;
        padding: 20px 0;
        background-color: #131516;
        border: none;
    }
` 
export const ResetButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 20px;
  width:100%;
  height: 100vh;
  max-width: 300px;
  max-height: 40px;
  cursor: pointer;
`


