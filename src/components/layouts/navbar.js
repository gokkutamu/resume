import * as React from 'react';
import * as Div from '@mui/material';
import * as ReactDOM from 'react-router-dom';

import ToggleDarkMode from '../tools/Toggle';

import { Navigate } from '../../config/data/navigate';

export default function Navbar({ darkMode, click }) {
    const location = ReactDOM.useLocation(); //this.props.location || { pathname: '/' }
    const handleDarkMode = darkMode ? 'dark' : 'light';
    const [active, setActive] = React.useState(location.pathname === '#' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <nav className={`navbar navbar-expand-sm navbar-${handleDarkMode}`}>
            <div className="container">
                <ReactDOM.Link to="#" className="navbar-brand">
                    <div className="fa">🕍</div>
                    Bay
                </ReactDOM.Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Div.Box className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {Navigate.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <a href={link.to} onClick={() => setActive(link.active)} className={`nav-link ${link.active === active && !link.type && 'active'}`}>
                                    <span data-target={link.active}>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="navbar-nav">
                        <Div.Box className="ml-lg-4">
                            <ToggleDarkMode darkMode={darkMode} handleClick={click} />
                        </Div.Box>
                    </ul>
                </Div.Box>
            </div>
        </nav>
    );
}
