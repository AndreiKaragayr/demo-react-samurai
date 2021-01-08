import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

/*CLASS*/

// export const withAuthRedirect = (Component) => {
//
//   class RedirectComponent extends React.Component {
//     render() {
//       if(!this.props.isAuth) return <Redirect to={'/login'} />
//
//       return <Component {...this.props} />
//     }
//   }
//
//   return RedirectComponent
// }

/*Function*/
export const withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'} />
    return <Component {...props} />
  }

  let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectRedirectComponent
}