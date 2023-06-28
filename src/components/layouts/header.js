import * as React from 'react';

import { useImage } from '../../config/data/info';

export default function Header() {
    return (
        <section className="header">
            <div className="container-fluid-limited d-flex align-items-center justify-content-between">
                <a href="/resume" className="header-brand">
                    <img src={useImage.imgLogo} data-light-src={useImage.imgLogo} data-dark-src={useImage.imgLogo} alt="Your logo" />
                    <span className="header-title">Tr Ng Tam</span>
                </a>
                <button className="sections-nav-toggler" aria-label="Toggle navigation">
                    <span className="sections-nav-toggler-bar"></span>
                    <span className="sections-nav-toggler-bar"></span>
                    <span className="sections-nav-toggler-bar"></span>
                    <span className="sections-nav-toggler-bar"></span>
                </button>
            </div>
        </section>
    );
}