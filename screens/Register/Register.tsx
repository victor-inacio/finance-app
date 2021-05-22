import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
    Container,
    Form,
    TextInput,
    ButtonContainer,
    Button,
    ButtonText,
    HaveAccountMsg
} from './styles';

interface Props {
    navigation: StackNavigationProp<any, any>
}

const Register: React.FC<Props> = ({ navigation }) => {

    return (
        <Container>
            <Form>
                <TextInput placeholder="Nome" />
                <TextInput placeholder="Email" />
                <TextInput placeholder="Senha" />

                <ButtonContainer>
                    <Button>
                        <ButtonText>Cadastrar-se</ButtonText>
                    </Button>
                    <HaveAccountMsg onPress={() => navigation.navigate('Login')}>Já possui uma conta? Clique aqui.</HaveAccountMsg>
                </ButtonContainer>
            </Form>
        </Container>
    );

};

export default Register;