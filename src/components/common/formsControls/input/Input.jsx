import React from "react";
import {FormsControls} from "../FormsControls";

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormsControls {...props}>
    <input {...input} {...restProps} />
  </FormsControls>
}