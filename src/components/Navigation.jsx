import {useTheme} from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import { Divider, Slide } from '@mui/material'

function Navigation() {
   const theme = useTheme()
   const location = useLocation()
   const [menuActive, setMenuActive] = useState(false)

   const toggleMenu = () => {
      setMenuActive(!menuActive)
   }

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
            onClick={() => setMenuActive(false)}
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
            backgroundColor: theme.palette.primary.main,
            position: 'fixed',
            top: 0,
            zIndex: theme.zIndex.appBar,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            height: '80px',
            transition: 'height 0.3s ease',
         }}
      >
         <Box
            sx={{
               display: { xs: 'flex', md: 'none' },
               // width: '100%',
               position: {xs: menuActive ? 'absolute' : 'static', md: 'static'},
               left: '24px',
               top: '28px',
               transition: 'transform 0.3s ease',
               '&:hover': {
                  transform: 'scale(1.3)',
               }
            }}
         >
            <MenuIcon 
               onClick={toggleMenu}
               sx={{
                  cursor: 'pointer',
                  color: theme.palette.text.primary,
                  display: { xs: 'block', md: 'none' },

               }} 
            />
         </Box>
         
         {/* Desktop Menu */}
         <Box
            sx={{
               display: { xs: 'none', md: 'flex' },
               flexDirection: 'row',
               gap: 2,
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            {hoverLink("/", "Home")}
            {hoverLink("/about", "About")}
            {hoverLink("/portfolio", "Portfolio")}
            {hoverLink("/education", "Education")}
            {hoverLink("/projects", "Projects")}
         </Box>

         {/* Mobile Menu */}
         <Slide direction="down" in={menuActive} mountOnEnter unmountOnExit easing={{
            enter: theme.transitions.easing.easeInOut,
            exit: theme.transitions.easing.sharp
         }}>
            <Box
               sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                  gap: 2,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  boxSizing: 'border-box',
                  backgroundColor: theme.palette.primary.main,
                  position: 'absolute',
                  top: '80px',
                  left: 0,
                  zIndex: theme.zIndex.appBar - 1,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
               }}
            >
               {hoverLink("/", "Home")}
               {hoverLink("/about", "About")}               
               {hoverLink("/portfolio", "Portfolio")}
               {hoverLink("/education", "Education")}
               {hoverLink("/projects", "Projects")}
               <Divider
                  sx={{
                     width: '80%',
                     backgroundColor: theme.palette.navigationBorder.main,
                     margin: '10px 0',
                  }}
               />
               <Box 
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'flex-end',
                     width: 'fit-content',
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
                        fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                        fontWeight: 'bold',
                        marginLeft: '10px',
                        width: 'fit-content',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: { xs: 'none', sm: 'block' },
                        transition: 'font-size 0.3s ease',
                     }}
                  >
                     Chia-Sheng Wang
                  </Typography>
               </Box>
            </Box>
         </Slide>
         <Box 
            sx={{
               display: { xs: menuActive ? 'none' : 'flex', md: 'flex' },
               alignItems: 'center',
               justifyContent: 'flex-end',
               width: 'fit-content',
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
                  fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                  fontWeight: 'bold',
                  marginLeft: '10px',
                  width: 'fit-content',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: { xs: 'none', sm: 'block' },
                  transition: 'font-size 0.3s ease',
               }}
            >
               Chia-Sheng Wang
            </Typography>
         </Box>
      </Container>
   );
}

export default Navigation;