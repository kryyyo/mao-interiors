import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import UserContext from "../UserContext";
import { useContext } from "react";
import CheckOutCard from "../components/CheckOutCard";

export default function CheckOut() {

    const {user} = useContext(UserContext)

    const [isCartEmpty, setIsCartEmpty] = useState(false)

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/users/myCart`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                setIsCartEmpty(false)
            } else {
                setIsCartEmpty(true)
            }
        })
    });

    return (
        (user.id !== null) ?
        <Grid container justifyContent="center">
            {(!user.isAdmin) ?
               <>
               {
                   isCartEmpty ?
                   <Navigate to ="/products" />
                   :
                   <CheckOutCard />
               }
               </>
            :
            <Navigate to ="/dashboard" />}
        </Grid>
        :
        <Navigate to ="/login" />
    )
}