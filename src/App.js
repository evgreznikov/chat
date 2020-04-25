import React from 'react';
import './App.css';
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="container">
                <Route path="/" exact component={Join}/>
                <Route path="/chat" component={Chat}/>
            </div>
        </Router>
);
}

export default App;
