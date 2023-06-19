import * as React from "react";

import { useInfo } from "../../config/data/info";

export default function HobbiesAndInterests() {
    return (
        <section id="section-06" className="section animation">
            <div className="section-body">
                <h2 className="section-title animation-translate-overline animation-item-1">Hobbies & Interests</h2>
                <div className="row animation-translate animation-item-2">
                    {useInfo.hobbies.first.map((value, key) => (
                        <div className="col-12 col-md-6" key={key}>
                            <strong className="progress-label">{value.emoji} {value.label}</strong>
                        </div>
                    ))}
                    {useInfo.hobbies.last.map((value, key) => (
                        <div className="col-12 col-md-6" key={key}>
                            <strong className="progress-label">{value.emoji} {value.label}</strong>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-2">
                <a className="section-next goto-section" href="#section-07">
                    <span className="section-next-counter">06/07</span>
                    <span className="section-next-label">{ useInfo.nextChapter }</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}