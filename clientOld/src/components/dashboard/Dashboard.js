import React, {useState} from 'react';
import {useNavigate, Outlet} from 'react-router-dom';
import {
    createTheme, ThemeProvider, Box, SwipingDrawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
    MenuIcon, Avatar, Stack, Typography, Link
} from '../muiImports/general/General';
import {
    PriceChangeRoundedIcon, AccountBalanceWalletRoundedIcon, SavingsRoundedIcon, CandlestickChartRoundedIcon,
    QueryStatsRoundedIcon, LogoutRoundedIcon, ManageAccountsRoundedIcon, ContactlessRoundedIcon, InstagramIcon, FacebookIcon,
} from '../muiImports/icons/Icons';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'lightgray', padding: '20px', marginTop: '20px' }}>
            <footer style={{ backgroundColor: 'lightgray', padding: '20px' }}>
                <Typography variant="body1" align="center">
                    {/*Maybe should be replaced with useNavigate from react hooks, instead of Link*/}
                    <Link href="/faq" color="inherit" underline="hover">
                        FAQ
                    </Link>
                    {' | '}
                    <Link href="/about" color="inherit" underline="hover">
                        About Us
                    </Link>
                </Typography>
                <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
                    Follow us on:
                    {/*Should add our social media platforms*/}
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit" underline="none">
                        <InstagramIcon style={{ marginLeft: '5px', fontSize: '24px' }} />
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener" color="inherit" underline="none">
                        <FacebookIcon style={{ marginLeft: '5px', fontSize: '24px' }} />
                    </Link>
                </Typography>
            </footer>
        </footer>
    );
};

const SwipingTemporaryDrawer = () => {
    const [state, setState] = useState({
        left: false,
    });
    const navigate = useNavigate();

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ left: open });
    };

    const list = (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Stack direction="column" alignItems="left" sx={{ padding: '1rem', textAlign: 'center' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography variant="h6" component="div">
                        Beray
                        <Typography variant="subtitle2" component="div">
                            Wallet App
                        </Typography>
                    </Typography>
                </Stack>
            </Stack>
            <List>
                <Typography variant="h6" component="div" sx={{ px: 3 }}>
                    General
                </Typography>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/dashboard/income-and-expense-tracking')}>
                        <ListItemIcon>
                            <PriceChangeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Income & Expense Tracking" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/dashboard/budget-financial-goals')}>
                        <ListItemIcon>
                            <AccountBalanceWalletRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Budgeting & Financial Goals" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <Typography variant="h6" component="div" sx={{px: 3}}>
                Extras
            </Typography>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard/transactions')}>
                    <ListItemIcon>
                        <ContactlessRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Transactions" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard/savings')}>
                    <ListItemIcon>
                        <SavingsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Savings" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard/investment-tracking')}>
                    <ListItemIcon>
                        <CandlestickChartRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Investment Tracking" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard/analytics')}>
                    <ListItemIcon>
                        <QueryStatsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reporting & Analytics" />
                </ListItemButton>
            </ListItem>
            <Divider />
            <Typography variant="h6" component="div" sx={{px: 3}}>
                Account
            </Typography>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard/account')}>
                    <ListItemIcon>
                        <ManageAccountsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Account" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard/HANDLE LOGOUT OPERATION')}>
                    <ListItemIcon>
                        <LogoutRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </ListItem>
        </Box>
    );

    const theme = createTheme({
        palette: {
            background: {
                paper: '#626462',
            },
        },
    });

    return (
        <div>
            <Button onClick={toggleDrawer(true)} style={{ color: 'black' }}>
                <MenuIcon sx={{ color: 'white', fontSize: '2rem' }} />
            </Button>
            <ThemeProvider theme={theme}>
                <SwipingDrawer anchor="left" open={state.left} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                    {list}
                </SwipingDrawer>
            </ThemeProvider>
            <Outlet />
            <Footer />
        </div>
    );
}

export default SwipingTemporaryDrawer;