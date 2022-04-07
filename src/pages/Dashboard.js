import { Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";
import DashboardButton from '../components/DashboardButton';
import buttonTexts from "../data/dashboardButtonTexts";
import DashboardHeader from "../components/DashboardHeader";


export default function Dashboard() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ? 
        <Grid 
            container
            alignItems="center"
        >
        <DashboardHeader />
        {
        !(user.isAdmin) ?
        <Grid
            container
            padding={5}
            spacing={2}
            mb={5}
        >
            <DashboardButton 
                props={buttonTexts[0]} 

            />
            <DashboardButton props={buttonTexts[1]} />
            <DashboardButton props={buttonTexts[2]} />
        </Grid>
        :
        <Grid
            container
            padding={5}
            spacing={2}
            mb={5}
        >
            <DashboardButton props={buttonTexts[3]} />
            <DashboardButton props={buttonTexts[4]} />
            <DashboardButton 
                props={buttonTexts[5]}
            />
        </Grid>
        }
        </Grid>
        :
        <Navigate to ="/login" />
    )
}