import {useMediaQuery, useTheme, Box} from "@mui/material";
import DrawerComponent from "./DrawerComp";
import UserBadge from './UserBadge'
import ShoppingCartBadge from './ShoppingCartBadge';
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Header() {

    const theme = useTheme(); 
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {
                isMatch ?
                (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                            borderBottom: 1,
                            borderColor: 'grey.500',
                            flexWrap: "wrap",
                        }}
                    >
                        <Box
                            sx={{
                                marginRight: 2
                            }}
                        >
                            <DrawerComponent />
                        </Box>
                        <Box
                            sx={{
                                marginRight: 2
                            }}
                        >
                            <Box
                                component={Link}
                                to="/"
                            >
                                <img 
                                    src="https://i.imgur.com/cUq4nbL.png" 
                                    alt="logo"
                                    width="64px"
                                />
                            </Box>
                        </Box>
                        <Box 
                            sx={{
                                marginLeft: "auto",
                                display: "flex",
                            }}
                        >
                            <UserBadge />
                            <ShoppingCartBadge />
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            <SearchBar />
                        </Box>
                    </Box>
                )
                :
                (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                            borderBottom: 1,
                            borderColor: 'grey.500'
                        }}
                    >
                        <Box
                            sx={{
                                marginRight: 2
                            }}
                        >
                            <DrawerComponent />
                        </Box>
                        <Box
                            sx={{
                                marginRight: 2
                            }}
                        >
                            <Box
                                component={Link}
                                to="/"
                            >
                                <img 
                                    src="https://i.imgur.com/cUq4nbL.png" 
                                    alt="logo"
                                    width="100px"
                                    height="auto"
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                marginRight: 2
                            }}
                        
                        >
                            <SearchBar />
                        </Box>
                        <Box 
                            sx={{
                                marginLeft: "auto",
                                display: "flex",
                            }}
                        >
                            <UserBadge />
                            <ShoppingCartBadge />
                        </Box>
                    </Box>
                )
            }
        </>
    )
}