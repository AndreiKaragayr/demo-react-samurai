import React from "react";
import {Field} from "redux-form";

export const CreateField = ({placeholder, name, validators, component, type, props={}, id, text}) => {
  return (
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators || []}
      type={type || 'text'}
      id={id || 'field'}
      {...props}
    >
      {text ? <label htmlFor={id || 'field'}>Remember me </label> : null}
    </Field>
  )
}
