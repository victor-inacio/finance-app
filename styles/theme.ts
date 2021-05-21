import { DefaultTheme } from "styled-components/native";

export interface CustomTheme {
    primary: string,
    secondary: string,
    terciary: string,
}

const theme: CustomTheme = {
    primary: '#3EC721',
    secondary: '#2A8717',
    terciary: '#16470C'
};

export default theme;