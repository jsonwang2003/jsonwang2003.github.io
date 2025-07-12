import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import viteIcon from '/vite.svg';
import reactIcon from '../assets/react.svg';
import {useTheme} from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';
import Link from '@mui/material/Link'

const createStyledIcon = (IconComponent, hoverColor) => styled(IconComponent)`
   ${({ theme }) => `
   font-size: 2.5rem;
   cursor: pointer;
   color: ${theme.palette.text.secondary};
   transition: ${theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
   })};
   &:hover {
      color: ${hoverColor};
      transform: scale(1.3);
   }
   `}
`;

const StyledGitHubIcon = createStyledIcon(GitHubIcon, "#FFFFFF");
const StyledLinkedInIcon = createStyledIcon(LinkedInIcon, "#3466c8");
const StyledEmailIcon = createStyledIcon(EmailIcon, "#FFFFFF");

const ReactLogo = () => (
   <img src={reactIcon} alt="React logo" style={{height: "0.75rem", marginLeft: "0.25rem", marginRight: "0.25rem"}}/>
);

const ViteLogo = () => (
   <img src={viteIcon} alt="Vite logo" style={{height: "0.75rem", marginLeft: "0.25rem", marginRight: "0.25rem"}}/>
);

function SlideTransition(props) {
   return <Slide {...props} direction="up"/>
}

function Footer() {
   const theme = useTheme();

   const [state, setState] = React.useState({
      open: false,
      Transition: Slide,
   })

   const handleClick = (Transition) => () => {
      // Copy email to clipboard
      navigator.clipboard.writeText('jason0100w@gmail.com');
      setState({
         open: true,
         Transition
      });
   }

   const handleClose = () => {
      setState(prev => ({
         ...prev,
         open: false
      }));
   }

   const footerText = (message) => {
      return (
         <Typography variant="caption" gutterBottom sx={{ 
            color: theme.palette.text.secondary, 
            display: 'block',
            whiteSpace: { xs: 'normal', md: 'nowrap' },
            textOverflow: { xs: 'unset', md: 'ellipsis' },
            overflow: { xs: 'visible', md: 'hidden' },
            pb: 1
         }}>
            {message}
         </Typography>
      );
   }

   return (
      <Container 
         component="footer" 
         maxWidth={false}
         sx={{
            backgroundColor: theme.palette.secondary.main,
            width: '100%',
            minHeight: '20vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
         }}
      >
         <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'space-between',
            gap: 10,
            height: '100%',
            padding: '20px',
            boxSizing: 'border-box'
         }}>
            <Box>
               {footerText(
                  <>
                     &copy; 2025 Chia-Sheng Wang
                  </>
               )}
               {footerText(
                  <>
                     Built with<ReactLogo />
                     <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" sx={{color: theme.palette.text.secondary, textDecorationColor: theme.palette.text.secondary}}>React</Link> +
                     <ViteLogo /><Link href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" sx={{color: theme.palette.text.secondary, textDecorationColor: theme.palette.text.secondary}}>Vite</Link>
                     , hosted on <Link href="https://jsonwang2003.github.io/" target="_blank" rel="noopener noreferrer" sx={{color: theme.palette.text.secondary, textDecorationColor: theme.palette.text.secondary}}>Github Pages</Link>
                  </>
               )}
               {footerText(
                  <>
                     Utilized <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer" sx={{color: theme.palette.text.secondary, textDecorationColor: theme.palette.text.secondary}}>Material UI</Link>
                  </>
               )}
            </Box>
            <Box sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',

            }}>
               <Divider orientation='vertical' flexItem sx={{ backgroundColor: theme.palette.text.secondary, height: '80px' }}/>
               <Box sx={{
                  m: 1
               }}>
                  <Box sx={{
                     display: 'flex',
                     justifyContent: 'space-evenly',
                     alignItems: 'center'
                  }}>
                     <Link style={{color: theme.palette.text.secondary}} href="https://github.com/jsonwang2003" target="_blank" rel="noopener noreferrer">
                        <StyledGitHubIcon />
                     </Link>
                     <Link style={{color: theme.palette.text.secondary}} href="https://www.linkedin.com/in/chia-sheng-wang/" target="_blank" rel="noopener noreferrer">
                        <StyledLinkedInIcon />
                     </Link>
                     <Link>
                        <StyledEmailIcon onClick={handleClick(SlideTransition)}/>
                     </Link>
                  </Box>
               </Box>
            </Box>
         </Box>
         <Snackbar 
            open={state.open}
            autoHideDuration={3000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            onClose={handleClose}
            message="My email has been copied to your clipboard"
            slots={{transition: state.Transition}}
            ContentProps={{
               sx: {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
               }
            }}
         />
      </Container>
   )
}

export default Footer;