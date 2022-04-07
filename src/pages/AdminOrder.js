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
        <>
            {(user.isAdmin) ?
            <>
                <BackButton />
                <DashboardHeader />
                <Grid
                    container
                    padding={5}
                    spacing={2}
                >
                    <OrderCard />
                </Grid>
            </>
            :
            <Navigate to ="/dashboard" />}
        </>
        :
        <Navigate to ="/login" />
    )
}