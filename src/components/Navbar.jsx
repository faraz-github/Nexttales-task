import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';

const drawerWidth = 250;

function Navbar() {
    return (
        <AppBar sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Discover</Typography>
                <Chip label="Plus" />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;