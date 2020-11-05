import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <h1>Welcome To StartDev React Course</h1>
            <Link to="/allusers">
                <button className="button">Lista All Users</button>
            </Link>
        </div>
    );
}
