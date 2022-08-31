import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

function Sidebar() {
    return (
        <Drawer
            anchor="left"
            open={true}
        >
            <Box sx={{ width: 250 }}>
                Sidebar
            </Box>
        </Drawer>
    )
}

export default Sidebar;