import React from 'react'
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import ava from "../avatar.jpg";

const DialogsItem = props => {
    let path = "/dialogs/" + props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path} activeClassName={styles.active }>
                <div className={styles.avatar}><img src={ava} alt="ava"/></div>
                <div className={styles.name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default DialogsItem