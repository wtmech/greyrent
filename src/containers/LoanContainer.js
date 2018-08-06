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
            info={this.props.info}
            expenses={this.state}
            onAddressChange={this.props.onAddressChange}
            onRentChange={this.props.onRentChange}
            addOccupant={this.props.addOccupant}
            getOccupants={this.props.getOccupants}
            removeOccupant={this.props.removeOccupant}
            addExpenses={this.props.addExpenses}
            onExpenseChange={this.props.onExpenseChange}
          />
        </FormContainer>
        
      </div>
    );
  }
}

export default LoanContainer;