import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./BackButton.css";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="back-button">
            Back
        </button>
    );
}

export default BackButton;
