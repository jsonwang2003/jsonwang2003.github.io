import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import getTheme from './theme';
import { ThemeContextProvider, useThemeMode } from './ThemeContext';

function AppContent() {
   const { mode } = useThemeMode();
   const theme = getTheme(mode);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Router>
            <Box>
               <Navigation />
               <Container 
                  component="main"
                  sx={{
                     marginTop: '120px', 
                     marginBottom: '20vh', 
                     minHeight: 'calc(100vh - 100px)', 
                     backgroundColor: theme.palette.background.default,
                  }}
               >
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/about" element={<About />} />
                     <Route path="/portfolio" element={<Portfolio />} />
                     <Route path="/education" element={<Education />} />
                     <Route path="/projects" element={<Projects />} />
                     <Route path="*" element={<Home />} />
                  </Routes>
               </Container>
               <Footer />
            </Box>
         </Router>
      </ThemeProvider>
   );
}

function App() {
   return (
      <ThemeContextProvider>
         <AppContent />
      </ThemeContextProvider>
   );
}

export default App;
