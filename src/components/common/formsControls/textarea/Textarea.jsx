import React from "react";
import {FormsControls} from "../FormsControls";

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormsControls {...props}>
    <textarea {...input} {...restProps} />
  </FormsControls>
}