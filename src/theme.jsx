import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   colorSchemes: {
      light: {
         palette: {
            primary: {
               main: '#350057',
            },
            secondary: {
               main: '#E48C27',
            },
            background: {
               default: '#f5f5f5',
               paper: '#ffffff',
            },
            text: {
               primary: '#212121',
               secondary: '#757575',
            },
         },
      },
      dark: {
         palette: {
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
         },
      },
   },
   defaultColorScheme: 'dark',
   cssVariables: true,
	transitions: {
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300, 		// most basic recommended timing
			complex: 375,      	// this is to be used in complex animations
			enteringScreen: 225,	// recommended when something is entering screen
			leavingScreen: 195, 	// recommended when something is leaving screen
		},
		easing: {
			// This is the most common easing curve.
			easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

			// Objects enter the screen at full velocity from off-screen and
			// slowly decelerate to a resting point.
			easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',

			// Objects leave the screen at full velocity. They do not decelerate when off-screen.
			easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
			
			// The sharp curve is used by objects that may return to the screen at any time.
			sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
		},
	},
});

export default theme;