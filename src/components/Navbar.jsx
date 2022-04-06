import { AppBar, Toolbar, Grid, Tabs, Tab, Box, IconButton, alpha, styled, useTheme, useMediaQuery } from "@mui/material"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"
import DrawerComp from "./DrawerComp";

const linksArray = ['Home', 'Account', 'Orders', 'Cart']

const Navbar = () => {

  const [value, setValue] = useState()
  const theme = useTheme()
  //Gets triggered when screen size is small
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '20ch',
            },
        },
    }));

  return (
    <>
        <AppBar sx={{background: '#000'}}>
            <Toolbar>
                { isMatch? 
                    <>
                        <IconButton sx={{color: 'white'}}>
                            <i className="fa-brands fa-shopify"></i>
                            Shopify
                        </IconButton>
                        <DrawerComp linksArray={linksArray}/>
                    </> : 
                    <Grid sx={{placeItems: 'center'}} container>
                        <Grid item xs={2}>
                            <IconButton sx={{color: 'white'}}>
                                <i className="fa-brands fa-shopify"></i>
                                <span>Shopify</span>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} >
                            <Tabs
                                value={value} 
                                textColor='inherit' 
                                indicatorColor="secondary"
                                onChange={(e, val) => setValue(val)}
                                centered
                            >
                                {linksArray.map((link, index) => (
                                    <Tab value={index} key={index} label={link} />
                                ))}
                            </Tabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Box display='flex'>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                    />
                                </Search>
                            </Box>
                        </Grid>
                    </Grid>}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar