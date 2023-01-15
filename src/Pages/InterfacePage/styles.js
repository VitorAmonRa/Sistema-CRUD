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
    width: 100%;
    max-width: 100%;
    height: 100vh;
`
export const SituationDivs = styled.div`
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
export const SectionTwo = styled.div`
    display:flex;
    width: 100%;
    max-width: 100%;
    height: 100vh;
`

export const SituationDivs2 = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    width: 100%;
    height: 100vh;
    max-width: 700px;
    max-height: 300px;
    background-color:white;
    margin:5% 5%;
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
    padding: 20px;
    font-size:20px;
    width:100%;
    height:100vh;
    li{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        padding: 2px;
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
