import { Navigate } from "react-router-dom"
import UserContext from "../UserContext"
import { useContext } from "react"
import { Grid } from "@mui/material"
import CartedProducts from "../components/CartedProducts"

export default function CartPage() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ?
        <Grid container justifyContent="center">
            {(!user.isAdmin) ?
                <CartedProducts />
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}