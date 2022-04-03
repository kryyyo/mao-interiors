import {useMediaQuery, useTheme, IconButton, Box} from "@mui/material";
import DrawerComponent from "./DrawerComp";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";


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
                            justifyContent: "center",
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
                            <Link
                                href="#"
                            >
                                <img 
                                    src="https://i.imgur.com/cUq4nbL.png" 
                                    alt="logo"
                                    width="64px"
                                />
                            </Link>
                        </Box>
                        <Box 
                            sx={{
                                marginLeft: "auto",
                                display: "flex",
                            }}
                        >
                            <IconButton
                                sx={{
                                    color: "#000",
                                    marginRight: 1,
                                }}
                                as={Link}
                                to="/login"
                            >
                                <PersonOutlineIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: "#000"}}
                            >
                                <ShoppingCartCheckoutIcon />
                            </IconButton>
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
                                as={Link}
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
                            as={Link}
                            to="/login"
                        >
                            <IconButton
                                sx={{
                                    color: "#000",
                                    marginRight: 3,
                                }}
                            >
                                <PersonOutlineIcon />
                            </IconButton>
                            <IconButton
                                sx={{ color: "#000"}}
                            >
                                <ShoppingCartCheckoutIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )
            }
        </>
    )
}