import * as React from 'react';
import * as Div from '@mui/material';

import { useInfo } from '../../config/data/info';

export default function About() {
    return (
        <Div.Grid item className="about py-4" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto col-12">
                        <h4 className="mb-4">About me</h4>
                        <Div.Box component="section" className="carousel-item active"  width={{ xs: '100%', md: '100%' }} mb="4rem" borderRadius="0.5rem">
                            <div className="old-carousel">
                                <div className="old-carousel-emoji">
                                    🔴🟡🟢
                                </div>
                            </div>
                            <div className="main-carousel">
                                <p className="cat-resume">
                                    <span style={{ color: 'rgb(0, 255, 164)' }}>{useInfo.nameGithub} $ </span>
                                    &nbsp;
                                    cat {useInfo.nameGithub}
                                </p>
                                <span style={{ color: 'rgb(0, 255, 164)', margin: '0 5px' }}>{useInfo.nameGithub} (main) $ </span>
                                <span className="title-information">
                                    {useInfo.bio}
                                </span>
                            </div>
                        </Div.Box>
                    </div>
                </div>
            </div>
        </Div.Grid>
    );
}