// import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import axios from 'axios';
// import Link from 'react-router-dom';
// import { Button, Container, Row, Col } from "reactstrap";
// import cellEditFactory from 'react-bootstrap-table2-editor';
//
// const baseUrl = "http://localhost:2403";
//
// const columns = [{
//     dataField: 'username',
//     text: 'Username'
// }, {
//     dataField: 'firstName',
//     //dataFormat: this.combineNames(),
//     text: 'First Name'
// }, {
//     dataField: 'lastName',
//     text: 'Last Name',
// }, {
//     dataField: 'email',
//     text: 'Email Address',
// },
// // {
// //     dataField: 'button',
// //     formatter: buttonFormatter(),
// //     text: 'Edit User',
// // }
// ];
//
// function buttonFormatter(){
//     return '<Button type="submit">Edit</Button>';
// }
//
//
//
// // baseUrl.request({url: '/users'}, function(err, todos) {
// //     console.log(todos); // [...]
// // });
// //
// let newName = {
//     username: 'peanut',
//     done: true
// };
// //
// // baseUrl.request({json: newName, method: 'PUT'}, function(err, todo) {
// //     console.log(todo); // {id: '...', ...}
// // });
//
// export default class Admin extends Component {
//     constructor () {
//         super();
//
//         this.state = {
//             tableData: [{
//                 id: '',
//                 username: '',
//                 firstName: '',
//                 lastName: '',
//                 fullName: '',
//                 birthday: '',
//                 email: '',
//                 button:'',
//             }],
//         };
//     }
//
//     combineNames() {
//         //const fullName = this.state.tableData.firstName;
//         //return fullName;
//         //return "bilbo";
//     }
//
//     // nameFormatter(firstName, lastName) {
//     //     return ${this.state.firstName} ${tableData.lastName};
//     // }
//
//     getUsers() {
//         axios.get(baseUrl + '/users', {
//             responseType: 'json'
//         }).then(response => {
//             this.setState({ tableData: response.data });
//         });
//     }
//
//     // updateUsers(id, item) {
//     //         axios.put(baseUrl + `/users/${id}`, {newName}).then(response => {
//     //             console.log(response);
//     //         });
//     //     }
//
//     updateSettings(id, name) {
//             return axios.put(baseUrl + `/users/${id}`, newName).then(response => {
//                 console.log(response);
//             });
//         }
//
//     removeUser()
//
//     componentDidMount () {
//         this.getUsers();
//     }
//
//     render() {
//         return (
//             <div className='text-center'>
//                 <Container>
//                 <Row>
//                     <Col>
//                         <h1>Admin page</h1>
//                     </Col>
//                 </Row>
//             </Container>
//                 <button
//                     key="submit"
//                     className="btn btn-default"
//                     onClick={ () => this.updateSettings(this.getValue()) }
//                 >
//                     UPDATE SETTINGS
//                 </button>
//             <div className="container" style={{ marginTop: 10 }}>
//                 <BootstrapTable
//                     striped
//                     hover
//                     keyField={'username'}
//                     data={ this.state.tableData }
//                     columns={columns}
//                     filter={ filterFactory() }
//                     pagination={ paginationFactory() }
//                     cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
//                 />
//             </div>
//             </div>
//         );
//     }
//
// };
