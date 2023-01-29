/* eslint-disable-line react/destructuring-assignment */
import React from 'react';
import classes from './FormControls.module.css';

function FormControl({
  input, meta, child, ...props
}) {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
      <div>
        {props.children}
      </div>
      <div>
        { hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
}

export function Textarea(props) {
  const {
    input, meta, child, ...restProps
  } = props;
  return (
    <FormControl {...props}><textarea {...input} {...restProps} /></FormControl> // eslint-disable-line react/jsx-props-no-spreading
  );
}
export function Input(props) {
  const {
    input, meta, child, ...restProps
  } = props;
  return (
    <FormControl {...props}><input {...input} {...restProps} /></FormControl> // eslint-disable-line react/jsx-props-no-spreading
  );
}
