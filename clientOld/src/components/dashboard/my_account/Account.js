import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography } from '../../muiImports/general/General';

const AccountSettings = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleStreetChange = (e) => {
        setStreet(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handlePostalCodeChange = (e) => {
        setPostalCode(e.target.value);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={6}>
                <Paper style={{ padding: '15px', backgroundColor: 'darkgray' }}>
                    <Typography variant="h2">User Information</Typography>
                    <Typography paragraph>
                        Here you can edit public information about yourself.
                    </Typography>
                    <Paper style={{ padding: '20px', backgroundColor: 'lightgray' }}>
                        <Typography variant="subtitle1">Email Address:</Typography>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleEmailChange}
                            style={{ backgroundColor: 'white' }}
                            InputLabelProps={{
                                shrink: email !== '',
                            }}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">First Name:</Typography>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    style={{ backgroundColor: 'white' }}
                                    InputLabelProps={{
                                        shrink: firstName !== '',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">Last Name:</Typography>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    style={{ backgroundColor: 'white' }}
                                    InputLabelProps={{
                                        shrink: lastName !== '',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle1">Street Address:</Typography>
                        <TextField
                            label="Street Address"
                            variant="outlined"
                            fullWidth
                            value={street}
                            onChange={handleStreetChange}
                            style={{ backgroundColor: 'white' }}
                            InputLabelProps={{
                                shrink: street !== '',
                            }}
                        />

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">City:</Typography>
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    value={city}
                                    onChange={handleCityChange}
                                    style={{ backgroundColor: 'white' }}
                                    InputLabelProps={{
                                        shrink: city !== '',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">Postal Code:</Typography>
                                <TextField
                                    label="Postal Code"
                                    variant="outlined"
                                    fullWidth
                                    value={postalCode}
                                    onChange={handlePostalCodeChange}
                                    style={{ backgroundColor: 'white' }}
                                    InputLabelProps={{
                                        shrink: postalCode !== '',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AccountSettings;