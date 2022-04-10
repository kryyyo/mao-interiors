import { Grid, Card, Typography, CardContent, Box } from "@mui/material"
import CardTypography from "./CardTypography"
import CardTypography1 from "./CardTypography1"
import { useEffect, useState } from "react"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function MyOrderCard() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/myOrders`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    });

    return (
        <>
            {
                !orders ? 
                    <Grid item sx={{display: "flex"}}><ErrorOutlineIcon sx={{mr: 2, color: "#990f02"}}/><Typography variant="body1">You have no orders yet!</Typography></Grid>
                :
                <>
                {
                    orders.map((order) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={6}
                                xl={6}
                                key={order._id}
                            >
                                <Card variant="outlined" sx={{ padding: 2 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ overflow: 'auto', whiteSpace: "nowrap" }}>
                                    Order {order._id}
                                    </Typography>

                                    <CardTypography props={{title: "Ordered On:", content: order.orderedOn}} />
                                    <CardTypography props={{title: "Status:", content: order.status}} />
                                    <CardTypography props={{title: "Products:"}} />
                                        <Box sx={{ overflow: 'auto', height: "4rem"}}>
                                            {
                                                order.products.map((product) => {
                                                    return (
                                                        <Box mb={1} key={product.productId}>
                                                            <CardTypography1 props={{subtitle: "ID", content: product.productId}} />
                                                            <CardTypography1 props={{subtitle: "Quantity", content: product.quantity}} />
                                                            <CardTypography1 props={{subtitle: "Unit Price", content: product.unitPrice}} />
                                                        </Box>
                                                    )
                                                })
                                            }
                                        </Box>
                                        
                                    <CardTypography props={{title: "Total Price:", content: order.totalPrice}} />
                                    <CardTypography props={{title: "Mode of Payment:", content: order.modeOfPayment}} />
                                    <CardTypography props={{title: "Delivery Address"}} />
                                        <Box mb={1} sx={{ overflow: 'auto', height: "5rem"}}>
                                            <CardTypography1 props={{subtitle: "First Name:", content: order.deliveryAddress.firstName}} />
                                            <CardTypography1 props={{subtitle: "Last Name:", content: order.deliveryAddress.lastName}} />
                                            <CardTypography1 props={{subtitle: "Mobile No:", content: order.deliveryAddress.mobileNo}} />
                                            <CardTypography1 props={{subtitle: "Address", content: order.deliveryAddress.address}} />
                                        </Box>
                                </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
                </>
            }
        </>
    )
}