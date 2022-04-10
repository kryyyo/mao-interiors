import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ProductCardNormal from "./ProductCardNormal";

export default function ProductCard() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/products/admin`, {
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
        <>
       
            {
                products.map(product => {
                    return (
                    <Grid
                        item
                        xs={12}
                        key={product._id}
                    >
                        <ProductCardNormal props={{product}} />
                    </Grid>
                    )
                    
                })
            }
        </>
    )
}