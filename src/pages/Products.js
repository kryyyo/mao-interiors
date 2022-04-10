import { Typography, Grid } from "@mui/material";
import UserProductCard from "../components/UserProductCard";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function Products() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ?
        <Grid container>
            {(!user.isAdmin) ?
                <>
                <Grid container>
                    <Grid item xs={12} p={5}>
                        <Typography variant="h5"><b>All Products</b></Typography>
                    </Grid>

                    <Grid item xs={12} p={5}>
                        <Grid container spacing={3}>
                            <UserProductCard />
                        </Grid>
                    </Grid>
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />

        
    )
}