import { Grid, Typography } from "@mui/material"    

export default function CardTypography1({props}) {
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
                sx={{
                    display: "flex"
                }}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: "flex"
                        }}
                        ml={1}
                    >
                        <Typography sx={{ fontSize: "12px",}} color="text.secondary">{props.subtitle}</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={7}
                        sx={{
                            display: "flex",
                        }}
                        ml={6}
                    >
                        <Typography variant="body2" sx={{ overflow: 'auto' }}>{props.content}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
}