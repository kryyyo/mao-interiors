import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function UserCard() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    }, []);

    function toggleAdmin(user) {
        if (!(user.isAdmin)) {
            Swal.fire({
                title: 'Are you sure?',
                text: "User will be an admin after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, make admin!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/users/${user._id}/setadmin`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'User is now an admin!',
                    'success'
                  )
                  window.location.reload(false)
                  navigate('/admin/users')
                  
                }
              })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "User will be a regular user after this",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4b5320',
                cancelButtonColor: '#990f02',
                confirmButtonText: 'Yes, remove as admin!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/users/${user._id}/setadmin`,{
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                  Swal.fire(
                    'All set!',
                    'User is now A regular user!',
                    'success'
                  )

                  window.location.reload(false)
                  navigate('/admin/users')
                }
              })
        }
    }

  return (
    <>
        {
            users.map((user)=> {
                return (  
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                        key={user._id}
                    >
                        <Card variant="outlined" sx={{ padding: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            {user.firstName} {user.lastName}
                            </Typography>
                            <Typography 
                                sx={{ 
                                    mb: 1.5,
                                    fontSize: "12px",
                                }} 
                                color="text.secondary"
                                noWrap
                            >
                            {user._id}
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
                                    <Typography variant="body2">{user.firstName}</Typography>
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
                                    <Typography variant="body2">{user.lastName}</Typography>
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
                                    <Typography variant="body2">{user.mobileNo}</Typography>
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
                                    <Typography variant="body2" sx={{ overflow: 'auto' }}>{user.email}</Typography>
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
                                    <Typography variant="body2">{user.isAdmin ? "Yes" : "No"}</Typography>
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
                            {
                                user.isAdmin ?
                                <Button 
                                    sx={{
                                        color: "#990f02",
                                        border: 1,
                                        borderColor: "#990f02",
                                        borderRadius: 6,
                                        padding: 1,
                                        paddingX: 6
                                    }}
                                    onClick={() => toggleAdmin(user)}
                                >
                                Remove as Admin
                                </Button>
                                :
                                <Button 
                                    sx={{
                                        color: "#4b5320",
                                        border: 1,
                                        borderColor: "#4b5320",
                                        borderRadius: 6,
                                        padding: 1,
                                        paddingX: 6
                                    }}
                                    onClick={() => toggleAdmin(user)}
                                >
                                Set as Admin
                                </Button>
                            }
                        </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
    </>
  );
}
