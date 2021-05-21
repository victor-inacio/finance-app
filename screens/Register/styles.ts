import styled from 'styled-components/native'

const primary = '#3EC721';
const secondary = '#2A8717';
const terciary = '#16470C';

export const Container = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${primary};

`;

export const Form = styled.View`

    width: 85%;

`;

export const TextInput = styled.TextInput`

    background-color: white;
    width: 100%;
    padding: 10px;
    font-size: 25px;
    margin-bottom: 15px;
    border-radius: 2px;
`;

export const ButtonContainer = styled.View`


`;

export const Button = styled.TouchableOpacity`

    background-color: ${secondary};
    padding: 10px;
    border-radius: 2px;
    margin-bottom: 3px;

`;

export const ButtonText = styled.Text`
    
    font-size: 25px;
    text-align: center;
    color: white;
`;

export const HaveAccountMsg = styled.Text`

    font-size: 15;
    text-align: center;
    color: ${terciary};
    text-decoration: underline;

`;

