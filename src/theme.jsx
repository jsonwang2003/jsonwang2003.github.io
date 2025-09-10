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
         },
         status: {
            complete: '#4caf50',
            inProgress: '#0088ff',
            incomplete: '#f44336',
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
            fill: '#ffffff',
            default: '#3d3d3dff'
         },
         status: {
            complete: '#4caf50',
            inProgress: '#0088ff',
            incomplete: '#f44336',
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
      fontFamily: 'sans-serif',
      h1: {
         fontSize: '3rem',
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      h2: {
         fontSize: '2.5rem',
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      h3: {
         fontSize: '1.8rem',
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      h4: {
         fontSize: '1.5rem',
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      h5: {
         fontSize: '1.2rem',
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      h6: {
         fontSize: '1rem',
         fontWeight: 1000,
         lineHeight: 1.5,
         letterSpacing: '0.01562em',
      },
      body1: {
         fontSize: '1rem',
         fontWeight: 500,
         lineHeight: 1.5,
         letterSpacing: '0.01238em',
      },
      caption: {
         fontSize: '0.875rem',
         fontWeight: 400,
         lineHeight: 1.5,
         letterSpacing: '0.03333em',
      },
      navigation: {
         fontSize: '1.25rem',
         fontWeight: 500,
         lineHeight: 1.6,
         letterSpacing: '0.0075em',
         fontFamily: 'Roboto, sans-serif',
      }
   },
});

export default getTheme;