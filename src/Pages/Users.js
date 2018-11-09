import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';

const baseUrl = "http://localhost:2403";

const columns = [{
    dataField: 'username',
    text: 'Username'
}, {
    dataField: 'firstName',
    text: 'First Name'
}, {
    dataField: 'lastName',
    text: 'Last Price'
}, {
    dataField: 'email',
    text: 'Email Address'
}];

export default class Users extends Component {
    constructor () {
        super();

        this.state = {
            tableData: [{
                username: '',
                firstName: '',
                lastName: '',
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

    componentDidMount () {
        this.getUsers();
    }

    render() {
        return (
            <BootstrapTable keyField={'username'}  data={ this.state.tableData } columns={columns} />
        );
    }

};
