import React from 'react'

//CSS
import styled from 'styled-components';

const Form = styled.form`

`;

const TextDoLogin = styled.span`

`;

const InputContainer = styled.div`

`;

const InputDiv = styled.div`

`;

const Label = styled.label`

`;

const InputLogin = styled.input`

`;

const LoginButton = styled.button`

`;

const LinkDiv = styled.div`

`;

const Link = styled.a`

`;

function Login_Form() {
    return (
        <Form>
            <TextDoLogin>Faça seu Login</TextDoLogin>
            <InputContainer>
                <InputDiv>
                    <Label>CPF</Label>
                    <InputLogin type='email' />
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