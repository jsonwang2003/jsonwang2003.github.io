import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
   palette: {
      mode,
      ...(mode === 'light' ? {
         primary: {
            main: '#86d1cc',
         },
         secondary: {
            main: "rgba(255, 149, 0, 0.95)",
         },
         background: {
            default: '#ffffff',
            paper: '#ffffff',
         },
         text: {
            primary: '#212121',
            secondary: '#212121',
         },
         navigationBorder: {
            main: 'rgb(0, 116, 211)'
         }
      } : {
         primary: {
            main: '#FF6E1A',
         },
         secondary: {
            main: '#1a1a1a',
         },
         background: {
            default: '#0a0a0a',
            paper: '#1a1a1a',
         },
         text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
         },
         navigationBorder: {
            main: '#ffffffff',
         }
      }),
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 450,
         md: 800,
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
});

export default getTheme;