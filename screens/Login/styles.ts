import styled from 'styled-components/native';

export const Container = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primary};

`;

export const Form = styled.View`

    width: 85%;

`;

export const EmailInput = styled.TextInput`

    width: 100%;
    background-color: white;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 25px;
    border-radius: 2px;
`;

export const PasswordInput = styled.TextInput`

    width: 100%;
    background-color: white;
    padding: 10px;
    font-size: 25px;
    border-radius: 2px;

`;

export const ForgetPassword = styled.Text`

    font-size: 15px;
    color: ${props => props.theme.terciary};
    text-decoration: underline;
    margin-bottom: 15px;

`;

export const LoginButton = styled.TouchableOpacity`

    background-color: ${props => props.theme.secondary}
    padding: 10px;
    margin-bottom: 3px;
    border-radius: 2px;

`;

export const LoginButtonText = styled.Text`

    text-align: center;
    font-size: 25px;
    color: white;

`;

export const HaveNoAccountText = styled.Text`

    text-align: center;
    color: ${props => props.theme.terciary};
    text-decoration: underline;
    font-size: 15px;

`;
