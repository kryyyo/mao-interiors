import { Grid, Button, Typography, Box, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import DashboardHeader from "../components/DashboardHeader";
import UserContext from "../UserContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function AdminProducts() {
    const {user} = useContext(UserContext)

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [room, setRoom] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [stocks, setStocks] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [imageRoomURL, setImageRoomURL] = useState('');

    function addProduct(e) {
        e.preventDefault()
        
        function isNotEmpty(input) {
            return (input !== '') ? true : false;
        }
    
        if (isNotEmpty(productName) && 
            isNotEmpty(description) &&
            isNotEmpty(category) &&
            isNotEmpty(room) && 
            isNotEmpty(unitPrice) &&
            isNotEmpty(stocks) &&
            isNotEmpty(imageURL) &&
            isNotEmpty(imageRoomURL)){
               proceedAdd()
        } else {
            Swal.fire({
                title: "Missing inputs!",
                icon: "error", 
                text: "Please fill in all inputs."
            })
            }

        function proceedAdd() {
            fetch(`${ process.env.REACT_APP_API_URL }/products/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                
                body: JSON.stringify({
                    name: productName,
                    description: description,
                    category: category,
                    room: room,
                    unitPrice: unitPrice,
                    stocks: stocks,
                    imageURL: imageURL,
                    imageRoomURL: imageRoomURL,
                })
            })
            .then(res => res.json())
            .then(data => {

                if (!(data)) {
                    Swal.fire({
                        title: "Product Already Exists!", 
                        icon: "error",
                        text: "Please enter a new product."
                    })

                } else if (data) {
                    Swal.fire({
                        title: "Add Product Success!", 
                        icon: "success",
                        text: "You have successfully added a product!"
                    })
    
                    setProductName('')
                    setDescription('')
                    setCategory('')
                    setRoom('')
                    setUnitPrice('')
                    setStocks('')
                    setImageURL('')
                    setImageRoomURL('')

                } else {
                    Swal.fire({
                        title: "Something went wrong!",
                        icon: "error", 
                        text: "Please try again."
                    })
                }
            })
        }
    }

    return (
        (user.id !== null) ?
        <Grid container>
            {(user.isAdmin) ?
                <>
                <Grid item xs={1}><BackButton props={{link: "/dashboard/admin/products"}}/></Grid>
                <Grid item xs={12}><DashboardHeader /></Grid>
                <Grid
                    item
                    xs={12}
                    container
                    padding={2}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    mb={4}
                >
                    <Grid
                        item
                        xs={10}
                        sm={6}
                        lg={4}
                    >
                            <Typography
                                variant="h4"
                                component="h1"
                            >
                                Add a new product!
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex", 
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                component="form"
                                onSubmit = {(e) => addProduct(e)}
                            >
                                <TextField
                                    sx={{
                                        marginBottom: 2
                                    }}
                                    required
                                    id="reg-name"
                                    label="Product Name"
                                    type="text"
                                    variant="standard"
                                    autoFocus
                                    value = {productName}
                                    onChange = {e => setProductName(e.target.value)}
                                />
                                <TextField
                                    sx={{
                                        marginBottom: 2
                                    }}
                                    required
                                    id="reg-description"
                                    label="Description"
                                    type="text"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    value = {description}
                                    onChange = {e => setDescription(e.target.value)}
                                />
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ marginRight: 5}}>
                                            <InputLabel id="reg-category">Category</InputLabel>
                                            <Select
                                                labelId="reg-category"
                                                id="select-category"
                                                value = {category}
                                                onChange = {e => setCategory(e.target.value)}
                                                label="Category"
                                                required
                                                sx={{
                                                    marginBottom: 2
                                                }}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {/* We can loop for this after we finalize categories */}
                                            <MenuItem value={"Bed"}>Bed</MenuItem>
                                            <MenuItem value={"Sofa"}>Sofa</MenuItem>
                                            <MenuItem value={"Chair"}>Chair</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="reg-room">Room</InputLabel>
                                            <Select
                                                labelId="reg-room"
                                                id="select-room"
                                                value = {room}
                                                onChange = {e => setRoom(e.target.value)}
                                                label="Room"
                                                required
                                                sx={{
                                                    marginBottom: 2
                                                }}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {/* We can loop for this after we finalize room */}
                                            <MenuItem value={"Bedroom"}>Bedroom</MenuItem>
                                            <MenuItem value={"Living Room"}>Living room</MenuItem>
                                            <MenuItem value={"Chair"}>Chair</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Box
                                    sx={{display: "flex", justifyContent: "space-between"}}
                                >
                                    <TextField
                                        sx={{
                                            marginBottom: 2,
                                            marginRight: 2
                                        }}
                                        required
                                        id="reg-unitPrice"
                                        label="Unit Price"
                                        inputProps={{
                                            inputMode: 'numeric',
                                            minLength:"1",
                                            min: 1, 
                                        }}
                                        type="number"
                                        variant="standard"
                                        value = {unitPrice}
                                        onChange = {e => setUnitPrice(e.target.value)}
                                        min = "0"
                                    />
                                    <TextField
                                        sx={{
                                            marginBottom: 2
                                        }}
                                        required
                                        id="reg-stocks"
                                        label="Stocks"
                                        inputProps={{
                                            inputMode: 'numeric',
                                            minLength:"1",
                                            min: 0, 
                                        }}
                                        type="number"
                                        variant="standard"
                                        value = {stocks}
                                        onChange = {e => setStocks(e.target.value)}
                                        min = "0"
                                    />
                                </Box>
                                <TextField
                                    sx={{
                                        marginBottom: 2
                                    }}
                                    required
                                    id="reg-imageURL"
                                    label="Image URL"
                                    type="url"
                                    variant="standard"
                                    value = {imageURL}
                                    onChange = {e => setImageURL(e.target.value)}
                                />
                                <TextField
                                    sx={{
                                        marginBottom: 2
                                    }}
                                    required
                                    id="reg-imageURL"
                                    label="Image Room URL"
                                    type="url"
                                    variant="standard"
                                    value = {imageRoomURL}
                                    onChange = {e => setImageRoomURL(e.target.value)}
                                />
                                <Button
                                    id="reg-button"
                                    type="submit"
                                    variant="contained"
                                    disableElevation
                                    sx={{
                                        color: "#f1f1f1",
                                        backgroundColor: "#000",
                                        borderRadius: 6,
                                        padding: 1,
                                        paddingX: 6,
                                        mt: 2,
                                    }}
                                >
                                    Add Product
                                </Button>
                            </Box>
                    </Grid>
                </Grid>
                </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}