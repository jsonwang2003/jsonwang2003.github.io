import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, Stack, Chip, Select, FormControl, MenuItem, InputLabel, Grow, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SectionTitle from '../components/SectionTitle';
import {useState} from 'react';

const projects = [
   {
      title: "P0 ROS Mobile Robot",
      type: "robotics",
      image: "/projects/p0_cheap_ros_mobile_robot.jpg",
      description: "A mobile robot project utilizing ROS for navigation and mapping.",
      link: "https://github.com/yourusername/p0_ros_mobile_robot",
      startYear: "2024",
      endYear: "Present",
      status: "Incomplete"
   },
   {
      title: "P1 Mars Rover",
      type: "robotics",
      image: "/projects/p1_mars_rover.jpg",
      description: "An advanced mobile robot project with enhanced features.",
      link: "https://github.com/yourusername/p1-mars-rover",
      startYear: "2024",
      endYear: "Present",
      status: "Incomplete"
   },
   {
      title: "KIBO Robotics Programming Challenge",
      type: "robotics",
      image: "/projects/p2_kibo_rpc.jpg",
      description: "A mobile robot project utilizing ROS for navigation and mapping.",
      link: "https://github.com/yourusername/p2_kibo_rpc",
      startYear: "2024",
      endYear: "2025",
      status: "Finished"
   },
   {
      title: "Dorna Robotics Research Project",
      type: "robotics",
      image: "/projects/dorna_robotics_research_project.jpg",
      description: "A mobile robot project utilizing ROS for navigation and mapping.",
      link: "https://github.com/yourusername/p3_dorna_robotics_research_project",
      startYear: "2024",
      endYear: "Present",
      status: "Finished"
   },
   {
      title: "OC Robotics Website",
      type: "website",
      image: "/projects/oc_robotics_website.png",
      description: "A website project for OC Robotics showcasing their work and projects.",
      link: "https://github.com/yourusername/oc_robotics_website",
      startYear: "2024",
      endYear: "Present",
      status: "In Progress"
   },
   {
      title: "Personal Portfolio Website",
      type: "website",
      image: "/projects/personal_portfolio_website.png",
      description: "Personal Portfolio Website built with React and Material-UI. (You are here!)",
      link: "https://github.com/jsonwang2003/jsonwang2003.github.io",
      startYear: "2025",
      endYear: "Present",
      status: "In Progress"
   },
   {
      title: "OC Interns Website",
      type: "website",
      image: "/projects/oc_interns_website.png",
      description: "A website project for OC Interns connecting student interns with local businesses.",
      link: "https://github.com/sudo-omar/oc-interns",
      startYear: "2024",
      endYear: "2024",
      status: "Finished"
   },
   {
      title: "SMART Door",
      type: "programming",
      image: "/projects/SMART_door.png",
      description: "A smart door security system utilizing facial recognition and machine learning to protect household and packages alike.",
      link: "https://github.com/jsonwang2003/Smart-Door",
      startYear: "2025",
      endYear: "2025",
      status: "Finished"
   }
];

function Projects() {
   const theme = useTheme();
   const [statusFilter, setStatusFilter] = useState("all");
   const [typeFilter, setTypeFilter] = useState("all");

   let filteredProjects = projects.filter(project => {
      if (statusFilter !== "all" && project.status.toLowerCase().replace(" ", "-") !== statusFilter) return false;
      if (typeFilter !== "all" && project.type.toLowerCase().replace(" ", "-") !== typeFilter) return false;
      return true;
   });

   function getColor(status){
      switch(status){
         case "Finished":
            return theme.palette.status.complete;
         case "In Progress":
            return theme.palette.status.inProgress;
         case "Incomplete":
            return theme.palette.status.incomplete;
      }
   }

   function handleFilterStatusChange(event) {
      setStatusFilter(event.target.value);
   }

   function handleFilterTypeChange(event) {
      setTypeFilter(event.target.value);
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
         <SectionTitle title="Projects" />
         <Box sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'row',
            alignItems: 'center',
            '@media (max-width: 400px)':{
               flexDirection: 'column',
               alignItems: 'stretch',
               gap: 1,
            }
         }}>
            <FormControl>
               <InputLabel id="project-filter-label" sx={{'&.Mui-focused': {color: theme.palette.text.secondary}}}>Status</InputLabel>
               <Select
                  labelId="project-filter-label"
                  label="Status"
                  value={statusFilter}
                  onChange={handleFilterStatusChange}
                  autoWidth
                  sx={{
                     color: '#ffffff',
                     '& .MuiSelect-icon': {
                        color: '#ffffff',
                     },
                     '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.secondary,
                     },
                     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.secondary,
                        borderWidth: '1px'
                     }
                  }}
               >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="finished">Finished</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="incomplete">Incomplete</MenuItem>
               </Select>
            </FormControl>
            <FormControl id="project-filter-control">
               <InputLabel id="project-filter-label" sx={{'&.Mui-focused': {color: theme.palette.text.secondary}}}>Type</InputLabel>
               <Select
                  labelId="project-filter-label"
                  label="Type"
                  value={typeFilter}
                  onChange={handleFilterTypeChange}
                  autoWidth
                  sx={{
                     color: '#ffffff',
                     '& .MuiSelect-icon': {
                        color: '#ffffff',
                     },
                     '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.secondary,
                     },
                     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.secondary,
                        borderWidth: '1px'
                     }
                  }}
               >
                  <MenuItem value="all">All Types</MenuItem>
                  <MenuItem value="website">Website</MenuItem>
                  <MenuItem value="robotics">Robotics</MenuItem>
                  <MenuItem value="programming">Programming</MenuItem>
               </Select>
            </FormControl>
            <Button 
               variant="outlined" 
               onClick={() => {setStatusFilter("all"); setTypeFilter("all");}} 
               sx={{
                  height: '', 
                  whiteSpace: 'nowrap', 
                  color: theme.palette.text.primary, 
                  borderColor: theme.palette.text.secondary, 
                  py: '16.5px'
               }}
            >
               Clear Filters
            </Button>
         </Box>
         <Grow in={true} key={filteredProjects}>
            <Grid container spacing={2} sx={{ marginTop: 2 }} column={16}>
               {filteredProjects
                  .map((project, index) => (
                  <Grid size={{xs: 14, md: 6}} key={index}>
                     <Card sx={{ border: `2px solid ${getColor(project.status)}`, boxShadow: 'none', height: '100%' }}>
                        <CardMedia>
                           <Box
                              component="img"
                              src={project.image}
                              alt={project.title}
                              sx={{
                                 width: '100%',
                                 height: '400px',
                                 objectFit: 'fill',
                                 borderTopLeftRadius: '4px',
                                 borderTopRightRadius: '4px',
                              }}
                           />
                        </CardMedia>
                        <CardContent>
                           <Box sx={{p: 2}}>
                              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                                 <Typography variant="h4" sx={{height: '2em', lineHeight: '1em', mb: 2}}>{project.title}</Typography>
                                 <Chip label={project.status} sx={{
                                    backgroundColor: getColor(project.status),
                                    color: 'white',
                                    display: {xs: 'none', sm: 'flex'},
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                 }} />
                              </Stack>
                              <Typography variant="body1" color="text.secondary">{project.description}</Typography>
                           </Box>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Grow>
      </Container>
   );
}

export default Projects;