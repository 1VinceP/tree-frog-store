import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
import Cart from './pages/cart/Cart';
import About from './pages/about/About';

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/gallery' component={ Gallery } />
        <Route path='/cart' component={ Cart } />
        <Route path='/about' component={ About } />
    </Switch>
)