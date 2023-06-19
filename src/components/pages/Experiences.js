import * as React from 'react';

import { useInfo } from '../../config/data/info';

export default function Experiences() {
    return (
        <section id="section-04" className="section animation">
            <div className="section-body">
                <h2 className="section-title animation-translate-overline animation-item-1">Experiences</h2>
                <div className="timeline timeline-animated">
                    <div className="timeline-item">
                        <span className="timeline-date">2022&nbsp;–&nbsp;now</span>
                        <h3 className="timeline-title">Amazon</h3>
                        <p className="timeline-text">Junior Developer</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-date">2021&nbsp;–&nbsp;2022</span>
                        <h3 className="timeline-title">ONICORN COMMUNICATION JSC</h3>
                        <p className="timeline-text">Intern Developer, Team leader (2 - 5 member)</p>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-2">
                <a className="section-next goto-section" href="#section-05">
                    <span className="section-next-counter">04/07</span>
                    <span className="section-next-label">{ useInfo.nextChapter }</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}