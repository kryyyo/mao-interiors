import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

export default function UserCard() {
  return (
    <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
    >
        <Card variant="outlined" sx={{ padding: 2 }}>
        <CardContent>
            <Typography variant="h5" component="div">
            Collene De Silva
            </Typography>
            <Typography 
                sx={{ 
                    mb: 1.5,
                    fontSize: "12px",
                }} 
                color="text.secondary"
                noWrap
            >
            <Link component={RouterLink} to="/login" underline="always">user121212121212112121212id</Link>
            </Typography>

            <Grid
                container
            >
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography sx={{ fontSize: "12px",}} color="text.secondary">First Name</Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography variant="body2">Collene</Typography>
                </Grid>
            </Grid>

            <Grid
                container
            >
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography sx={{ fontSize: "12px",}} color="text.secondary">Last Name</Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography variant="body2">De Silva</Typography>
                </Grid>
            </Grid>
            
            <Grid
                container
            >
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography sx={{ fontSize: "12px",}} color="text.secondary">Mobile No</Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography variant="body2">09050463437</Typography>
                </Grid>
            </Grid>
            
            <Grid
                container
            >
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography sx={{ fontSize: "12px",}} color="text.secondary">Email</Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        display: "flex",
                    }}
                >
                    <Typography variant="body2" sx={{ overflow: 'auto' }}>collene.desilva@gmail.com</Typography>
                </Grid>
            </Grid>
                
            <Grid
                container
            >
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography sx={{ fontSize: "12px",}} color="text.secondary">isAdmin</Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography variant="body2">No</Typography>
                </Grid>
            </Grid>

            <Grid
                container
            >
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography sx={{ fontSize: "12px",}} color="text.secondary">Orders</Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        display: "flex"
                    }}
                >
                    <Typography variant="body2"><Link component={RouterLink} to="/login" underline="always">View User Orders</Link></Typography>
                </Grid>
            </Grid>

        </CardContent>
        <CardActions>
            <Button 
                sx={{
                    color: "#4b5320",
                    border: 1,
                    borderColor: "#4b5320",
                    borderRadius: 6,
                    padding: 1,
                    paddingX: 6
                }}
            >
            Set as Admin
            </Button>
        </CardActions>
        </Card>
    </Grid>
  );
}
