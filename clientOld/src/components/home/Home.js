import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SwipingViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import '../styles/styles.css'
import {
    Button, Typography, useTheme, MobileStepper,
} from '../muiImports/general/General';
import {
    KeyboardArrowLeft, KeyboardArrowRight,
} from '../muiImports/icons/Icons';

const AutoPlaySwipingViews = autoPlay(SwipingViews);

const images = [
    {
        label: 'Income and expense tracking',
        imgPath:
            'https://shorturl.at/bBPW5',
    },
    {
        label: 'Budgeting and financial goals',
        imgPath:
            'https://shorturl.at/xEQ56',
    },
    {
        label: 'Savings and investment tracking',
        imgPath:
            'https://shorturl.at/dIMR5',
    },
    {
        label: 'Reporting and analytics',
        imgPath:
            'https://shorturl.at/gluF6',
    },
];

const HomePage = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
    const navigate = useNavigate();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className="homepage">
            <div className="welcome-container">
                <Typography variant="h4" component="h1" gutterBottom className="welcome-text">
                    Welcome to Finance Manager!
                </Typography>
                <Typography variant="subtitle1" component="p" align="center" className="welcome-text">
                    Manage your finances with ease.
                </Typography>
                <div className="button-group">
                    <Button variant="contained" color="primary" size="large" className="login-button"
                            onClick={() => navigate('/login')}>
                        Log In
                    </Button>
                    <Button variant="contained" color="secondary" size="large" className="register-button"
                            onClick={() => navigate('/register')}>
                        Register
                    </Button>
                </div>
            </div>
                <div className="image-label">
                    <Typography className="image-label-text">{images[activeStep].label}</Typography>
                </div>
            <AutoPlaySwipingViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img src={step.imgPath} alt={step.label} className="image" />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipingViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
};

export default HomePage;
