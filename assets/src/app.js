/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RoutesConfig from "./screen/RouteConfig"
import { BrowserRouter } from 'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import '../styles/index.scss';

ReactDOM.render((
    <React.StrictMode>
        <BrowserRouter>
            <RoutesConfig />
        </BrowserRouter>
    </React.StrictMode>
), document.getElementById('root'));