import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

const baseUrl = "http://localhost:2403";

// function nameFormatter(cell, row) {
//     return (
//     <span>${columns}firstName ${columns}lastName;
//     </span>
//     );
//
//
// return (
//     <span>
//         $ { cell } text
//     </span>
// );
// }

const columns = [{
//     dataField: 'username',
//     text: '',
//     formatter: nameFormatter()
// },{
    dataField: 'username',
    text: 'Username'
}, {
    dataField: 'firstName',
    text: 'First Name',
    //formatter: nameFormatter()
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
                birthday: '',
                email: '',
            }],
        };
    }

    combineNames() {
        //const fullName = this.state.tableData.firstName;
        //return fullName;
    }

    // imageFormatter(cell, row) {
    //         return (
    //             <span>
    //     <strong style={{color: 'red'}}>$ {cell} TEXT HERE</strong>
    //   </span>
    //         );
    //     }


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
