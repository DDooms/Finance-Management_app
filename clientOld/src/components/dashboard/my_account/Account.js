import React, { useState } from 'react';
import { Grid, Paper, TextField } from '../../muiImports/general/General';

const AccountSettings = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={6}>
                <Paper style={{ padding: '20px' }}>
                    <h2>User Information</h2>
                    <p>
                        Here you can edit public information about yourself.
                        The changes will be displayed for other users within 5 minutes.
                    </p>
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        style={{ marginBottom: '20px' }}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AccountSettings;
