import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import { Typography, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function CartCards() {
    const [products, setProducts] = useState([]);

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

    return (
        products.map((product) => {
            return (
                <Grid item xs={12} borderBottom={1} py={5} borderColor="grey.500">
                    <Grid container justifyContent="center" alignItems="flex-start" spacing={3}>
                        <Grid item xs={5} sm={2}>
                            <IconButton
                                sx={{ color: "#990f02"}}
                            >
                                <DeleteOutlineIcon />
                            </IconButton>

                            <IconButton
                                sx={{ color: "#4b5320"}}
                            >
                                <EditIcon />
                            </IconButton>

                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Qty"
                                defaultValue={product.quantity}
                                sx={{width: "25%"}}
                            />
                        </Grid>

                        <Grid item xs={7} sm={5}>
                            <img src="https://placekitten.com/300/300" alt="mycathover" style={{width: "100%"}}/>
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
    )
}