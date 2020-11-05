import React from "react";
import Home from "./screens/home";
import ListUsers from "./screens/listusers";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/allusers" exact component={ListUsers} />
            </Switch>
        </BrowserRouter>
    )
}
