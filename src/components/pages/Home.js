import * as React from 'react';

import { useImage, useInfo } from '../../config/data/info';

export default function Home() {
    return (
        <section id="section-01" className="section section-sub-header animation interaction-in">
            <div className="section-body">
                <div className="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
                    <img src={useImage.imgAvatar} className="jumbotron-img animation-translate animation-item-1" alt="Avatar" />
                    <h1 className="display-1 display-animated display-animated-in animation-translate animation-item-2">{ useInfo.nameGithub }</h1>
                    <p className="lead animation-translate animation-item-3">{ useInfo.position }</p>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-4">
                <a className="section-next goto-section" href="#section-02">
                    <span className="section-next-counter">01/07</span>
                    <span className="section-next-label">{ useInfo.nextChapter }</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}