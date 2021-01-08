import React from 'react'
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/textarea/Textarea";
import {maxLengthCreator, required} from "../../helpers/validations";

const maxLength30 = maxLengthCreator(30)

const MessageForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.group}>
        <Field
          placeholder="Enter your message"
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
}

const MessageReduxForm = reduxForm({
  form: 'dialogMessageBody'
})(MessageForm)

const Dialogs = props => {

  let state = props.dialogsPage

  let renderDialogs = state.dialogs.map((dialog, index) => {
    return <DialogsItem name={dialog.name} id={dialog.id} key={index}/>
  })

  let renderMessages = state.messages.map((message, index) => {
    return <DialogsMessage message={message.message} key={index}/>
  })

  const addNewMessage = (values) => {
    console.log(values)
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>
        {renderDialogs}
      </div>
      <div className={styles.dialogWrap}>
        <div className={styles.messages}>
          {renderMessages}
        </div>

        <MessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

export default Dialogs
