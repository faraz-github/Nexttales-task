import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

function Navbar(props) {

    const { open, setOpen, drawerWidth } = props;

    return (
        <>
            <AppBar position="fixed" sx={{ width: { lg: open ? `calc(100% - ${drawerWidth}px)` : `100%` } }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Discover
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Navbar;