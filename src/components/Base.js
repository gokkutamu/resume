import * as React from 'react';

import Navbar from './layouts/navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './layouts/header';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences'; 
import Project from './pages/Pr';
import HobbiesAndInterests from './pages/HI';

export default function Base() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <main className="content">
                <div className="container-fluid-limited">
                    <div className="row">
                        <div className="col col-xl-9">
                            <Home/>
                            <About/>
                            <Skills/>
                            <Experiences/>
                            <Project/>
                            <HobbiesAndInterests/>
                            <Contact/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}