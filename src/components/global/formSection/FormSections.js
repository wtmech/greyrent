import React from 'react';

const FormSection = (props) => {
  return(
    <div className="section-container">
      <div className="section-header">
        {props.sectionHeader}
      </div>
      {props.children}
    </div>
  );
}

export default FormSection;