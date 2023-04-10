import * as React from 'react';
import * as Div from '@mui/material';

import { useInfo } from '../../config/data/info';

export default function Resume() {
    return (
        <>
            <Div.Grid item className="resume" id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 mx-auto col-12">
                            <div className="col-lg-8 mx-auto text-center">
                                <h4>Skills</h4>
                            </div>
                            <Div.Box component="section" className="carousel-item active" width={{ xs: '100%', md: '100%' }} mb="4rem" borderRadius="0.5rem">
                                <div className="old-carousel">
                                    <div className="old-carousel-emoji">
                                        🔴🟡🟢
                                    </div>
                                </div>
                                <div className="main-carousel">
                                    <p className="cat-resume">
                                        <span style={{ color: 'rgb(0, 255, 164)' }}>{ useInfo.nameGithub } $ </span>
                                        &nbsp;
                                        cd skills
                                    </p>
                                    <p className="cat-resume"><span style={{ color: 'rgb(0, 255, 164)' }}>skills <span>(main)</span> $</span>&nbsp;ls</p>
                                    <div>
                                        <p style={{ color: 'rgb(0, 255, 164)', textAlign: '-webkit-left', margin: '0 10px' }}>languages</p>
                                        <ul className="list-languages">
                                            {useInfo.skills.languages.map((lang, key) => (
                                                <li key={key}>{lang}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p style={{ color: 'rgb(0, 255, 164)', textAlign: '-webkit-left', margin: '0 10px' }}>formal & abstracts languages</p>
                                        <ul className="list-languages">
                                            {useInfo.skills.formalLanguages.map((lang, key) => (
                                                <li key={key}>{lang}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p style={{ color: 'rgb(0, 255, 164)', textAlign: '-webkit-left', margin: '0 10px' }}>frameworks</p>
                                        <ul className="list-languages">
                                            {useInfo.skills.frameworks.map((frame, key) => (
                                                <li key={key}>{frame}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p style={{ color: 'rgb(0, 255, 164)', textAlign: '-webkit-left', margin: '0 10px' }}>databases</p>
                                        <ul className="list-languages">
                                            {useInfo.skills.databases.map((data, key) => (
                                                <li key={key}>{data}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p style={{ color: 'rgb(0, 255, 164)', textAlign: '-webkit-left', margin: '0 10px' }}>tools</p>
                                        <ul className="list-languages">
                                            {useInfo.skills.tools.map((tool, key) => (
                                                <li key={key}>{tool}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Div.Box>
                        </div>
                    </div>
                </div>
            </Div.Grid>

            <Div.Grid item className="resume py-5" id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">
                            <div className="col-lg-8 mx-auto text-center">
                                <h4>Hobbies/Interests</h4>
                            </div>

                            <Div.Box component="section" width={{ xs: '100%', md: '100%' }} mb="4rem" borderRadius="0.5rem">
                                <div className="old-carousel">
                                    <div className="old-carousel-emoji">
                                        🔴🟡🟢
                                    </div>
                                </div>
                                <div className="main-carousel">
                                    <p className="cat-resume">
                                        <span style={{ color: 'rgb(0, 255, 164)' }}>{ useInfo.nameGithub } $ </span>
                                        &nbsp;
                                        cd hobbies/interests
                                    </p>
                                    <p className="cat-resume"><span style={{ color: 'rgb(0, 255, 164)' }}>hobbies/interests <span>(main)</span> $</span>&nbsp;ls -l</p>
                                    <div>
                                        <ul className="list-languages">
                                            {useInfo.hobbies.map((hobby, key) => (
                                                <li key={key}><span>{hobby.emoji}</span>{hobby.label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Div.Box>
                        </div>
                    </div>
                </div>
            </Div.Grid>
        </>
    );
}