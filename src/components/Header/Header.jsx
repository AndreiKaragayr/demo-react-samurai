import React from 'react'
import styles from './Header.module.css'
import LogoSVG from "./LogoSVG";
import NavBar from "../NavBar/NavBar";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.logo}>
                        <a href="/"><LogoSVG /></a>
                    </div>

                    <NavBar />

                    <div className={styles.login}>
                        {
                            props.isAuth
                            ?
                              <div className={styles.flex}>
                                  <span className={styles.name}>{props.login}</span>
                                  <button onClick={props.loginOut}>Logout</button>
                              </div>
                            :
                              <NavLink to='/login'>Login</NavLink>
                        }
                    </div>

                </div>

            </div>
        </header>
    )
};

export default Header