import * as React from 'react';

export default function Navbar() {
    return (
        <nav className="sections-nav-container">
            <ul id="sections-nav" className="nav sections-nav sections-nav-animated">
                <li className="sections-nav-item">
                    <a href="#section-01" className="nav-link sections-nav-link goto-section active">
                        <span className="sections-nav-counter">01</span>
                        Top
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-02" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">02</span>
                        About me
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-03" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">03</span>
                        Skills
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-04" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">04</span>
                        Experiences
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-05" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">05</span>
                        Projects
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-06" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">06</span>
                        Hobbies/Interests
                    </a>
                </li>
                <li className="sections-nav-item">
                    <a href="#section-07" className="nav-link sections-nav-link goto-section">
                        <span className="sections-nav-counter">07</span>
                        Contact
                    </a>
                </li>
                <li className="sections-nav-item">
                    <div className="sections-nav-info">
                        <a href="mailto:ngoctam2303001@gmail.com">ngoctam2303001@gmail.com</a>
                        <p><a href="tel:+84939461842">+84 939461842</a></p>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
