import { Navigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import UserContext from "../UserContext";

export default function Logout() {

    const {unsetUser, setUser} = useContext(UserContext); 
    localStorage.clear()
    unsetUser();

    useEffect(() => {
        setUser({
            id: null,
			isAdmin: null,
            firstName: null,
        })
    });

    return(
        <Navigate to="/login" />
    )
}
