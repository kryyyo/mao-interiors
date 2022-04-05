import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Typography, Box } from '@mui/material';


export default function IconLabelButtons({props}) {
  return (
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                    display: "flex",
                    width: "100%"
                }}
            >
                <Button 
                    disableElevation
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        color: "#000",
                        border: 1,
                        borderColor: "#f1f1f1",
                        borderRadius: 2,
                        padding: 3,
                        textTransform: "initial",
                    }}
                    fullWidth
                >
                    <Box
                        sx={{
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            width: "1000px"
                        }}
                        textAlign="left"
                    >
                        <Typography
                            variant="body1"
                            fontSize={16}
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontSize={12}
                        >
                            {props.subtitle}
                        </Typography>
                    </Box>
                </Button>
            </Grid>
        )
}
