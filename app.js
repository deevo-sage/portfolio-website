//contains main app to render in #root

import React from 'react';
import { render } from 'react-dom';
import Nav from './Nav';
const App = () => {
    return (
        <div>
            <div className="navbar">
                <Nav />
            </div>
        </div>
    );
};

render(
    <App />,
    document.getElementById("root")
);