import { Container, Box, Typography, Divider, Grid, Paper } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {timelineItemClasses} from '@mui/lab/TimelineItem';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import SectionTitle from '../components/SectionTitle';
import LinkIcon from '@mui/icons-material/Link';

function Education() {
   const theme = useTheme();

   const schoolDetails = {
      'UCSD': {
         logo: '/UCSD/UCSD.png',
         name: 'University of California, San Diego',
         degree: 'Bachelor of Science in Computer Science',
         startYear: 2025,
         endYear: 2027,
         activities: [
            {
               logo: '/UCSD/SIPP_logo.png',
               name: 'SIPP Alumni',
               description: `This summer program has been designed by our team from the University of California, San Diego's Department of Electrical and Computer Engineering to help incoming engineering students prepare for their future job interviews in both the technical and professional space.
               
               With the help of our tutor team, faculty, alumni, campus resources, career center, advising office, student organizations, we've customized this summer program experience to best develop students' breadth in technical areas such as python, sensors and systems, and machine learning, as well as professional areas such as resume building, communication, academic planning, research opportunities and more to showcase and develop their skills.`,
               link: 'https://www.ecesipp.com/',
               images: '/UCSD/SIPP Flyer 2025.png',
            },
            {
               logo: '/UCSD/Transfer Prep.png',
               name: 'Transfer Prep Program 2025',
               description: `Transfer Prep is a 4-day (August 24, 2025 - August 27, 2025) that will provide a once-in-a lifetime opportunity to create strong relationships with peers, build on academic and professional skills for to enhance the UC San Diego experience, and provide mentorship opportunities with current engineering undergraduate transfer students, as well as industry, staff and faculty. The goal of Transfer Prep is for students to receive support in making their transition and build awareness of relevant campus programs and resources.`,
               link: 'https://sites.google.com/ucsd.edu/transfer-prep-2025/home',
               images: '/UCSD/Transfer Prep Group Photo.jpg',
            }
         ],
         awards: [],
         src: 'https://ucsd.edu'
      },
      'OCC': {
         logo: '/OCC/OCC.png',
         name: 'Orange Coast College',
         degree: 'Associate of Science, Computer Science',
         startYear: 2022,
         endYear: 2025,
         activities: [
            {
               logo: '/OCC/PTK_Logo.png',
               name: 'Phi Theta Kappa',
               description: "\tModeled after Phi Beta Kappa, the prestigious honor society for four" + 
                  "-year colleges, Phi Theta Kappa is the largest honor society for two-year colleges in" + 
                  " the world, established in 1918 and now headquartered in Jackson, Mississippi.\n\tPTK" + 
                  " enrolls qualified students across all academic disciplines and currently boasts over" +
                  " 200,000 members globally. Additionally, PTK sponsors over $187 million in scholarships." + 
                  "\n\tPhi Theta Kappa offers each of its members outstanding opportunities to develop" + 
                  "strengths in four important areas, referred to as \"Hallmarks.\" They are: Leadership," + 
                  " Scholarship, Fellowship, and Service\n\tThe colors for Phi Theta Kappa are blue, for" + 
                  " scholarship, and gold, for purity.\n\tThe Golden Key became Phi Theta Kappa's official" + 
                  " emblem and the design for the membership pin. The Key is a golden slab, keyed at the top" + 
                  " and bottom. Across the center of the slab is a black enamel band upon which three Greek" + 
                  " letters appear, which are the initials of three mystic Greek words meaning phronimon (Phi)," + 
                  " thumos (Theta), katharotes (Kappa) and meaning wisdom, aspiration and purity.\n\tBehind the" + 
                  " band is a wreath, on one side composed of oak leaves, and on the other, of laurel. The" + 
                  " wreath of oak leaves denotes stability and strength of character, and the curling leaves of" + 
                  " laurel signify achievement and success.\n\tAbove the band is a representation of the head of" + 
                  " Athena, Goddess of Learning; in the base appear the mystic Greek letters meaning light, the" + 
                  " light of learning and knowledge.\n",
               status: 'Member',
               link: 'https://www.ptk.org/',
               images: '/OCC/PTK_Membership_Certificate-1.png'
            },
            {
               logo: '/OCC/Iota_Xi_Logo.png',
               name: 'Computer Science Honor Society',
               description: "\tThe IOTA XI (ΙΞ) Society is the premier honor society for " +
                  "students in the computing and information disciplines at Orange Coast " +
                  "College. Our mission is to foster academic excellence, promote original " +
                  "research, and create a supportive community for students, alumni, and " +
                  "faculty. We are dedicated to recognizing and celebrating the achievements " +
                  "faculty. Members benefit from networking opportunities, exclusive events, " +
                  "and industry connections that enhance their educational and professional " +
                  "journeys. Join us to achieve, connect, and lead in the dynamic field of " +
                  "computer science.",
               status: 'Member',
               link: 'https://orangecoastcollege.edu/academics/honor-societies/societies/iota-xi.html',
               images: ''
            },
            {
               logo: '/OCC/STEM_Club_Logo.png',
               name: 'STEM Club',
               description: "\tSTEM Club is a student-led organization dedicated to exploring science," + 
                  " technology, engineering, and mathematics through hands-on projects and collaboration." + 
                  " We provide a supportive environment for students to develop technical skills, share ideas," + 
                  " and tackle real-world problems. Join us to ignite your curiosity and build a community of innovators!",
               status: 'Secretary',
               link: '',
               images: ''
            },
            {
               logo: '/OCC/OC_Robotics_Logo.png',
               name: 'OC Robotics',
               description: "\tContribute to engineering projects at the intersection of artificial intelligence, robotics," + 
                  " and aerospace as part of an on-campus student organization at OCC and a collaborative multi-college research team.",
               status: 'Computer Vision && Software Lead',
               link: '',
               images: ''
            }
         ],
         awards: [
            {
               name: 'CE C++ Programming Certificate',
               overview: "Completion of this certificate, issued through the Business and Computing Division, will enable students" + 
                  " to apply for entry-level positions in C++ programming. A grade of “C” or better is required in all courses. All" + 
                  " courses must be completed at Orange Coast College.",
               outcome: "Program completers will be able to write programs in C++ using classes, flow-of-control and fundamental data structure.",
               images: '/OCC/cs-cpp-programming-certificate.png',               
               link: 'https://catalog.cccd.edu/orange-coast/pathways/computers-computing/computer-science/c-programming-certificate-specialization/'
            },
            {
               name: 'CE Python Programming Certificate',
               overview: "Completion of this certificate, issued through the Business and Computing Division, will enable students to apply for" + 
                  " entry-level positions in Python programming. A grade of “C” or better is required in all courses. All courses must be completed at Orange Coast College.",
               outcome: "Students who complete the program will be able to write programs in Python using classes, flow-of-control, and fundamental" + 
                  " data structure.",
               images: '/OCC/CS_Python Programming_JF_2025_0604_1407_May-1.png',
               link: 'https://catalog.cccd.edu/orange-coast/pathways/computers-computing/computer-science/python-programming-certificate-specialization/'
            },
            {
               name: 'CN Computer Science Certificate',
               overview: "This certificate is designed to provide the student with a comprehensive grounding in the theory" + 
                  " and practice of modern computer programming. Based on the recommendations of the Association of Computing" + 
                  " Machinery, the Computer Science Certificate prepares students to work as entry-level programmers. Courses" + 
                  " in this program may or may not qualify for transfer credit at four-year colleges or universities. Students" + 
                  " should review the transfer information section of this catalog and consult with a counselor to obtain specific" + 
                  " information and guidance about transfer requirements and course applicability at specific colleges and universities.",
               outcome: "Based on the recommendations of the Association for Computing Machinery, The Computer Programming Certificate" + 
                  " prepares students to work as entry-level programmers, or used to fulfill some of the requirements for transfer to" + 
                  " a Computer Science program at a four-year university.",
               images: '',
               link: 'https://catalog.cccd.edu/orange-coast/pathways/computers-computing/computer-science/computer-science-certificate-achievement/'
            }
         ],
         src: 'https://orangecoastcollege.edu/'
      }
   } 

   function schoolDescription({ logo, name, degree, startYear, endYear, activities, awards, src }) {
      return (
         <TimelineItem>
            <TimelineSeparator>
               <Box component="img" src={logo} onClick={() => window.open(src, '_blank')} sx={{ 
                  width: { xs: 40, sm: 80, md: 120 }, 
                  height: { xs: 40, sm: 80, md: 120 },
                  borderRadius: '50%',
                  m: 1,
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
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 2,
                  p: 0,
                  px: 2,
                  my: 2,
               }}
            >
               <Paper
                  elevation={1}
                  sx={{
                     p: 3,
                     pb: 5,
                     width: '100%',
                  }}
               >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                     <Typography variant="h2" sx={{ color: theme.palette.text.primary, fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.5rem' }, mb: 1 }}>
                        {name}
                     </Typography>
                     <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                     }}>
                        <Typography variant="h4" sx={{ color: theme.palette.text.secondary, fontSize:{ xs: '1rem', sm: '1.2rem', md: '1.5rem' }, ml: 2}}>
                           {degree}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' } }}>
                           {startYear} - {endYear}
                        </Typography>
                     </Box>   
                  </Box>
                  <Typography variant="h3" sx={{ color: theme.palette.text.primary, ml: 3, mt: 4, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }}}>
                     Activities:
                  </Typography>
                  <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 1 }} />
                  <Grid container spacing={2} sx={{ flexGrow: 1}}>
                     <Grid item sx={{ flexGrow: 1, py: 2}}>
                        {activities.map((activity, index) => (
                           <Box key={index} sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              my: 2,
                           }}>
                              <Box sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 flexGrow: 1,
                                 gap: 1,
                              }}>
                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box component='img' src={activity.logo} sx={{
                                       width: { xs: 40, sm: 60, md: 80 },
                                       height: { xs: 40, sm: 60, md: 80 },
                                       objectFit: 'contain',
                                       borderRadius: '4px',
                                    }} />
                                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                          <Typography variant="h4" sx={{ color: theme.palette.text.primary, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}>
                                             {activity.name}
                                          </Typography>
                                          {activity.link && <LinkIcon onClick={() => window.open(activity.link, '_blank')}sx={{ 
                                             color: theme.palette.text.primary,
                                             cursor: 'pointer',
                                             ':hover': {
                                                transform: 'scale(1.1)',
                                                transition: 'transform 0.2s',
                                             }
                                          }}/>}
                                       </Box>
                                       <Typography variant="caption" sx={{fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' }, color: theme.palette.text.secondary }}>
                                          { activity.status }
                                       </Typography>
                                    </Box>
                                 </Box>
                                 <Box sx={{ position: 'relative', width: '100%' }}>
                                    {activity.images && (
                                       <Box
                                          component="img"
                                          src={activity.images}
                                          alt={activity.name}
                                          sx={{
                                             width: { xs: 50, sm: 200, md: 300 },
                                             height: 'auto',
                                             objectFit: 'contain',
                                             borderRadius: '4px',
                                             float: 'right',
                                             ml: 2,
                                             mb: 1,
                                             maxHeight: 300,
                                          }}
                                       />
                                    )}
                                    <Typography
                                       variant="body1"
                                       sx={{
                                          color: theme.palette.text.secondary,
                                          wordBreak: 'break-word',
                                          textAlign: 'justify',
                                          overflow: 'hidden',
                                          fontSize: { xs: '0.875rem', sm: '0.925rem', md: '1rem' },
                                       }}
                                       component="span"
                                       dangerouslySetInnerHTML={{
                                          __html: activity.description
                                          .replace(/\n/g, '<br />')
                                          .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'),
                                       }}
                                    />
                                 </Box>
                              </Box>
                           </Box>
                        ))}
                     </Grid>
                  </Grid>
                  <Typography variant="h3" sx={{ color: theme.palette.text.primary, ml: 3, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }, mt: 4 }}>
                     Awards:
                  </Typography>
                  <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 1 }} />
                  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                     <Grid item sx={12}>
                        {awards.length > 0 ? awards.map((award, index) => (
                           <Box key={index} sx={{ 
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              my: 2,
                           }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '0.875rem'}}>
                                 <Typography variant="h4" sx={{ color: theme.palette.text.primary, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}>
                                    {award.name}
                                 </Typography>
                                 {award.link && <LinkIcon onClick={() => window.open(award.link, '_blank')}sx={{ 
                                    color: theme.palette.text.primary,
                                    cursor: 'pointer',
                                    ':hover': {
                                       transform: 'scale(1.1)',
                                       transition: 'transform 0.2s',
                                    }
                                 }}/>}
                              </Box>
                              <Box sx={{ position: 'relative', width: '100%' }}>
                                 {award.images && (
                                    <Box
                                       component="img"
                                       src={award.images}
                                       alt={award.name}
                                       sx={{
                                          width: { xs: 50, sm: 200, md: 300 },
                                          height: 'auto',
                                          objectFit: 'contain',
                                          borderRadius: '4px',
                                          float: 'right',
                                          ml: 2,
                                          mb: 1,
                                          maxHeight: 300,
                                          display: 'inline-block'
                                       }}
                                    />
                                 )}
                                 <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                       color: theme.palette.text.secondary,
                                       wordBreak: 'break-word',
                                       textAlign: 'justify',
                                       overflow: 'hidden',
                                       display: 'inline',
                                       fontSize: { xs: '0.875rem', sm: '0.925rem', md: '1rem' },
                                    }}
                                 >
                                    {award.overview}
                                    <Typography component="span" variant="h5" sx={{ 
                                       display: 'block', color: theme.palette.text.primary, 
                                       mt: 1, 
                                       fontSize: { xs: '0.925rem', sm: '1rem', md: '1.2rem' } 
                                    }}>
                                       &nbsp;&nbsp;&nbsp;Program Outcome:<br />
                                    </Typography>
                                    {award.outcome}
                                 </Typography>
                              </Box>
                           </Box>
                        )) : (
                           <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.875rem', sm: '0.925rem', md: '1rem' } }}>
                              No awards to display.
                           </Typography>
                        )}
                     </Grid>
                  </Grid>
               </Paper>
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
         <SectionTitle title="Education" />
         <Timeline
            // making the timeline align to the left
            sx={{
               [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
               },
            }}
         >
            {schoolDescription(schoolDetails['UCSD'])}
            {schoolDescription(schoolDetails['OCC'])}
         </Timeline>
      </Container>
   );
}

export default Education;