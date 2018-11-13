import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';
import icon from "../buttons.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    validateEmail() {
        return this.state.email.length > 4;
    }

    validatePass() {
        return this.state.password.length > 4;
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
                            color="info"
                            disabled={!this.validateEmail()}
                            disabled={!this.validatePass()}
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
