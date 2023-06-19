import * as React from 'react';

import { useInfo } from '../../config/data/info';

export default function About() {
    return (
        <section id="section-02" className="section animation">
            <div className="section-body">
                <div className="row">
                    <div className="col col-xl-10">
                        <h2 className="section-title animation-translate-overline animation-item-1">About me</h2>
                        <article className="article animation-translate animation-item-2">
                            <p>{useInfo.bio}</p>
                            {useInfo.about.map((value, index) => (
                                <p key={index}>{value.content}</p>
                            ))}
                        </article>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#section-03">
                    <span className="section-next-counter">02/07</span>
                    <span className="section-next-label">{ useInfo.nextChapter }</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}