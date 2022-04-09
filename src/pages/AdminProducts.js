import { Grid, Button } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import DashboardHeader from "../components/DashboardHeader";
import UserContext from "../UserContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";

export default function AdminProducts() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ?
        <Grid container>
            {(user.isAdmin) ?
                <>
                <Grid item xs={1}><BackButton props={{link: "/dashboard"}}/></Grid>
                <Grid item xs={12}><DashboardHeader /></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} paddingX={5}>
                        <Button
                            variant="contained"
                            disableElevation
                            sx={{
                                color: "#f1f1f1",
                                backgroundColor: "#000",
                                borderRadius: 6,
                                padding: 1,
                                paddingX: 6,
                                mt: 2,
                            }}
                            component={Link}
                            to="add"
                        >
                            Add Products
                        </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    padding={5}
                    spacing={2}
                >
                    <ProductCard />
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}