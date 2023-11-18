import React from 'react';
import { createRoot } from 'react-dom/client';
import HeroBox from './views/view.jsx';
import {define} from './global/global.js';
import {createState, getState} from './global/statemate.js';

const Routerjs = require('./router/router.js');
const router = new Routerjs();


const app = document.getElementById('app')
const root = createRoot(app);
root.render(<HeroBox />);

console.log(define);
console.log(router.viewRoutes());
console.log(createState('isLoggedIn', true));
console.log(getState('isLoggedIn'));