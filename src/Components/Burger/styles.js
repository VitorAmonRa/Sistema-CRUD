import styled from 'styled-components';

export const IconDiv = styled.div`
    position:absolute;
    z-index:100;
    left:10px;
    top:10px;
    max-width:50px;
    max-height:50px;
    width:100%;
    height:100%;
    
    button{
        display:flex;
        justify-content:center;
        align-items:center;
        color:#fff;
        background-color:transparent;
        font-size:30px;
        width:100%;
        height:100%;
        cursor:pointer;
    }
    @media (max-width: 1024px) {
    width:auto;
    height:auto;
    button{font-size:267x;}
}
`