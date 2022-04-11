import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import { Typography, Box } from "@mui/material";

export default function CartCards() {
    const [quantity, setQuantity] = useState();
    return (
        <>
        <Grid item xs={12} borderBottom={1} pb={5} borderColor="grey.500">
            <Grid container justifyContent="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={5} sm={2}>
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

                    <IconButton
                        sx={{ color: "#990f02"}}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </Grid>

                <Grid item xs={7} sm={5}>
                    <img src="https://placekitten.com/300/300" alt="mycathover" style={{width: "100%"}}/>
                </Grid>
                
                <Grid item xs={12} sm={5}>
                    <Grid container justifyContent="center">
                        <Grid item xs={9} sm={8}>
                            <Typography variant="h6">product.name</Typography>
                            <Typography variant="body2">product.category</Typography>
                            <Typography variant="body1">product.description</Typography>
                        </Grid>

                        <Grid item xs={3} sm={3}>
                            <Typography variant="h5"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>1000</strong></Typography>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" mt={6}>
                        <Grid item xs={8} sm={8}>
                            <Typography variant="h6">Subtotal</Typography>
                        </Grid>

                        <Grid item xs={4} sm={3}>
                            <Typography variant="h4"><Box sx={{display: "inline", fontSize: "0.5em"}}>&#8369;</Box><strong>1000</strong></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}