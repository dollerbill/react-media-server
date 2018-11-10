import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import icon from "../buttons.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Billy and Austin's pay-to-use media server</h1>
                        <h3>Please login to continue</h3>
                        <img alt ="buttons" src={icon} width="200"/>
                    </Col>
                </Row>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Send us btc
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}
