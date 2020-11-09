import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Menu from '../components/menu/menu.js'
import Login from '../components/login/login.js'

export default function Home() {
    return (
        <Fragment>
            <Menu />
            <div className="container">
                <h1>Welcome To StartDev React Course</h1>
                <Link to="/allusers">
                    <button className="button">Lista All Users</button>
                </Link>
                <Login />
            </div>
        </Fragment>
    );
}
