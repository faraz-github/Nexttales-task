import { Avatar, Chip, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, } from "@mui/material";

import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function MenuItems() {
    return (
        <List dense>
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar sx={{ mr: 1, width: 24, height: 24, }} alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg" />
                    <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>Profile</Typography>} />
                    12
                    <IconButton sx={{ bgcolor: "#f56323", ml: 1 }} size="small">
                        <NotificationsNoneIcon fontSize="small" />
                    </IconButton>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ mt: 3, borderLeft: "7px solid #383f47", backgroundColor: "rgba(21,126,252, 0.1)" }}>
                <ListItemButton>
                    <ListItemIcon>
                        <WidgetsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>Discover</Typography>} />
                    <Chip size="small" color="secondary" sx={{ px: 1 }} label={"24"} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <CircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>SmartUp</Typography>} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar sx={{ mr: 1, width: 24, height: 24, }} alt="Remy Sharp" src="https://unsplash.com/photos/NRQV-hBF10M/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYyMTQzNDI5&force=true&w=640" />
                    <ListItemText primary="Main Community" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar sx={{ mr: 1, width: 24, height: 24, }} alt="Remy Sharp" src="https://unsplash.com/photos/RAtKWVlfdf4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGZ1bnxlbnwwfHx8fDE2NjIxMzIxNjI&force=true&w=640" />
                    <ListItemText primary="Fun Community" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar sx={{ mr: 1, width: 24, height: 24, }} alt="Remy Sharp" src="https://unsplash.com/photos/p0j-mE6mGo4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dGVjaHxlbnwwfHx8fDE2NjIxMzk0MjM&force=true&w=640" />
                    <ListItemText primary="Tech Community" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar sx={{ mr: 1, width: 24, height: 24, }} alt="Remy Sharp" src="https://unsplash.com/photos/HI7l1up-590/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYyMTQzODEy&force=true&w=640" />
                    <ListItemText primary="Lead Community" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{ fontWeight: 500 }}>Personal</Typography>}  />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText inset primary="In Progress" />
                    180
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText inset primary="Completed" />
                    46
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText inset primary="Read Later" />
                    24
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default MenuItems;