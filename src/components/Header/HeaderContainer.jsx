import React, {Component} from 'react'
import Header from "./Header";
import {loginOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    render() {
        return (
          <Header {...this.props}/>
        )
    }
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

let mapDispatchToProps = (dispatch) => ({
    loginOut: () => dispatch(loginOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)