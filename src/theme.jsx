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
            main: '#b547ff',
         }
      }),
   },
});

export default getTheme;