import {useTheme} from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

function Navigation() {
   const theme = useTheme()

   return (
      <Container
         component="nav"
         maxWidth={false}
         sx={{
            backgroundColor: theme.palette.secondary.main,
            position: 'fixed',
            top: 0,
            zIndex: theme.zIndex.appBar,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            height: '80px',

         }}
      >
         <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexGrow: 1,
            color: theme.palette.text.primary,
         }}>
            <Avatar 
               src={theme.palette.mode === 'dark' ? "/favicon-dark.png" : "/favicon-light.png"} 
               variant="rounded" 
               sx={{
                  width: 40,
                  height: 40,
                  margin: '10px',
               }}
            >
               CW
            </Avatar>
            <Typography variant="h1" sx={{
               color: theme.palette.text.primary,
               fontSize: '1.5rem',
               fontWeight: 'bold',
               marginLeft: '10px',
            }}>
               Chia-Sheng Wang
            </Typography>
         </Box>
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               padding: '10px 20px',
               boxSizing: 'border-box',
            }}
         >
            <Box sx={{ display: 'flex', gap: 2 }}>
               <Link to="/" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
                  <Typography variant="h6">Home</Typography>
               </Link>
               <Link to="/about" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
                  <Typography variant="h6">About</Typography>
               </Link>
               <Link to="/education" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
                  <Typography variant="h6">Education</Typography>
               </Link>
               <Link to="/projects" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
                  <Typography variant="h6">Projects</Typography>
               </Link>
            </Box>
         </Box>
      </Container>
   );
} 

export default Navigation;