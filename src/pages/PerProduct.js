import { Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";
import PerProductCard from "../components/PerProductCard";
import BackButton from "../components/BackButton";

export default function PerProduct() {
    const {user} = useContext(UserContext)

    return (
        <Grid container>
            {(!user.isAdmin) ?
                <>
                <Grid container justifyContent="center">
                    <Grid item xs={12}><BackButton props={{link: "/products"}}/></Grid>
                    <Grid item xs={12} p={3}>
                        <PerProductCard />
                    </Grid>
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
    )
}