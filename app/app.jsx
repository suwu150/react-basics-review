/*
 * @file app main file
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Deskmark from './components/Deskmark/index';


const app = document.createElement('div');
app.id = 'entry';
document.body.appendChild(app);
ReactDOM.render(<Deskmark />, document.getElementById('entry'));
