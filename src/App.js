import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Users from './Pages/Users';
import "./App.css";
import Admin from "./Pages/Admin";
import { Button, ButtonGroup, Container} from "reactstrap";


function AppRouter() {
    return (
        <Router>
            <Container>
                <nav>
                    <ButtonGroup>
                        <Button tag={Link} to="/">Home</Button>
                        <Button tag={Link} to="/users">Users</Button>
                        <Button tag={Link} to="/admin">Admin</Button>
                    </ButtonGroup>
                </nav>
            <hr />
                <Route exact path="/" component={Home} />
                <Route path="/Users" component={Users} />
                <Route path="/Admin" component={Admin} />
            </Container>
        </Router>
    );
}

export default AppRouter;