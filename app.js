//contains main app to render in #root

import React from 'react';
import { render } from 'react-dom';
import Nav from './Nav';
import Top from './typewriter';
import Question from './questionarea';
const App = () => {
    return (
        <div>
            <div className="navbar">
                <Nav />
            </div>
            <div className="topbar">
                <Top />
            </div>
            <div className="photoarea">
                <Photo />
            </div>
            <div className="skillsarea">
                <Skills />
            </div>
            <div className="aboutarea">
                <Question />
            </div>
        </div>
    );
};

render(
    <App />,
    document.getElementById("root")
);