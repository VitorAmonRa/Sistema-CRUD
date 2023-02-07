import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    /* max-height:200vh; */
    /* background-image:linear-gradient(to bottom, #000000, #A0C1D1); */
    background-color: #131516;
`;
export const SectionOne = styled.div`
    display:flex;
    justify-content:space-evenly;
    width: 100%;
    max-width: 100%;
`
export const SituationOfEquipments = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    width: 50%;
    height: 100%;
    max-width: 400px;
    max-height: 100%;
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
    font-size:20px;
    width:100%;
    height:100%;
    li{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100%;
        margin:5px 0;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        font-size: 22px;
    }
`
export const SectionTwo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    max-width: 100%;
    height:100%;
`

export const BackupOfEquipments = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    width: 100%;
    height: 100vh;
    max-width: 700px;
    max-height: 320px;
    margin:5% 7%;
    background-color:#EBEEFC;
    border: 2px solid #333638;

    li{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100%;
        padding: 2px 0 ;
        margin:5px 0;
        border-bottom: 2px dashed black ;
        font-size: 22px;
        p{
            font-weight:bold;
        }
    }
    &:nth-child(1){
        width: 100%;
        max-width: 400px;
    }
    &:nth-child(2){
        div{
            display:flex;
        }
        li{
            display:flex;
            justify-content:start;
            padding: 0 5px;
            border-bottom: none;
        }
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



