import * as React from 'react';
import {

    Container,
    Form,
    EmailInput,
    PasswordInput,
    ForgetPassword,
    LoginButton,
    LoginButtonText,
    HaveNoAccountText

} from './styles';

const Login: React.FC = () => {

    return (
        <Container>
            <Form>
                <EmailInput placeholder="Email" />
                <PasswordInput secureTextEntry={true} placeholder="Senha" />
                <ForgetPassword>Esqueci minha senha.</ForgetPassword>
                <LoginButton>
                    <LoginButtonText>
                        Logar-se
                    </LoginButtonText>
                </LoginButton>
                <HaveNoAccountText>Não possui uma conta? Clique aqui.</HaveNoAccountText>
            </Form>
        </Container>
    )

};

export default Login;