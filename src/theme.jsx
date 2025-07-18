import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
   palette: {
      mode,
      ...(mode === 'light' ? {
         primary: orange,
         background: {
            default: '#ffffff',
            paper: '#f2f2f2ff',
         },
         text: {
            primary: '#212121',
            secondary: '#363636ff',
         },
         navigationBorder: { 
            main: '#212121',
         },
         skillBar: {
            default: '#bcbcbcff',
            fill: '#212121'
         }
      } : {
         primary: { main: '#1a1a1a' },
         background: {
            default: '#0a0a0a',
            paper: '#1a1a1a',
         },
         text: {
            primary: '#ffffff',
            secondary: '#a5a5a5ff',
         },
         navigationBorder: {
            main: '#ffffff',
         },
         skillBar: {
            default: '#ffffff',
            fill: '#a5a5a5ff'
         }
      }),
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 900,
         lg: 1280,
         xl: 1920,
      },
   },
   transitions: {
      duration: {
         enteringScreen: 225,
         leavingScreen: 195,
      },
      easing:{
         easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
         easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)', 
         easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
         sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      }
   },
   typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
         fontSize: 24,
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      p: {
         fontSize: '1rem',
         fontWeight: 400,
         lineHeight: 1.5,
         letterSpacing: '0.00938em',
      },
   },
});

export default getTheme;