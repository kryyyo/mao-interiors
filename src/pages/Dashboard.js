import { Typography, Link, Grid, Box } from "@mui/material";
import { Link as RouterLink, Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";
import DashboardButton from '../components/DashboardButton';
import buttonTexts from "../data/dashboardButtonTexts";

export default function Dashboard() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ? 
        <>
        <Box
            sx={{
                paddingTop: 5,
                paddingX: 5,
            }}
        >
            <Typography
                variant="h4"
                component="h1"
            >
                Hello {user.firstName}
            </Typography>
            <Typography
                variant="subtitle1"
                fontSize="11px"
            >
                <Typography>
                    Do you want to log in with a different account? <Link component={RouterLink} to="/logout" underline="always">Logout</Link>
                </Typography>
            </Typography>
        </Box>
        <Grid
            container
            padding={5}
            spacing={2}
        >
            <DashboardButton props={buttonTexts[0]} />
            <DashboardButton props={buttonTexts[1]} />
            <DashboardButton props={buttonTexts[2]} />
            <DashboardButton props={buttonTexts[3]} />
        </Grid>
        </>
        :
        <Navigate to ="/login" />
    )
}