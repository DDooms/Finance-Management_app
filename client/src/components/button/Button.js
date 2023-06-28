import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton({ name, icon, onClick, bg, bPad, color, bRad }) {
    const buttonStyles = {
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    };

    return (
        <Button variant="outlined" style={buttonStyles} onClick={onClick}>
            {icon}
            {name}
        </Button>
    );
}

export default CustomButton;
