import { Grid, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function PerProductCard() {

    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const { productId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    });

    function addToCart(product) {
        if (product.stocks > 0) {
            fetch(`${ process.env.REACT_APP_API_URL }/users/${productId}/cartproducts`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: quantity
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.product === `Added to Cart`) {
                    Swal.fire({
                        title: "Item added to cart!", 
                        icon: "success",
                        text: "You have successfully added the item!"
                    })
                } else if (data.product === `Product already exists. Quantity Added!`) {
                    Swal.fire({
                        title: "Item already in cart. Added quantity to the item!", 
                        icon: "success",
                        text: "You have successfully added quantity!"
                    })
                } else if (data.auth === "failed") {
                    Swal.fire({
                        title: 'You are not logged in!',
                        text: "Please login to add something to your cart",
                        icon: 'error',
                        showCancelButton: true,
                        confirmButtonColor: '#4b5320',
                        cancelButtonColor: '#990f02',
                        confirmButtonText: 'Go to Login'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/login")
                        }
                    })
                } else {
                    Swal.fire({
                        title: "Something went wrong!",
                        icon: "error", 
                        text: "Please try again."
                    })
                }
            })
        } else {
            Swal.fire({
                title: "Sorry! Product already out of stock",
                icon: "error", 
                text: "Updating your page..."
            })
        }
    }
    
    return (
        products.map((product) => {
            return (
                <Grid container key={product._id} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={8} p={3}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} sm={6} >
                                <img src={product.imageURL} alt="mycat" style={{width: "100%"}}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <img src={product.imageRoomURL} alt="mycathover" style={{width: "100%"}}/>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="body1">{product.description}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} p={3}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item xs={12} borderBottom={1} borderColor='grey.500' mb={2} pb={3}>
                                <Grid container justifyContent="center">
                                    <Grid item xs={9} sm={8}>
                                        <Typography variant="h6">{product.name}</Typography>
                                        <Typography variant="body2">{product.category}</Typography>
                                    </Grid>

                                    <Grid item xs={3} sm={3}>
                                        <Typography variant="h5"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{product.unitPrice}</strong></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} mb={2}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={3}>
                                        <FormControl fullWidth>
                                            <InputLabel id="quantity">Qty</InputLabel>
                                            <Select
                                                labelId="quantity"
                                                id="quantity"
                                                value={quantity}
                                                label="Qty"
                                                onChange={(e) => setQuantity(e.target.value)}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={9}>
                                        <Button
                                            id="addtocart-button"
                                            type="submit"
                                            variant="contained"
                                            disableElevation
                                            sx={{
                                                color: "#f1f1f1",
                                                backgroundColor: "#000",
                                                borderRadius: 6,
                                                padding: 1,
                                                paddingX: 6,
                                                width: "100%"
                                            }}
                                            onClick = {(e) => {e.preventDefault(); addToCart(product)}}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
    )
}

                                        