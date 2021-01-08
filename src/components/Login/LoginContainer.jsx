import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Login from "./Login";

const LoginContainer = (props) => <Login {...props} />

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => ({
  login: (email, password, rememberMe) => dispatch(login(email, password, rememberMe))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);