import DashboardHeader from "../components/DashboardHeader";
import UserContext from "../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import { Grid } from "@mui/material";
import BackButton from "../components/BackButton";

export default function AdminUser() {
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
                    <UserCard />
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}