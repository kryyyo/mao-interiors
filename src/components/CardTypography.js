import { Grid, Typography } from "@mui/material"

export default function CardTypography({props}) {
    return (
        <Grid
            container
            mb={1}
        >
            <Grid
                item
                xs={4}
                sx={{
                    display: "flex"
                }}
            >
                <Typography sx={{ fontSize: "12px",}} color="text.secondary">{props.title}</Typography>
            </Grid>
            <Grid
                item
                xs={8}
                sx={{
                    display: "flex",
                }}
            >
                <Typography variant="body2" sx={{ overflow: 'auto' }}>{props.content}</Typography>
            </Grid>
        </Grid>
    )
}