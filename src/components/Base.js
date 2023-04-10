import * as React from 'react';
import * as Div from '@mui/material';

import Navbar from './layouts/navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Pr from './pages/Pr';
import Contact from './pages/Contact';
import Footer from './layouts/footer';

export default function Base() {
    const [darkMode, setDarkMode] = React.useState(false);

    function handleToggleDarkMode() {
        let oppositeOfCurrentDarkMode = !darkMode;
        localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
        setDarkMode(oppositeOfCurrentDarkMode);

    }

    React.useEffect(() => {
        let removeDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        const queryDarkMode = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

        if (removeDarkMode) {
            setDarkMode(removeDarkMode);
        } else {
            localStorage.setItem('darkMode', `${!queryDarkMode?.matches}`);
        }

        // Update dark mode on window resize.
        const updateDarkMode = (query) => {
            setDarkMode(query?.matches);
        }

        if (queryDarkMode) {
            queryDarkMode.addEventListener('change', updateDarkMode);
        }
    }, [])

    return (
        <Div.Box className={darkMode ? 'dark' : 'light'}>
            <Navbar darkMode={darkMode} click={handleToggleDarkMode} />
            <Div.Grid>
                <Home />
                <About />
                <Resume />
                <Pr />
                <Contact />
            </Div.Grid>
            <Footer />
        </Div.Box>
    );
}