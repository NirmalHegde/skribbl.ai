//import librabies
import React from 'react';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//initialize all pages for use
const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/chat" exact component={Chat} />
        </Router>
    )
};

//exports app to index
export default App;