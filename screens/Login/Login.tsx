import { StackNavigationProp } from '@react-navigation/stack';
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

interface Props {
    navigation: StackNavigationProp<any, any>
}

const Login: React.FC<Props> = ({ navigation }) => {

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
                <HaveNoAccountText onPress={() => navigation.navigate('Register')}>Não possui uma conta? Clique aqui.</HaveNoAccountText>
            </Form>
        </Container>
    )

};

export default Login;