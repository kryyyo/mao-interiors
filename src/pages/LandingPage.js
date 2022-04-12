import SwipeableTextMobileStepper from "../components/CarouselLanding";
import { Grid } from "@mui/material";
import MasonryLanding from "../components/MasonryLanding";
import { Typography } from "@mui/material";
import ButtonGroupLanding from "../components/ButtonGroupLanding";

export default function LandingPage() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <SwipeableTextMobileStepper />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container>
                    <Typography variant="h5"><b>Shop furnitures and accessories</b></Typography>
                    <ButtonGroupLanding />
                </Grid>
            </Grid>

            <Grid item xs={12} pt={3}>
                <Grid container>
                    <Typography variant="h5"><b>Sample products in the room</b></Typography>
                    <MasonryLanding />
                </Grid>
            </Grid>
        </Grid>
    )
}