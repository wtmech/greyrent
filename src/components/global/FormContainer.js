import React from 'react';
import { Paper } from '@material-ui/core';

const FormContainer = (props) => {
  return (
    <Paper className="form-container">
      {props.children}
    </Paper>
  );
}

export default FormContainer;