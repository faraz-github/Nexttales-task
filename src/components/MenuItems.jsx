import { Avatar, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";

import WidgetsIcon from '@mui/icons-material/Widgets';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function MenuItems() {
    return (
        <List dense>
            <ListItem disablePadding>
                <ListItemButton>
                    <Avatar sx={{ mr: 1, width: 24, height: 24, }} alt="Remy Sharp" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg" />
                    <ListItemText primary="Profile" />
                    12
                    <Avatar sx={{ bgcolor: "orange", width: 24, height: 24, ml: 1 }}>i</Avatar>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ borderLeft: "7px solid gray", backgroundColor: "#eeeeee" }}>
                <ListItemButton>
                    <ListItemIcon>
                        <WidgetsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Discover" />
                    <Chip size="small" color="primary" sx={{ px: 1 }} label={"24"} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <CircleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="SmartUp" />
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
                    <ListItemText primary="Personal" />
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