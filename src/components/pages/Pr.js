import * as React from 'react';

import { useInfo } from '../../config/data/info';

export default function Project() {
    return (
        <section id="section-05" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate-overline animation-item-1">Projects</h2>
                <div className="row animation-translate animation-item-2">
                    <div className="col-12 col-md-4">
                        <a className="card" href="https://github.com/gokkutamu/php__booking__cars" rel="noreferrer">
                            {/* <img className="card-img-top" src="" alt="" /> */}
                            <div className="card-body">
                                <h3 className="card-title">Yotrip</h3>
                                <h4 className="card-subtitle">Laravel 8.x</h4>
                                <p className="card-tags">Backend</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4">
                        <a className="card" href="https://github.com/gokkutamu/Nhom6_Be2_St4" rel="noreferrer">
                            {/* <img className="card-img-top" src="" alt="" /> */}
                            <div className="card-body">
                                <h3 className="card-title">Fruit and vegetable e-shop</h3>
                                <h4 className="card-subtitle">Laravel 7.x</h4>
                                <p className="card-tags">Frontend - Backend</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4">
                        <a className="card" href="https://github.com/gokkutamu/PHP-Web2-Ck-V1" rel="noreferrer">
                            {/* <img className="card-img-top" src="" alt="" /> */}
                            <div className="card-body">
                                <h3 className="card-title">Selling cake e-shop</h3>
                                <h4 className="card-subtitle">PHP (PHPUnit , WSC , Design Partent)</h4>
                                <p className="card-tags">Backend</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-3">
                <a className="section-next goto-section" href="#section-06">
                    <span className="section-next-counter">05/10</span>
                    <span className="section-next-label">{ useInfo.nextChapter }</span>
                    <span className="section-next-icon"></span>
                </a>
            </div>
        </section>
    );
}