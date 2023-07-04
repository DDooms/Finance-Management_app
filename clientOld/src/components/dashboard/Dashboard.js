import React, {useState} from 'react';
import {
    createTheme, ThemeProvider, Box, SwipingDrawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
    MenuIcon, Avatar, Stack, Typography,
} from '../muiImports/general/General';
import {
    PriceChangeRoundedIcon, AccountBalanceWalletRoundedIcon, SavingsRoundedIcon, CandlestickChartRoundedIcon,
    QueryStatsRoundedIcon, AccountBoxRoundedIcon, LogoutRoundedIcon,
} from '../muiImports/icons/Icons';

export default function SwipingTemporaryDrawer() {
    const [state, setState] = useState({
        left: false,
    });

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
                    <ListItemButton>
                        <ListItemIcon>
                            <PriceChangeRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Income & Expense Tracking" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
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
                <ListItemButton>
                    <ListItemIcon>
                        <SavingsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Savings" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <CandlestickChartRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Investment Tracking" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
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
                <ListItemButton>
                    <ListItemIcon>
                        <AccountBoxRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Account" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
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
                paper: '#566456',
            },
        },
    });

    return (
        <div>
            <Button
                onClick={toggleDrawer(true)}
                style={{
                    color: 'black',
                }}
            >
                <MenuIcon sx={{ color: 'white', fontSize: '2rem' }} />
            </Button>
            <ThemeProvider theme={theme}>
                <SwipingDrawer
                    anchor="left"
                    open={state.left}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </SwipingDrawer>
            </ThemeProvider>
        </div>
    );
}
