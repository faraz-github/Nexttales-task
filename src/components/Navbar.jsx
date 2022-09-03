import { AppBar, Chip, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

function Navbar(props) {

    const { open, setOpen, drawerWidth } = props;

    return (
        <>
            <AppBar elevation={0} position="fixed" sx={{ width: { lg: open ? `calc(100% - ${drawerWidth}px)` : `100%` }, background: "#f5f5f6" }}>
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color={"primary"} noWrap component="div" sx={{ flexGrow: 1 }}>
                        Discover
                    </Typography>
                    <Chip color="secondary" sx={{ px: 1, fontSize: "22px" }} size="small" label={"+"} />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Navbar;