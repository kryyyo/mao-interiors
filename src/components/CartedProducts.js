import { Grid, Typography } from "@mui/material"
import CartCards from "./CartCards"
import { Button } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function CartedProducts() {

    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/myCart`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                setIsCartEmpty(false)
            } else {
                setIsCartEmpty(true)
            }
        })
    });
    
    return (
        <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} p={5}>
                    <Typography variant="h5"><b>My Shopping Cart</b></Typography>
                </Grid> 

                {
                    isCartEmpty ?
                    <Grid item sx={{display: "flex"}}><ErrorOutlineIcon sx={{mr: 2, color: "#990f02"}}/><Typography variant="body1">Cart is Empty!</Typography></Grid>
                    :
                    <>
                        <Grid item xs={12} px={5} pb={5}>
                            <Grid container>
                                <CartCards /> 
                            </Grid>
                        </Grid>

                        <Grid item xs={12} px={5} pb={5}>
                            <Grid container justifyContent="center">
                                <Button
                                    id="checkout-button"
                                    type="submit"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: "#f1f1f1",
                                        backgroundColor: "#000",
                                        borderRadius: 6,
                                        padding: 1,
                                        paddingX: 6,
                                    }}
                                    onClick = {() => navigate('checkout')}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                }
            </Grid>
        </Grid>
    )
}