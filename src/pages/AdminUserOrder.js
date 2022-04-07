import { Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import DashboardHeader from "../components/DashboardHeader";
import UserContext from "../UserContext";
import { useContext } from "react";
import OrderCardUser from "../components/OrderCardUser";

export default function AdminUserOrder() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ?
        <Grid container>
            {(user.isAdmin) ?
                <>
                <Grid item xs={1}><BackButton props={{link: "/admin/users"}}/></Grid>
                <Grid item xs={12}><DashboardHeader /></Grid>
                <Grid
                    item
                    xs={12}
                    container
                    padding={5}
                    spacing={2}
                >
                    <OrderCardUser />
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}