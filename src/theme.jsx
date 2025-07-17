import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
   palette: {
      mode,
      ...(mode === 'light' ? {
         primary: blue,
         background: {
            default: '#ffffff',
            paper: '#f5f5f5',
         },
         text: {
            primary: '#212121',
            secondary: '#212121',
         },
         navigationBorder: { main: '#212121' }
      } : {
         primary: '#1a1a1a',
         background: {
            default: '#0a0a0a',
            paper: '#',
         },
         text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
         },
         navigationBorder: {
            main: '#ffffff',
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