import { Typography, Grid } from "@mui/material";
import UserProductCard from "../components/UserProductCard";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function Products() {
    const {user} = useContext(UserContext)

    return (
        <Grid container>
            {(!user.isAdmin) ?
                <>
                <Grid container>
                    <Grid item xs={12} p={3}>
                        <Typography variant="h5"><b>All Products</b></Typography>
                    </Grid>

                    <Grid item xs={12} p={3}>
                        <Grid container spacing={4}>
                            <UserProductCard />
                        </Grid>
                    </Grid>
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
    )
}