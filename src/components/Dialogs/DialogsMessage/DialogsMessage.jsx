import styles from "../Dialogs.module.css"
import React from "react"

const DialogsMessage = props => {
    return(
        <div className={styles.message}>
            {props.message}
        </div>
    )
}

export default DialogsMessage