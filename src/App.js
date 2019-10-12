import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Redirect from './components/Redirect/Redirect'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => (
    <Router>
        <Route path="/chat" component={Chat}/>
        <Route path="/login" exact component={Join}/>
        <Route path="/*" exact component={Redirect}/>
    </Router>
);

export default App;