import React from 'react';
import {
    Grid, Paper, Divider, Typography,
} from '../../muiImports/general/General'
import {
    AttachMoneyIcon
} from '../../muiImports/icons/Icons'

const Cashflow = () => {
    return (
        <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
            {/* First row */}
            <Grid item container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    {/* Total Income Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'green', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Total Income
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $333
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {/* Total Expense Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'red', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Total Expense
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $200
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    {/* Balance Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'blue', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Balance
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $133
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            {/* Second row */}
            <Grid item container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={3}>
                    {/* Testing Broo Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'purple', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Testing Broo
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $50
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    {/* Here We Goo Grid */}
                    <Paper sx={{ padding: '1rem', backgroundColor: 'transparent' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <Grid item sx={{ textAlign: 'center' }}>
                                <AttachMoneyIcon sx={{ color: 'orange', fontSize: '4rem' }} />
                            </Grid>
                            <Divider orientation="vertical" flexItem sx={{ height: '5rem' }} />
                            <Grid item xs>
                                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
                                    Here We Goo
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                    $100
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Cashflow;