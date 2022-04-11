import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Typography, Grid, TextField, Button } from "@mui/material";
import CommonButton from "./CommonButton";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { FormControl, Select, MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function EditProductCard() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const { productId } = useParams()

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [room, setRoom] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [stocks, setStocks] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [imageRoomURL, setImageRoomURL] = useState('');

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/products/admin/${productId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    },[productId]);

    useEffect(() => {
        setProductName(product.name)
        setDescription(product.description)
        setUnitPrice(product.unitPrice)
        setStocks(product.stocks)
        setImageURL(product.imageURL)
        setImageRoomURL(product.imageRoomURL)
    },[product])

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
          zIndex: 1,
          '& .MuiImageBackdrop-root': {
            opacity: 0.15,
          },
          '& .MuiImageMarked-root': {
            opacity: 0,
          },
          '& .MuiTypography-root': {
            border: '4px solid currentColor',
          },
        },
      }));
      
      const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      });
      
      const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      }));
      
      const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      }));
      
      const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      }));

    async function changeImageURL(e) {
        const { value: url } = await Swal.fire({
            input: 'url',
            inputLabel: 'URL address',
            inputPlaceholder: 'Enter the URL'
          })
          
          if (url) {
            setImageURL(`${url}`)
            Swal.fire(`Entered Product URL: ${url}`)
          }
    }

    async function changeImageRoomURL(e) {
        const { value: url } = await Swal.fire({
            input: 'url',
            inputLabel: 'URL address',
            inputPlaceholder: 'Enter the URL'
          })
          
          if (url) {
            setImageRoomURL(`${url}`)
            Swal.fire(`Entered Room URL: ${url}`)
          }
    }

    function saveProduct(e) {
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
               proceedSave()
        } else {
            Swal.fire({
                title: "Missing inputs!",
                icon: "error", 
                text: "Please fill in all inputs."
            })
            }

        function proceedSave() {
            fetch(`${ process.env.REACT_APP_API_URL }/products/${productId}`, {
                method: 'PUT',
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
                        title: "Check your inputs!", 
                        icon: "error",
                        text: "Please try again."
                    })

                } else if (data) {
                    Swal.fire({
                        title: "Update Product Success!", 
                        icon: "success",
                        text: "Product successfully updated!"
                    })

                    navigate("/dashboard/admin/products")

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
        <Grid
            item
            xs={12}
            key={product._id}
        >
            <Card variant="outlined" sx={{ padding: 2 }}>
                <Box
                    component="form"
                    onSubmit = {(e) => saveProduct(e)}
                >
                    <Grid container spacing={4} justifyContent="center">
                        {/* START IMAGE BUTTONS */}
                            <Grid item alignSelf="center" xs={12} sm={6} md={2} lg={2}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Box sx={{mb: 2}}>
                                        <ImageButton
                                            focusRipple
                                            key={product._id}
                                            style={{
                                                width: "100%",
                                            }}
                                            className="img-product"
                                            onMouseDown={(e) => changeImageURL(e)}
                                        >
                                        <ImageSrc style={{ backgroundImage: `url(${imageURL})` }} />
                                        <ImageBackdrop className="MuiImageBackdrop-root" />
                                        <Image>
                                            <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                            sx={{
                                                position: 'relative',
                                                p: 4,
                                                pt: 2,
                                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                            }}
                                            >
                                            Product
                                            <ImageMarked className="MuiImageMarked-root" />
                                            </Typography>
                                        </Image>
                                        </ImageButton>
                                    </Box>
                                    <Box>
                                        <ImageButton
                                            focusRipple
                                            style={{
                                                width: "100%",
                                            }}
                                            className="img-room"
                                            onMouseDown={(e) => changeImageRoomURL(e)}
                                        >
                                        <ImageSrc style={{ backgroundImage: `url(${imageRoomURL})` }} />
                                        <ImageBackdrop className="MuiImageBackdrop-root" />
                                        <Image>
                                            <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                            sx={{
                                                position: 'relative',
                                                p: 4,
                                                pt: 2,
                                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                            }}
                                            >
                                            Room View
                                            <ImageMarked className="MuiImageMarked-root" />
                                            </Typography>
                                        </Image>
                                        </ImageButton>
                                    </Box>
                                </Box>
                            </Grid>
                        {/* END IMAGE BUTTONS */}
                        
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <TextField
                                    sx={{
                                    marginBottom: 2
                                    }}
                                    required
                                    id="reg-name"
                                    label="Product Name"
                                    type="text"
                                    variant="outlined"
                                    autoFocus
                                    value = {productName}
                                    onChange = {e => setProductName(e.target.value)}
                                    fullWidth
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
                                    fullWidth
                                />

                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={6}>
                                        <FormControl fullWidth sx={{ marginRight: 5}}>
                                            <InputLabel id="reg-category">Category</InputLabel>
                                            <Select
                                                labelId="reg-category"
                                                id="select-category"
                                                defaultValue={product.category}
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
                                                <MenuItem value={"Table"}>Table</MenuItem>
                                                <MenuItem value={"Sofa"}>Sofa</MenuItem>
                                                <MenuItem value={"Lighting"}>Lighting</MenuItem>
                                                <MenuItem value={"Bed"}>Bed</MenuItem>
                                                <MenuItem value={"Shelves"}>Shelves</MenuItem>
                                                <MenuItem value={"Chair"}>Chair</MenuItem>
                                                <MenuItem value={"Decor"}>Decor</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="reg-room">Room</InputLabel>
                                            <Select
                                                labelId="reg-room"
                                                id="select-room"
                                                defaultValue={product.room}
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
                                                <MenuItem value={"Living Area"}>Living Area</MenuItem>
                                                <MenuItem value={"Dining"}>Dining</MenuItem>
                                                <MenuItem value={"Bathroom"}>Bathroom</MenuItem>
                                                <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
                                                <MenuItem value={"Home Office"}>Home Office</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={6}>
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
                                            value ={unitPrice}
                                            onChange = {e => setUnitPrice(e.target.value)}
                                            min = "0"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
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
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                
                        <Grid item xs={12} sm={12} md={3} lg={3} alignSelf="center">
                            <Box 
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                    <Button 
                                        sx={{
                                            color: "#4b5320",
                                            border: 1,
                                            borderColor: "#4b5320",
                                            borderRadius: 6,
                                            padding: 1,
                                            paddingX: 6,
                                            width: "100%",
                                            marginBottom: 1,
                                        }}
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                    <CommonButton props={{name: "Cancel", color: "#990f02", onClick: () => navigate("/dashboard/admin/products")}}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    )
}