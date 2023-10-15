import { createTheme } from '@mui/material/styles';

const colors = {
    skyBlue: "#3C91E6",
    darkBlue: '#001524',
    grey: '#DBE9EE',
    yellow: '#FFE156',
    black: '#131313',
    red: '#FF0035',
    green: '#09814A',
}

export const theme = createTheme({
    palette: {
        background:{
            main: colors.grey
        },
        primary: {
            main: colors.skyBlue
        },
        secondary: {
            main: colors.darkBlue
        },
        error: {
            main: colors.red
        },
        warning:{
            main: colors.yellow
        },
        info: {
            main: colors.black
        },
        success: {
            main: colors.green
        }
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'Helvetica',
            'Arial',
            'sans-serif'
        ],
        appTitle: {
            fontSize: "2rem"
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    appTitle: 'h1',
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle: 'h2',
                    body1: 'span',
                    body2: 'span',
                }
            }
        }
    }
})