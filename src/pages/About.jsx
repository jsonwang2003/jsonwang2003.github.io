import React from 'react';
import { Container, Box, Typography, Divider, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function About() {
   const theme = useTheme();
   const skills = [
      { skill: "HTML", icon: "src/assets/skill_icons/html.png" },
      { skill: "CSS", icon: "src/assets/skill_icons/css.png" },
      { skill: "JavaScript", icon: "src/assets/skill_icons/javascript.png" },
      { skill: "React", icon: "/react.svg" },
      { skill: "firebase", icon: "src/assets/skill_icons/firebase.png" },
      { skill: "Material UI", icon: "/mui.png" },
      { skill: "Python", icon: "src/assets/skill_icons/python.png" },
      { skill: "C++", icon: "src/assets/skill_icons/cpp.png" },
      { skill: "Java", icon: "src/assets/skill_icons/java.png" },
      { skill: "Robotics", icon: "src/assets/skill_icons/robotics.png" },
      { skill: "Robot Operating System (ROS)", icon: "src/assets/skill_icons/ros.png" },
      { skill: "OpenCV", icon: "src/assets/skill_icons/openCV.png" },
      { skill: "Arduino", icon: "src/assets/skill_icons/arduino.png" },
      { skill: "Git", icon: "src/assets/skill_icons/git.png" },
      { skill: "Docker", icon: "src/assets/skill_icons/docker.png" },
   ]

   const skillComponent = (skill, icon) => {
      return (
         <Grid item xs={12} sm={6} md={4}>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  boxSizing: 'border-box',
                  borderColor: theme.palette.text.primary,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: '20px',
                  height: '40px',
               }}
            >
               <Box component="img" src={icon} alt={skill} sx={{ width: 25, height: 25, marginRight: 2 }} />
               <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontSize: '1rem' }}>
                  {skill}
               </Typography>
            </Box>
         </Grid>
      )
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
               About Me
            </Typography>
            <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 2 }}/>
         </Box>
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-evenly',
               padding: 2,
               boxSizing: 'border-box',
               gap: 2
            }}
         >
            <Box sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
               maxWidth: '400px',
            }}>
               <Typography
                  variant="h1"
                  sx={{
                     color: theme.palette.text.primary,
                     textAlign: 'left',
                     marginBottom: 2,
                     ml: 3
                  }}
               >
                  Chia-Sheng Wang
               </Typography>
               <Typography
                  variant="body1"
                  sx={{
                     color: theme.palette.text.secondary,
                     textAlign: 'left',
                     marginBottom: 2,
                  }}
               >
                  I am a current Computer Science Student at the University of California, San Diego (UCSD), 
                  with a focus on Software Engineering, Robotics, and Website Development. <br /><br />
                  I have a passion for creating innovative solutions and enhancing user experiences through technology. <br /><br />
                  My journey in computer science has equipped me with skills such as programming, problem-solving, and critical thinking. <br /><br />
                  I am eager to apply my knowledge in real-world projects and contribute to the tech community.
               </Typography>
            </Box>
            <Box component="img"
               src="\profile_picture.jpg"
               alt="Profile"
               sx={{
                  width: { xs: '50px', sm: '200px', md: '350px' },
                  height: { xs: '50px', sm: '200px', md: '350px' },
                  borderRadius: '30px',
                  border: `2px solid ${theme.palette.secondary.main}`,
                  boxShadow: `0 4px 16px rgba(255, 255, 255, 0.8)`,
                  objectFit: 'cover',
                  marginBottom: 2,
                  transition: 'width 0.3s ease, height 0.3s ease',
               }}
            />
         </Box>
         {/* Create a wave animation */}
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
            Skills
         </Typography>
         <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 2 }} />
         <Grid
            container
            spacing={4}
            sx={{
               justifyContent: 'space-evenly',
               alignItems: 'center',
               px: 4
            }}
         >
            {skills.map((skillObj, idx) => (
               <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={idx}
               >
                  {skillComponent(skillObj.skill, skillObj.icon)}
               </Grid>
            ))}
         </Grid>
      </Container>
   );
}

export default About;