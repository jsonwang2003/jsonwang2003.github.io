import { Container, Box, Typography, Divider } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {timelineItemClasses} from '@mui/lab/TimelineItem';
import React from 'react';
import { useTheme } from '@mui/material/styles';

function Education() {
   const theme = useTheme();

   function schoolDescription({ logo, name, degree, startYear, endYear, activities, awards, src }) {
      return (
         <TimelineItem>
            <TimelineSeparator>
               <Box component="img" src={logo} onClick={() => window.open(src, '_blank')} sx={{ 
                  width: 60, 
                  height: 60,
                  borderRadius: '50%',
                  ':hover': {
                     transform: 'scale(1.1)',
                     transition: 'transform 0.2s',
                     cursor: 'pointer',
                  },
               }} />
               <TimelineConnector sx={{ my: 1, height: 'auto' }} />
            </TimelineSeparator>
            <TimelineContent
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 2,
                  padding: 2,
                  borderRadius: 1,
               }}
            >
               <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
                     {name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
                     {degree}
                  </Typography>
               </Box>
               <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                  {startYear} - {endYear}
               </Typography>
            </TimelineContent>
         </TimelineItem>
      );
   }

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
               Education
            </Typography>
            <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 2 }}/>
         </Box>
         <Timeline
            sx={{
               [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
               },
            }}
         >
            {schoolDescription({
               logo: '/schools_icon/UCSD.png',
               name: 'University of California, San Diego',
               degree: 'Bachelor of Science in Computer Science',
               startYear: 2025,
               endYear: 2027,
               activities: [{
                  name: 'SIPP Alumni',
                  description: 'SIPP',
                  link: 'https://sipp.ucsd.edu/',
                  images: ['/sipp.png']
               }],
               awards: [{
                  name: 'SIPP Alumni',
                  description: 'SIPP',
                  link: 'https://sipp.ucsd.edu/',
                  images: ['/sipp.png']
               }],
               src: 'https://ucsd.edu'
            })}
            {schoolDescription({
               logo: '/schools_icon/OCC.png',
               name: 'Orange Coast College',
               degree: 'Associate of Science in Computer Science',
               startYear: 2025,
               endYear: 2025,
               activities: [{
                  name: 'Member of Phi Theta Kappa',
                  description: 'Member of Phi Theta Kappa',
                  link: 'https://www.ptk.org/',
                  images: ['/ptk.png']
               }, {
                  name: 'Member of Computer Science Honor Society',
                  description: 'Member of Computer Science Honor Society',
                  link: 'https://www.occsociety.com/',
                  images: ['/occsociety.png']
               }, {
                  name: 'Secretary of STEM Club',
                  description: 'Secretary of STEM Club',
                  link: 'https://orangecoastcollege.edu/',
                  images: ['/occ_stem_club.png']
               }],
               awards: [{
                  name: 'CE C++ Programming Certificate',
                  description: 'CE C++ Programming Certificate',
                  link: 'https://orangecoastcollege.edu/',
                  images: ['/occ_cpp.png']
               }, {
                  name: 'CE Python Programming Certificate',
                  description: 'CE Python Programming Certificate',
                  link: 'https://orangecoastcollege.edu/',
                  images: ['/occ_python.png']
               }],
               src: 'https://orangecoastcollege.edu/'
            })}
         </Timeline>
      </Container>
   );
}

export default Education;