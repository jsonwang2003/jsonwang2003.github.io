import { Container, Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SectionTitle from '../components/SectionTitle';

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
         <SectionTitle title="Projects" />
      </Container>
   );
}

export default Projects;