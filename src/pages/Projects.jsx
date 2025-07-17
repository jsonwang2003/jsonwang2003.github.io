import { Container, Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Projects() {
   const theme = useTheme();
   return (
      <Container
         component="div"
         sx={{
            width: '100%', 
            padding: 2, 
            boxSizing: 'border-box',
         }}
      >
         <Box>
            <Typography
               variant="h1"
               sx={{
                  marginBottom: 2,
                  color: theme.palette.text.primary,
                  fontSize: '3rem',
                  fontFamily: 'sans-serif',
                  ml: 5
               }}
            >
               Projects
            </Typography>
            <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 2 }}/>
         </Box>
      </Container>
   );
}

export default Projects;