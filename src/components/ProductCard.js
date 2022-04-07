import { Box, Card, Typography, Grid } from "@mui/material";
import CardTypography from "./CardTypography";
import CommonButton from "./CommonButton";

export default function ProductCard() {
    return (
        <Grid
            item
            xs={12}
            key="12321321"
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
                            <img src="http://placekitten.com/200/200" alt="trip lang" style={{width: "100%"}}/>
                            <Typography variant="subtitle1">Product View</Typography>
                            </Box>
                            <Box>
                            <img src="http://placekitten.com/200/200" alt="trip lang" style={{width: "100%"}}/>
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
                            <CardTypography props={{title: "Product Id:", content: "12312312"}} />
                            <CardTypography props={{title: "Name:", content: "chikamuna"}} />
                            <CardTypography props={{title: "Description:", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut luctus arcu. Vestibulum quis malesuada urna. Duis non vulputate dui. In convallis dignissim accumsan. Fusce nec faucibus velit, et malesuada dolor. Suspendisse vehicula urna nibh. Curabitur aliquam, lacus a mollis mattis, turpis mi iaculis ex, ut iaculis leo tortor a nibh. Curabitur et magna pulvinar magna dapibus interdum at sed est. Aliquam ornare gravida fermentum. Sed dignissim volutpat est eu pretium. Duis vestibulum nibh in iaculis vehicula. Nunc pharetra bibendum nunc, eget bibendum elit."}} />
                            <CardTypography props={{title: "Category:", content: "chika"}} />
                            <CardTypography props={{title: "Room:", content: "chika"}} />
                            <CardTypography props={{title: "Unit Price:", content: 1231231}} />
                            <CardTypography props={{title: "Stocks:", content: 123}} />
                            <CardTypography props={{title: "isActive:", content: "oo"}} />
                            <CardTypography props={{title: "isPromoted:", content: "nope"}} />
                            <CardTypography props={{title: "No. of Orders:", content: "10"}} />
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
                            <CommonButton props={{name: "Edit", color: "#4b5320"}}/>
                            <CommonButton props={{name: "Promote", color: "#800080"}} />
                            <CommonButton props={{name: "Archive", color: "#cc3300"}} />
                            <CommonButton props={{name: "Delete", color: "#990f02"}} />
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}