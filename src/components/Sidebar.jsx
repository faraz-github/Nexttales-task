import { styled } from "@mui/material/styles";
import { Drawer, IconButton, Stack, Typography } from "@mui/material";

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import MenuItems from "./MenuItems";
import Footer from "./Footer";

function Sidebar(props) {

    const { open, setOpen, drawerWidth } = props;

    const SidebarHeader = styled('div')(({ theme }) => theme.mixins.toolbar);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderWidth: 0
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <SidebarHeader sx={{ borderBottom: "5px solid #f5f5f6", display: "flex", alignItems: "center", px: 2 }}>
                <Stack flexGrow={1} direction={"row"} alignItems={"center"} spacing={1}>
                    <LooksTwoIcon fontSize="large" />
                    <Typography variant="h6">SmartUp</Typography>
                </Stack>
                <IconButton onClick={() => setOpen(false)}>
                    <MenuOpenIcon />
                </IconButton>
            </SidebarHeader>
            <MenuItems />
            <Footer />
        </Drawer>
    )
}

export default Sidebar;