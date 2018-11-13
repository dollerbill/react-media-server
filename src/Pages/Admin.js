import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';
import Link from 'react-router-dom';
import { Button, Container, Row, Col } from "reactstrap";
import cellEditFactory from 'react-bootstrap-table2-editor';
import API from '../api';

const baseUrl = "http://localhost:2403";

const columns = [
    {
    dataField: 'username',
    text: 'Username'
}, {
    dataField: 'firstName',
    //dataFormat: this.combineNames(),
    text: 'First Name'
}, {
    dataField: 'lastName',
    text: 'Last Name',
}, {
    dataField: 'email',
    text: 'Email Address',
}, {
    dataField: 'edit',
        text: 'Edit',
        //formatter: this.deleteButton()
    }
];

export default class Admin extends Component {
    constructor () {
        super();

        this.state = {
            tableData: [{
                id: '',
                username: '',
                firstName: '',
                lastName: '',
                fullName: '',
                birthday: '',
                email: '',
            }],
        };
    }

    getUsers() {
        axios.get(baseUrl + '/users', {
            responseType: 'json'
        }).then(response => {
            this.setState({ tableData: response.data });
        });
    }


    deleteUser() {
        axios.get(baseUrl + `/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    deleteButton() {
            return (
                <button
                    key="submit"
                    onClick={ () => this.deleteUser(this.getValue()) }
                >
                    Delete
                </button>
            )
    }

        componentDidMount () {
        this.getUsers();
    }


    render() {
        return (
            <div className='text-center'>
                <Container>
                <Row>
                    <Col>
                        <h1>Admin page</h1>
                    </Col>
                </Row>
            </Container>
                <button
                    key="submit"
                    className="btn btn-default"
                    onClick={ () => this.updateSettings(this.getValue()) }
                >
                    UPDATE SETTINGS
                </button>
            <div className="container" style={{ marginTop: 10 }}>
                <BootstrapTable
                    striped
                    hover
                    keyField={'username'}
                    data={ this.state.tableData }
                    columns={columns}
                    filter={ filterFactory() }
                    pagination={ paginationFactory() }
                    cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
                />
            </div>
            </div>
        );
    }



}