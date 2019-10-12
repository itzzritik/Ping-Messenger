import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Redirect from './components/Redirect/Redirect'
import Home from './components/Home/Home'

const App = () => (
    <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/*" exact component={Redirect}/>
    </Router>
);

export default App;