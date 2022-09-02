import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box>
            <List dense>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Personal" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Send Feedback" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Terms of use" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Privacy Policy" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Stack mt={3} direction={"row"} justifyContent="center" spacing={2}>
                <LinkedInIcon fontSize="12px" />
                <TwitterIcon fontSize="12px" />
                <FacebookIcon fontSize="12px" />
                <InstagramIcon fontSize="12px" />
            </Stack>
            <Box sx={{ mt: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="caption">© 2022 smartup.in</Typography>
            </Box>

        </Box>
    )
}

export default Footer;