import React, {Component} from 'react'
import './App.css'
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-srote";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-content'>
                <HeaderContainer/>
                <main className='main container'>
                    <div className='content'>
                        <Route path='/profile/:userId?' render={withSuspense(<ProfileContainer/>)}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                        </React.Suspense>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const mapDispatchToProps = (dispatch) => ({
    initializedApp: () => dispatch(initializedApp()),
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)

const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SamuraiJSApp