import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

const baseUrl = "http://localhost:2403";

const columns = [{
    dataField: 'username',
    text: 'Username'
}, {
    dataField: 'firstName',
    //dataFormat: this.combineNames(),
    text: 'First Name'
}, {
    dataField: 'lastName',
    text: 'Last Name',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'email',
    text: 'Email Address',
    filter: textFilter()
}];

export default class Users extends Component {
    constructor () {
        super();

        this.state = {
            tableData: [{
                username: '',
                firstName: '',
                lastName: '',
                fullName: '',
                birthday: '',
                email: '',
            }],
        };
    }

    combineNames() {
        //const fullName = this.state.tableData.firstName;
        //return fullName;
        //return "bilbo";
    }

    // nameFormatter(firstName, lastName) {
    //     return ${this.state.firstName} ${tableData.lastName};
    // }

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
            <div className="container" style={{ marginTop: 10 }}>
            <BootstrapTable
                striped
                hover
                keyField={'username'}
                data={ this.state.tableData }
                columns={columns}
                filter={ filterFactory() }
                pagination={ paginationFactory() } />
            </div>
        );
    }

};
