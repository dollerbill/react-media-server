import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Users from './Pages/Users';
import "./App.css";
//
// const Index = () => <h2>Home</h2>;
// //const OldUsers = () => <h2>OldUsers</h2>;
// const Admin = () => <h2>Admin</h2>;
//
// const AppRouter = () => (
//     <Router>
//         <div>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/OldUsers/">OldUsers</Link>
//                     </li>
//                     <li>
//                         <Link to="/Admin/">Admin</Link>
//                     </li>
//                 </ul>
//             </nav>
//
//             <Route path="/" exact component={Index} />
//             <Route path="/OldUsers/" component={OldUsers} />
//             <Route path="/Admin/" component={Admin} />
//         </div>
//     </Router>
// );
//
// export default AppRouter;


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

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }

// function OldUsers() {
//     return (
//         <div>
//             <h2>OldUsers</h2>
//         </div>
//     );
// }

function Admin({ match }) {
    return (
        <div>
            <h2>Admin</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );

    ReactDOM.render((
        <Router>
            <Users />
        </Router>
    ), document.getElementById('root'));

}

export default AppRouter;