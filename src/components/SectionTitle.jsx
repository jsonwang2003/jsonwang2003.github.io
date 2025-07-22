import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function SectionTitle({ title }) {
   const theme = useTheme();
   return (
        <Box>
            <Typography
                variant="h1"
                sx={{
                    marginBottom: 2,
                    color: theme.palette.text.primary,
                    fontSize: {xs: '1.8rem', sm: '2.5rem', md: '3rem'},
                    fontFamily: 'sans-serif',
                    ml: 5
                }}
            >
                {title}
            </Typography>
            <Divider sx={{ backgroundColor: theme.palette.text.primary, marginBottom: 2 }}/>
        </Box>
   );
}

export default SectionTitle;
