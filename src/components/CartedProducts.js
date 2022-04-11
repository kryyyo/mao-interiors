import { Grid, Typography } from "@mui/material"
import CartCards from "./CartCards"
import { Button } from "@mui/material"
import { Box } from "@mui/system"
import Swal from "sweetalert2"
import { useState, useEffect } from "react"

export default function CartedProducts() {

    const [total, setTotal] = useState();

    function emptyCart() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Cart will be emptied!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#990f02',
            cancelButtonColor: '#4b5320',
            confirmButtonText: 'Yes, empty!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${ process.env.REACT_APP_API_URL }/users/cart`,{
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        Swal.fire(
                            'All set!',
                            'Cart Emptied',
                            'success'
                        )
                    } else {
                        Swal.fire({
                            title: "Something went wrong!",
                            icon: "error", 
                            text: "Please try again."
                        })
                    }
                })
                
            }
            })
    }

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/cart/total`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data !== false) {
                setTotal(data.totalPrice)
            }
        })
    });


    return (
        <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} p={5}>
                    <Typography variant="h5"><b>My Shopping Cart</b></Typography>
                </Grid> 

                <Grid item xs={12} px={5} pb={5}>
                    <Grid container>
                        <CartCards /> 
                    </Grid>
                </Grid>

                <Grid item xs={12} px={5} pb={5}>
                    <Button variant="text" onClick={() => emptyCart()} sx={{color: "#990f02"}}>Empty My Cart</Button>
                </Grid> 

                <Grid item xs={12} px={5} pb={5} alignSelf="flex-end">
                    <Grid container justifyContent="space-between">
                        <Typography variant="h5"><b>Total for this order:</b></Typography>
                        <Typography variant="h4"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{total}</strong></Typography>
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
                        >
                            Proceed to Checkout
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}