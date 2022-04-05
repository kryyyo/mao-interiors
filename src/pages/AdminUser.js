import DashboardHeader from "../components/DashboardHeader";
import UserContext from "../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function AdminUser() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ?
        <>
            {(user.isAdmin) ?
            <DashboardHeader />
            :
            <Navigate to ="/dashboard" />}
        </>
        :
        <Navigate to ="/login" />
    )
}