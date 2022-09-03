import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Grid, Card, CardContent, CardMedia, Typography, Tooltip, CardActionArea } from "@mui/material";


function DataDisplay() {

    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://api.facthunt.in/fostergem/v1/post/list/public");
                setDisplayData(response.data.content);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <Box sx={{ backgroundColor: "#f5f5f6", px: 3, pt: 1 }}>
            <Grid container spacing={3}>
                {
                    displayData?.map((item) => {
                        return <Grid key={item.postId} item sm={12} md={6} lg={4} xl={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component={"img"}
                                        height="192"
                                        image={item.coverImageUrl}
                                        alt="news"
                                    />
                                    <CardContent sx={{ py: 1 }}>
                                        <Tooltip title={item.title} placement={"top"}>
                                            <Typography gutterBottom variant="subtitle2">
                                                {item.title.slice(0, 75)}...
                                            </Typography>
                                        </Tooltip>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )
}

export default DataDisplay;