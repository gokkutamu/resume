import * as React from 'react';
import * as Div from '@mui/material';

import Emoji from '../tools/Emoji';
import IconSocial from '../tools/Icon';

import { useInfo } from '../../config/data/info';

export default function Home() {
    return (
        <Div.Grid item className="home full-screen d-lg-flex justify-content-center align-items-center" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="about-image svg">
                            <Div.Box component="img" width={{ xs: '80%', md: '100%' }} src="https://www.free-css.com/assets/files/free-css-templates/preview/page270/marvel/assets/images/undraw/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="website template image" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <small className="small-text">{useInfo.welcome} <span className="mobile-block">{useInfo.portfolio}</span></small>
                            <h1 className="animated animated-text">
                                <span className="mr-2">Hi, I'm</span>
                                <div className="animated-info">
                                    <span className="animated-item">{useInfo.position}</span>
                                </div>
                            </h1>
                            {useInfo.miniBio.map((bio, index) => (
                                <Emoji key={index} emoji={bio.emoji} text={bio.text} />
                            ))}
                            <div className="social-icon">
                                {useInfo.socials.map((social, index) => (
                                    <IconSocial key={index} link={social.link} icon={social.icon} label={social.label} />
                                ))}
                            </div>
                            <div className="custom-btn-group mt-4">
                                <a href="/" className="btn mr-lg-2 custom-btn">
                                    📥
                                    {useInfo.download}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div.Grid>
    );
}