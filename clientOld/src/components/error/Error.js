import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/register.css'

function Error() {
    const navigate = useNavigate();
    return (
        <div>
            <p id="error-msg">Oops, no such URL exists</p>
            <button type="button" onClick={() => navigate("/")} className="back">Back</button>
        </div>
    );
}

export default Error;