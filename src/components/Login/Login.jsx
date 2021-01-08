import React from 'react';
import styles from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/input/Input";
import {maxLengthCreator, minLengthCreator, required} from "../../helpers/validations";
import {Redirect} from "react-router-dom";
import {CreateField} from "../common/formsControls/createField/createField";

const maxLength50 = maxLengthCreator(50)
const minLength6 = minLengthCreator(6)

const LoginForm = ({handleSubmit, error}) => {

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.group}>
        <CreateField placeholder={"Email"} name="email" component={Input} validate={[required, maxLength50]}/>
      </div>
      <div className={styles.group}>
        <CreateField placeholder={"Password"} name="password" component={Input} type={'password'} validate={[required, minLength6]}/>
      </div>
      <div className={styles.group}>
        <CreateField id="checkbox" placeholder={"Password"}  name="rememberMe" component={"input"} type={'checkbox'} validate={[]}/>
      </div>

      {error && <div className={styles.formError}>{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = ({login, isAuth}) => {

  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if( isAuth ) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={styles.root}>
      <h1>Login In</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};

export default Login
