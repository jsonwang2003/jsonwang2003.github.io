import React from 'react';
import { Container, Box, Typography, Divider, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function About() {
   const theme = useTheme();
   const skills = [
      { skill: "HTML", icon: "/skill_icons/html.png", proficiency: 4, projects: [], startYear: 2022},
      { skill: "CSS", icon: "/skill_icons/css.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "JavaScript", icon: "/skill_icons/javascript.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "React", icon: "/react.svg", proficiency: 0, projects: [], startYear: 0 },
      { skill: "firebase", icon: "/skill_icons/firebase.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Material UI", icon: "/mui.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Python", icon: "/skill_icons/python.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "C++", icon: "/skill_icons/cpp.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Java", icon: "/skill_icons/java.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Robotics", icon: "/skill_icons/robotics.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Robot Operating System (ROS)", icon: "/skill_icons/ros.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "OpenCV", icon: "/skill_icons/openCV.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Arduino", icon: "/skill_icons/arduino.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Git", icon: "/skill_icons/git.png", proficiency: 0, projects: [], startYear: 0 },
      { skill: "Docker", icon: "/skill_icons/docker.png", proficiency: 0, projects: [], startYear: 0 },
   ]

   const skillComponent = (skill, icon, proficiency, projects, startYear, key) => {
      const [openDetail, setOpenDetail] = React.useState(false);

      const toggleOpenDetail = () => {
         setOpenDetail(true);
      }

      const toggleCloseDetail = () => {
         setOpenDetail(false);
      }

      return (
         <Grid item key={key}>
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
                  onClick: toggleOpenDetail,
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
            columnSpacing={8}
            rowSpacing={4}
            sx={{
               justifyContent: 'space-evenly',
               alignItems: 'center',
               px: 4
            }}
         >
            {skills.map((skillObj, idx) => (
               skillComponent(skillObj.skill, skillObj.icon, skillObj.proficiency, skillObj.projects, skillObj.startYear, idx)
            ))}
         </Grid>
      </Container>
   );
}

export default About;