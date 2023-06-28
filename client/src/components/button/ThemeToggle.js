/*
import React, { useState } from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(mode === 'dark');

    const handleModeToggle = () => {
        const newMode = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        setMode(newMode);
    };

    const backgroundImage = isDarkMode
        ? 'https://shorturl.at/mDT06' // Replace with the actual URL of the day background image
        : 'https://shorturl.at/tVW56'; // Replace with the actual URL of the night background image

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Button variant="outlined" onClick={handleModeToggle}>
                    {isDarkMode ? 'Light' : 'Dark'} Mode
                </Button>
            </div>
        </ThemeProvider>
    );
};

function App() {
    return (
        <CssVarsProvider>
            <ModeSwitcher />
        </CssVarsProvider>
    );
}

export default App;
*/


import React, {useEffect, useState} from 'react';
import { Button, CssBaseline } from '@mui/material';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const backgroundImage = isDarkMode
        ? 'https://shorturl.at/mDT06' // Replace with the actual URL of the day background image
        : 'https://shorturl.at/svMV2'; // Replace with the actual URL of the night background image

    const buttonImage = isDarkMode
        ? 'https://shorturl.at/mDT06' // URL of the day image for the button
        : 'https://shorturl.at/svMV2'; // URL of the night image for the button

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CssBaseline />
            <Button
                variant="outlined"
                onClick={handleModeToggle}
                style={{
                    backgroundImage: `url(${buttonImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '200px',
                    height: '50px',
                    color: isDarkMode ? 'black' : 'white',
                    borderColor: isDarkMode ? 'white' : 'black',
                }}
            >
                {isDarkMode ? 'Light' : 'Dark'} Mode
            </Button>
        </div>
    );
};

export default App;
