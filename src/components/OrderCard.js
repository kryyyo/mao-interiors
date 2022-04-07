import { Grid, Card, Typography, CardContent, CardActions, Box } from "@mui/material"
import CardTypography from "./CardTypography"
import CardTypography1 from "./CardTypography1"
import CommonButton from "./CommonButton"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export default function OrderCard() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/orders`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    });

    function toggleComplete(order) {
        if (order.status === "Purchased") {
            Swal.fire({
                title: 'Are you sure?',
                text: "Order will be completed after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, complete order!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/users/orders/${order._id}`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'Order is now completed!',
                    'success'
                  )
                }
              })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Order will be pending after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, undo complete!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/users/orders/${order._id}`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'Order is now pending!',
                    'success'
                  )
                }
              })
        }
    }

    function deleteOrder(order) {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "Order will be deleted and cannot be retrieved!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#990f02',
            cancelButtonColor: '#4b5320',
            confirmButtonText: 'Yes, delete!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${ process.env.REACT_APP_API_URL }/users/orders/${order._id}`,{
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

    return (
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

                            <CardTypography props={{title: "User Id:", content: order.userId}} />
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
                        <CardActions>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {
                                        order.status === "Purchased" ?
                                        <CommonButton props={{name: "Complete Order", color: "#4b5320", onClick: () => toggleComplete(order)}} />
                                        :
                                        <CommonButton props={{name: "Undo Complete", color: "#990f02", onClick: () => toggleComplete(order)}} />
                                    }
                                </Grid>
                                <Grid item xs={12}><CommonButton props={{name: "Delete Order", color: "#990f02", onClick: () => deleteOrder(order)}} /></Grid>
                            </Grid>
                        </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
        </>
    )
}