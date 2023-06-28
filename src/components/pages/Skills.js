import * as React from 'react';

import { useInfo } from '../../config/data/info';

export default function Skills() {
    return (
        <section id="section-03" className="section animation">
            <div className="section-body">
                <h2 className="section-title animation-translate-overline animation-item-1">Skills</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-md-3">
                        <p className="lead animation-translate animation-item-3">Languages</p>
                        <strong className="progress-label">PHP</strong>
                        <strong className="progress-label">Html/Css/JavaScript</strong>
                        <p className="lead animation-translate animation-item-3">Formal Languages</p>
                        <strong className="progress-label">Java</strong>
                        <strong className="progress-label">Typescript</strong>
                    </div>
                    <div className="col-12 col-md-3">
                        <p className="lead animation-translate animation-item-3">Frameworks</p>
                        <strong className="progress-label">Laravel</strong>
                        <strong className="progress-label">Bootstrap/JQuery</strong>
                        <strong className="progress-label">React</strong>
                        <strong className="progress-label">TailWind CSS/Material UI</strong>
                    </div>
                    <div className="col-12 col-md-3">
                        <p className="lead animation-translate animation-item-3">Databases</p>
                        <strong className="progress-label">MySQL</strong>
                        <strong className="progress-label">MongoDB</strong>
                    </div>
                    <div className="col-12 col-md-3">
                        <p className="lead animation-translate animation-item-3">Tools</p>
                        <strong className="progress-label">Git/Bitbucket/GitLab</strong>
                        <strong className="progress-label">Linux</strong>
                        <strong className="progress-label">Postman</strong>
                        <strong className="progress-label">Docker</strong>
                        <strong className="progress-label">Swagger</strong>
                        <strong className="progress-label">NPM</strong>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#section-04">
                    <span className="section-next-counter">03/07</span>
                    <span className="section-next-label">{ useInfo.nextChapter }</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}