import React from 'react';

//Componentes
import LoginForm from '../Login_Form';

//CSS
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--roxo);
    
`;
const Logo = styled.img`
    width: 120px;
    height: 70px;
    margin: 15px 0 0 12px;
`

function MenuInicial() {
    return (
        <Container>
            <Logo id='logo' src='assets/nu-logo.png'  alt='Logo' />
            <LoginForm />
        </Container>
    );
};

export default MenuInicial;
