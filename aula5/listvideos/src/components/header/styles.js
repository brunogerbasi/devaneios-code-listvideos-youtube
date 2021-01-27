import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #FB9FAF;
    border-bottom: solid 2px #3A3A90;
    padding:20px;
    display:flex;
    justify-content: space-between;
    align-items: center; 
`;

export const LogoContainer = styled.div`
    width:35%;

    img{
        max-width:100%;
    }
`;

export const Busca = styled.div`
    width:65%;

    input{
        height:45px;
        width:100%;
        font-size:22px;
    }
`;