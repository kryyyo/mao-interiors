import { Grid, IconButton, Typography, Box, Link } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";



export default function UserProductCard() {

    const [products, setProducts] = useState([]);
    

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

    return (
        products.map(product => {
            return (
                <Grid item xs={6} sm ={3} key={product._id}>
                    <Link component={RouterLink} to={product._id} underline="none" sx={{color: "#000"}}>
                        <Grid container>
                            <Grid item xs={12}>
                                <img src={product.imageURL} alt="product view" style={{width: "100%"}} id={product._id}/>
                            </Grid>

                            <Grid item xs={12} mt={2}>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography variant="h6" sx={{'&:hover': {textDecoration: "underline"}}}>{product.name}</Typography>
                                        <Typography variant="body2">{product.category}</Typography>
                                        <Typography variant="h5"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>{product.unitPrice}</strong></Typography>
                                    </Grid>

                                    <Grid item xs={1} alignSelf="flex-end" mr={1}>
                                        <IconButton aria-label="add to shopping cart" sx={{color: "#000"}} onClick={(e) => e.preventDefault()}>  
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
    )
}

