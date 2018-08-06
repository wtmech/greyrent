import React, {Component} from 'react';
import FormContainer from '../components/global/FormContainer';
import LoanForm from '../components/LoanForm';

class LoanContainer extends Component {
  render() {
    return (
      <div className="loan-container">
        <FormContainer>
          <LoanForm 
            title="Application"
          />
        </FormContainer>
        
      </div>
    );
  }
}

export default LoanContainer;