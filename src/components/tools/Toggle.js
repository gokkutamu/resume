import * as React from 'react';
import * as Div from '@mui/material';

export default function ToggleDarkMode({ darkMode, handleClick }) {
    return (
        <Div.Box fontSize="2rem" className="color-mode d-lg-flex justify-content-center align-items-center">
            {darkMode? (
                <span onClick={handleClick} aria-label="Sun" role="img">🌤️</span>
            ) : (
                <span onClick={handleClick} aria-label="Night" role="img">🌒</span>
            )}
            {/* <i className="color-mode-icon active"></i>Mode */}
        </Div.Box>
    );
}