import { styled } from "@mui/material/styles";
import { Box, Drawer, IconButton, Typography } from "@mui/material";

import MenuOpenIcon from '@mui/icons-material/MenuOpen';

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
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <SidebarHeader sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">SmartUp</Typography>
                </Box>
                <IconButton onClick={() => setOpen(false)}>
                    <MenuOpenIcon />
                </IconButton>
            </SidebarHeader>
        </Drawer>
    )
}

export default Sidebar;