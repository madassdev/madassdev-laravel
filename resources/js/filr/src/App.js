import React from "react";
import Home from "./components/Home";
import Directory from "./components/Directory";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import Main from "./components/Main";

function App(props) {
    useEffect(() => {
        props.getUserAuth();
    }, []);
    return (
        <Router basename="/filr">
            <Switch>
                <Route exact path="/">
                    <Home>
                        <Directory />
                    </Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/dir">
                    <Home>
                        <Main />
                    </Home>
                </Route>
            </Switch>
        </Router>
    );
}
const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserAuth: () => dispatch(getUserAuth()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
