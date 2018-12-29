import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'


function Routes() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default Routes;