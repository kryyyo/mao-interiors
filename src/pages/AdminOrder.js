import { Grid } from "@mui/material";
import OrderCard from "../components/OrderCard";
import { Navigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import DashboardHeader from "../components/DashboardHeader";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function AdminOrder() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ?
        <Grid container>
            {(user.isAdmin) ?
            <>
            <Grid item xs={1}><BackButton /></Grid>
            <Grid item xs={12}><DashboardHeader /></Grid>
            <Grid
                item
                xs={12}
                container
                padding={5}
                spacing={2}
            >
                <OrderCard />
            </Grid>
            </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}