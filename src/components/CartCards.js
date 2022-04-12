import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import { Typography, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Swal from "sweetalert2";
import { Button } from "@mui/material";

export default function CartCards() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/myCart`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    });
    
    function removeItem(product) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Product will be deleted and cannot be retrieved!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#990f02',
            cancelButtonColor: '#4b5320',
            confirmButtonText: 'Yes, delete!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${ process.env.REACT_APP_API_URL }/users/${product.productId}/cart`,{
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                Swal.fire(
                'All set!',
                'Order deleted!',
                'success'
                )
            }
            })
    }

    async function editItem(product) {
        const { value: number } = await Swal.fire({
            input: 'number',
            inputLabel: 'Modify Quantity',
            inputPlaceholder: 'Enter the quantity'
          })
          
          if (number) {
            Swal.fire({
                title: 'Are you sure?',
                text: "Quantity will be modified after this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#990f02',
                cancelButtonColor: '#4b5320',
                confirmButtonText: 'Yes, modify!'
                }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/users/${product.productId}/cart`,{
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({
                            quantity: number
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire(
                                'All set!',
                                'Quantity modified!',
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

    return (
        <>
        {
            products.map((product) => {
                return (
                    <Grid item xs={12} borderBottom={1} py={5} borderColor="grey.500" key={product.productId}>
                        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
                            <Grid item xs={12} sm={3} md={2}>
                                <IconButton
                                    sx={{ color: "#990f02"}}
                                    onClick= {() => removeItem(product)}
                                >
                                    <DeleteOutlineIcon />
                                </IconButton>
    
                                <IconButton
                                    sx={{ color: "#4b5320"}}
                                    onClick= {() => editItem(product)}
                                >
                                    <EditIcon />
                                    
                                </IconButton>
    
                                <TextField
                                    disabled
                                    id="outlined-disabled"
                                    label="Qty"
                                    value={product.quantity}
                                    sx={{width: "25%"}}
                                />
                            </Grid>
    
                            <Grid item xs={12} sm={4} md={5}>
                                <img src={product.imageURL} alt="product view" style={{width: "100%"}}/>
                            </Grid>
                            
                            <Grid item xs={12} sm={5}>
                                <Grid container justifyContent="space-between">
                                    <Grid item xs={8} sm={8}>
                                        <Typography variant="h6">{product.name}</Typography>
                                        <Typography variant="body2">{product.category}</Typography>
                                        <Typography variant="body1">{product.description}</Typography>
                                    </Grid>
    
                                    <Grid item xs={4} sm={3}>
                                        <Typography variant="h5"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{product.unitPrice}</strong></Typography>
                                    </Grid>
                                </Grid>
    
                                <Grid container justifyContent="space-between" mt={6}>
                                    <Grid item xs={8} sm={8}>
                                        <Typography variant="h6">Subtotal</Typography>
                                    </Grid>
    
                                    <Grid item xs={4} sm={3}>
                                        <Typography variant="h4"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{product.unitPrice * product.quantity}</strong></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })
        }

        <Grid item xs={12} p={5} alignSelf="flex-end">
            <Grid container justifyContent="space-between">
                <Typography variant="h5"><b>Total for this order:</b></Typography>
                <Typography variant="h4"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{total}</strong></Typography>
            </Grid>
        </Grid>

        <Grid item xs={12} px={5} pb={5}>
            <Button variant="text" onClick={() => emptyCart()} sx={{color: "#990f02"}}>Empty My Cart</Button>
        </Grid> 
        </>
    )
}