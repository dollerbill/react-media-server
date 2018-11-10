import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Users from './Pages/Users';
import "./App.css";
import Admin from "./Pages/Admin";


function AppRouter() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Users">Users</Link>
                    </li>
                    <li>
                        <Link to="/Admin">Admin</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/Users" component={Users} />
                <Route path="/Admin" component={Admin} />
            </div>
        </Router>
    );
}

export default AppRouter;