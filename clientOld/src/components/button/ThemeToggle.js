import React, {useEffect, useState} from 'react';
import { Button, CssBaseline } from '@mui/material';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeToggle = () => {
        const newState = !isDarkMode;
        setIsDarkMode(newState);
    };

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const backgroundImage = isDarkMode
        ? 'https://shorturl.at/hsvL2'  // light mode
        : 'https://shorturl.at/FLN18'; // dark mode

    const buttonImage = isDarkMode
        ? 'https://shorturl.at/hsvL2'  // light mode
        : 'https://shorturl.at/FLN18'; // dark mode

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
