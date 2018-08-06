import React from 'react';
import {TextField} from '@material-ui/core';

const Input = (props) => {
  return (
    <TextField
      className="input-field"
      style={{marginTop: 20}}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
}

export default Input;