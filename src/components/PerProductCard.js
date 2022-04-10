import { Grid, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PerProductCard() {

    const [products, setProducts] = useState([]);

    const { productId } = useParams()

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
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
    )
}

                                        