import { createTheme } from '@mui/material'

export const LightTheme = createTheme({

    palette: {
        primary: {
            main: '#ffb300',
            dark: '#ff9900',
            light: '#ffd000',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#023e8a',
            dark: '#03045e',
            light: '#0077b6',
            contrastText: '#ffffff'

        },
        background: {
            default: '#ebf2fa',
            paper: '#ffffff',
        }
    }

})