import styled from 'styled-components';

export const Menu = styled.div`
    display:flex;
    flex-direction:column;
    position:fixed;
    left:0;
    top:0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-20rem)'};
    transition: transform 0.6s ease-in-out;
    width:100%;
    height: 100vh;
    max-width: 300px;
    max-height: 100vh;
    background-color: rgba(17, 17, 17, 0.97);
    .main{
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        margin: 0 20px;
        top:100px;
        width:250px;
        height:100px;
        background-color: #fff;
        button{
            font-size:30px;
            width:100%;
            height:100%;
            border:none;
            background-color:transparent;
            cursor:pointer;
        }&:hover{
            background-color:rgba(255, 255, 255, 0.2);
        }
        span{
            padding: 0 20px;
        }
    }
`
