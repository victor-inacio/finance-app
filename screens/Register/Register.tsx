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

const Register: React.FC = () => {

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
                    <HaveAccountMsg>Já possui uma conta? Clique aqui.</HaveAccountMsg>
                </ButtonContainer>
            </Form>
        </Container>
    );

};

export default Register;