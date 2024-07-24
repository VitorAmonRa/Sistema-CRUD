import styled from 'styled-components';

export const Menu = styled.article`
    display:flex;
    flex-direction:column;
    position:fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-20rem)'};
    transition: transform 0.6s ease-in-out;
    width:100%;
    height: 100vh;
    max-width: 300px;
    max-height: 100vh;
    background-color: rgba(17, 17, 17, 0.97);
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top: 4rem;
        background-color: #fff;
        button{
            font-size:30px;
            margin: 20px;
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
