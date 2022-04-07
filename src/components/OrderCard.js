import { Grid, Card, Typography, CardContent, CardActions, Box } from "@mui/material"
import CardTypography from "./CardTypography"
import CardTypography1 from "./CardTypography1"
import CommonButton from "./CommonButton"
import { useEffect, useState } from "react"

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
    },[]);

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
                        key="12121"
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
                                    <Box mb={1}>
                                        <CardTypography1 props={{subtitle: "ID", content: "12312312"}} />
                                        <CardTypography1 props={{subtitle: "Quantity", content: "1"}} />
                                        <CardTypography1 props={{subtitle: "Unit Price", content: "123"}} />
                                    </Box>
                                    <Box mb={1}>
                                        <CardTypography1 props={{subtitle: "ID", content: "12312312"}} />
                                        <CardTypography1 props={{subtitle: "Quantity", content: "1"}} />
                                        <CardTypography1 props={{subtitle: "Unit Price", content: "123"}} />
                                    </Box>
                                </Box>
                                
                            <CardTypography props={{title: "Total Price:", content: order.totalPrice}} />
                            <CardTypography props={{title: "Mode of Payment:", content: order.modeOfPayment}} />
                            <CardTypography props={{title: "Delivery Address"}} />
                                <Box mb={1} sx={{ overflow: 'auto', height: "5rem"}}>
                                    <CardTypography1 props={{subtitle: "First Name:", content: "Ako"}} />
                                    <CardTypography1 props={{subtitle: "Last Name:", content: "Si Collene"}} />
                                    <CardTypography1 props={{subtitle: "Mobile No:", content: "093737373"}} />
                                    <CardTypography1 props={{subtitle: "Address", content: "Dyan lang"}} />
                                </Box>

                        </CardContent>
                        <CardActions>
                            <Grid container spacing={1}>
                                <Grid item xs={12}><CommonButton props={{name: "Complete Order", color: "#4b5320"}} /></Grid>
                                <Grid item xs={12}><CommonButton props={{name: "Delete Order", color: "#990f02"}} /></Grid>
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