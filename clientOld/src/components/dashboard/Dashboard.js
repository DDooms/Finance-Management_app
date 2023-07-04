import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipingDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import CandlestickChartRoundedIcon from '@mui/icons-material/CandlestickChartRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';

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
