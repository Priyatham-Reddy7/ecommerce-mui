import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Navbar = () => {

    const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
        main: '#1976d2',
        },
    },
    });

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
        <ThemeProvider theme={darkTheme}>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton>
                        <i class="fa-brands fa-shopify"></i>
                    </IconButton>
                    <Typography variant='h5' component='div' sx={{flexGrow: 1}}>
                        Shopify
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>Account</Button>
                        <Button color='inherit'>Orders</Button>
                        <Button color='inherit'>Cart</Button>
                    </Stack>
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </>
  )
}

export default Navbar