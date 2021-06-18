import React from "react";
import {connect} from "react-redux"
import { Redirect } from "react-router";
import { signInAPI } from "../actions";

function Login(props) {
    return (
        <div>
            {
                props.user &&
                <Redirect to="/"/>
            }
            <button onClick={() => props.signIn()}>Login</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signInAPI())
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
