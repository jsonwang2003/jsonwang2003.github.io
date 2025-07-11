import {useTheme} from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

function Navigation() {
   const theme = useTheme()
   const location = useLocation()

   const hoverLink = (link, text) => {
      const isActive = location.pathname === link
      return (
         <Link 
            to={link} 
            style={{
               color: theme.palette.text.primary,
               textDecoration: 'none',
               position: 'relative',
            }}
         >
            <Typography variant="h6" sx={{
               '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isActive ? '100%' : 0,
                  height: '2px',
                  backgroundColor: theme.palette.navigationBorder.main,
                  transition: 'width 0.3s ease-in-out',
               },
               '&:hover::after': {
                  width: '100%',
               }
            }}>
               {text}
            </Typography>
         </Link>
      )
   }

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
         <Box 
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexGrow: 1,
            color: theme.palette.text.primary,
            }}
         >
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
            <Typography 
               variant="h1" 
               sx={{
                  color: theme.palette.text.primary,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginLeft: '10px',
               }}
            >
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
               {hoverLink("/", "Home")}
               {hoverLink("/about", "About")}
               {hoverLink("/education", "Education")}
               {hoverLink("/projects", "Projects")}
            </Box>
         </Box>
      </Container>
   );
}

export default Navigation;