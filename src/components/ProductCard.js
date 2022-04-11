import { Grid, Card, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import CommonButton from "./CommonButton";
import CardTypography from "./CardTypography";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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

    function deleteProduct(product) {
        
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
                fetch(`${ process.env.REACT_APP_API_URL }/products/${product._id}`,{
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

    function toggleActive(product) {
        if (!(product.isActive)) {
            Swal.fire({
                title: 'Are you sure?',
                text: "Product will be active after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, activate!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/products/${product._id}/archive`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'Product is now active!',
                    'success'
                  )
                }
              })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Product will be archived after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, archive!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/products/${product._id}/archive`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'Product is now archived!',
                    'success'
                  )
                }
              })
        }
    }

    function togglePromote(product) {
        if (!(product.isPromoted)) {
            Swal.fire({
                title: 'Are you sure?',
                text: "Product will be promoted after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, promote!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/products/${product._id}/promote`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'Product is now promoted!',
                    'success'
                  )
                }
              })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Product will not be promoted after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, undo promote!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/products/${product._id}/promote`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'Undo promotion!',
                    'success'
                  )
                }
              })
        }
    }

    return (
        <>
            {
                (products.length > 0) ?
                <>
                {
                    products.map(product => {
                        return (
                        <Grid
                            item
                            xs={12}
                            key={product._id}
                        >
                            <Card variant="outlined" sx={{ padding: 2 }}>
                                <Grid container spacing={4} justifyContent="center">
                                    <Grid item alignSelf="center" xs={12} sm={6} md={2} lg={2}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Box sx={{mb: 2}}>
                                            <img src={product.imageURL} alt="product view" style={{width: "100%"}}/>
                                            <Typography variant="subtitle1">Product View</Typography>
                                            </Box>
                                            <Box>
                                            <img src={product.imageRoomURL} alt="room view" style={{width: "100%"}}/>
                                            <Typography variant="subtitle1">Room View</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                        >
                                            <CardTypography props={{title: "Product Id:", content: product._id}} />
                                            <CardTypography props={{title: "Name:", content: product.name}} />
                                            <CardTypography props={{title: "Description:", content: product.description}} />
                                            <CardTypography props={{title: "Category:", content: product.category}} />
                                            <CardTypography props={{title: "Room:", content: product.room}} />
                                            <CardTypography props={{title: "Unit Price:", content: product.unitPrice}} />
                                            <CardTypography props={{title: "Stocks:", content: product.stocks}} />
                                            <CardTypography props={{title: "isActive:", content: (product.isActive ? "Yes" : "No")}} />
                                            <CardTypography props={{title: "isPromoted:", content: (product.isPromoted ? "Yes" : "No")}} />
                                            <CardTypography props={{title: "No. of Orders:", content: (product.customersOrdered.length > 0 ? product.customersOrdered.length : 0)}} />
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
                                                    component={Link}
                                                    to={`edit/${product._id}`}
                                                >
                                                    Edit
                                                </Button>
                                            {
                                                product.isPromoted ?
                                                <CommonButton props={{name: "Undo Promote", color: "#990f02", onClick: () => togglePromote(product)}} />
                                                :
                                                <CommonButton props={{name: "Promote", color: "#800080", onClick: () => togglePromote(product)}} />
                                            }
                                            {
                                                product.isActive ?
                                                <CommonButton props={{name: "Archive", color: "#cc3300", onClick: () => toggleActive(product)}} />
                                                :
                                                <CommonButton props={{name: "Unarchive", color: "#4b5320", onClick: () => toggleActive(product)}} />
                                            }
                                            <CommonButton props={{name: "Delete", color: "#990f02", onClick: () => deleteProduct(product)}} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        )
                    })
                }
                </>
                :
                <Grid item sx={{display: "flex"}}><ErrorOutlineIcon sx={{mr: 2, color: "#990f02"}}/><Typography variant="body1">Empty Products!</Typography></Grid>

            }
            
        </>
    )
}