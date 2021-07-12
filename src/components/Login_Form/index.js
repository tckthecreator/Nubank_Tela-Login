import React from 'react'

// Funções JavaScript;
import {validarCPF} from './validarCPF';

//CSS
import styled from 'styled-components';

/**
 *  O uso de variáveis é comum neste componente;
 *  para encontrar o significado de cada variável, olhar o arquivo src/index.css 
 *  o :root armazena todas as variáveis da aplicação.
 *  ass: the greatest developer of my house.
 */

const Form = styled.form`
    background-color: var(--branco);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);

    border-radius: 10px;
`;

const TextDoLogin = styled.span`
    color: black;
    font-weight: 600;
    font-size: 20px;

    margin: 75px 50px 50px 50px;
`;

const InputContainer = styled.div`
   margin: 0 60px;
`;

const InputDiv = styled.div`
    padding: 10px;

    display: flex;
    flex-direction: column;
`;

const InputLogin = styled.input`
    outline: 0;
    border: 0;
    border-bottom: 1.5px var(--cinza) dotted;

    font-size: 18px;

    width: 310px;
    height: 30px;

    &:focus {
        border-bottom: 1.5px var(--roxo) dotted
    }
`;

const Label = styled.label`
    color: var(--cinza);
    font-weight: 500;
    font-size: 16px;

    ${InputLogin}:focus&{
        color: var(--roxo);
    }
`;

const LoginButton = styled.button`
    margin: 40px;
    width: 310px;
    height: 70px;

    border: 1.5px var(--button-color) solid;

    background-color: var(--branco);

    color: var(--button-color);
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 0 60px 0;
`;

const Link = styled.a`
    padding: 10px;
    
    text-decoration: none;
    color: var(--roxo);
    font-weight: 500;
    font-size: 15px;

    &:hover{
        color: black;
    }
`;

function Login_Form() {
    return (
        <Form>
            <TextDoLogin>Faça seu login</TextDoLogin>
            <InputContainer>
                <InputDiv>
                    <Label>CPF</Label>
                    <InputLogin id='cpf-input' type='text' maxLength='11' onChange={validarCPF} />
                </InputDiv>
                <InputDiv>
                    <Label>Senha</Label>
                    <InputLogin type='password' />
                </InputDiv>
            </InputContainer>
            <LoginButton>Continuar</LoginButton>
            <LinkDiv>
                <Link href='/'>Esqueci minha senha</Link>
                <Link href='/'>Ainda não sou cliente</Link>
            </LinkDiv>
        </Form>
    )
}

export default Login_Form;