import {Container, Box, Typography, Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';

function Home() {
   const theme = useTheme();
   return (
      <>
         <Box 
            sx={{
               backgroundImage: 'url("homepage-banner.png")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               display: `flex`,
               flexDirection: `column`,
               alignItems: `center`,
               justifyContent: `center`,
               height: `100vh`,
               textAlign: `center`,
            }}
         >
            <Box sx={{
               overflow: 'hidden',
               borderRight: '0.15em solid cyan',
               whiteSpace: 'nowrap',
               letterSpacing: '.15em',
               width: '0',
               animation: 'typing 4s steps(40, end) forwards, blink-caret 0.75s step-end infinite',
               '@keyframes typing': {
                  '0%': {
                     width: '0',
                  },
                  '100%': {
                     width: '71ch',
                  },
               },
               '@keyframes blink-caret': {
                  '0%, 100%': {
                     borderColor: 'transparent',
                  },
                  '50%': {
                     borderColor: 'cyan',
                  }
               }
            }}>
               <Typography variant="h3" component="h1" sx={{fontFamily: 'monospace'}}>
                  Welcome to <span style={{color: 'cyan'}}>Jason Wang's</span> Portfolio Site!
               </Typography>
            </Box>
         </Box>
         <Container sx={{ my: 4 }}>
            <Box sx={{
               display: 'flex',
               justifyContent: 'center',
               mt: 4,
               gap: 4
            }}>
               <Button 
                  variant="outlined" onClick={() => window.location.href = '/projects'} sx={{
                  height: '50px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  borderWidth: '3px',
                  backgroundColor: 'cyan',
                  color: 'black',
                  px: 4,
                  py: 4,
                  transition: 'transform 0.3s',
                  '&:hover': {
                     transform: 'scale(1.05)',
                  }
               }}>
                  My projects
               </Button>
               <Button variant="outlined" onClick={() => window.location.href = '/education'} sx={{
                  height: '50px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  borderWidth: '3px',
                  backgroundColor: 'cyan',
                  color: 'black',
                  px: 4,
                  py: 4,
                  transition: 'transform 0.3s',
                  '&:hover': {
                     transform: 'scale(1.05)',
                  }
               }}>
                  My Education
               </Button>
               <Button variant="outlined" onClick={() => window.location.href = '/about'} sx={{
                  height: '50px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  borderWidth: '3px',
                  backgroundColor: 'cyan',
                  color: 'black',
                  px: 4,
                  py: 4,
                  transition: 'transform 0.3s',
                  '&:hover': {
                     transform: 'scale(1.05)',
                  }
               }}>
                  About Me
               </Button>
            </Box>
         </Container>
      </>
   );
}

export default Home;