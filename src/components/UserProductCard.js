import { Grid, IconButton, Typography, Box, Link } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


export default function UserProductCard() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/products/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    });

    function quickAddToCart(product) {
        if (product.stocks > 0) {
            fetch(`${ process.env.REACT_APP_API_URL }/users/${product._id}/cart`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
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
        <>
        {
            (products.length > 0) ?
            products.map(product => {
                return (
                    <Grid item xs={6} sm ={3} key={product._id}>
                        <Link component={RouterLink} to={product._id} underline="none" sx={{color: "#000"}}>
                            <Grid container>
                                <Grid item xs={12}
                                    sx={{
                                        backgroundImage: `url(${product.imageRoomURL})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <Box sx={{'&:hover': {opacity: 0}, width: "100%", height: "100%"}}><img src={product.imageURL} alt="product view" style={{width: "100%", height: "100%"}} id={product._id}/></Box>
                                </Grid>
    
                                <Grid item xs={12} mt={2}>
                                    <Grid container>
                                        <Grid item xs={10}>
                                            <Typography variant="body1" sx={{'&:hover': {textDecoration: "underline"}}}><b>{product.name}</b></Typography>
                                            <Typography variant="body2">{product.category}</Typography>
                                            <Typography variant="h6"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{product.unitPrice}</strong></Typography>
                                        </Grid>
    
                                        <Grid item xs={1} alignSelf="flex-end" mr={1}>
                                            <IconButton
                                                aria-label="add to shopping cart"
                                                sx={{color: "#000"}}
                                                onClick={
                                                    (e) => {e.preventDefault(); quickAddToCart(product)}
                                                }
                                            >  
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Grid> 
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                )
            })
            :
            <Grid item sx={{display: "flex"}}><ErrorOutlineIcon sx={{mr: 2, color: "#990f02"}}/><Typography variant="body1">Empty Products!</Typography></Grid>
        }
        </>
    )
}

