import React from 'react';

import Input from './global/Input';
import FormSections from './global/formSection/FormSections';

import {Button} from '@material-ui/core';


const LoanForm = (props) => {
    return (
      <form>
        <div className="app-title">{props.title}</div>
        <FormSections sectionHeader="Address">
          <Input 
            placeholder="Street"
            value={props.info.address.street}
            onChange={props.onAddressChange}
            name="street"
            type="text"
          />

          <Input 
            placeholder="City"
            value={props.info.address.city}
            onChange={props.onAddressChange}
            name="city"
            type="text"
          />

          <Input 
            placeholder="State"
            value={props.info.address.state}
            onChange={props.onAddressChange}
            name="state"
            type="text"
          />

          <Input 
            placeholder="County"
            value={props.info.address.county}
            onChange={props.onAddressChange}
            name="county"
            type="text"
          />

          <Input 
            placeholder="Zip Code"
            value={props.info.address.zip}
            onChange={props.onAddressChange}
            name="zip"
            type="text"
          />
        </FormSections>

        <FormSections sectionHeader="Rent Roll">
          <Input 
            placeholder="Monthly Rent"
            value={props.info.rent.monthlyRent}
            onChange={props.onRentChange}
            name="monthlyRent"
            type="number"
          />

          <Input 
            placeholder="Unit #"
            value={props.info.rent.unit}
            onChange={props.onRentChange}
            name="unit"
            type="text"
          />

          <Input 
            placeholder="# of Bedrooms"
            value={props.info.rent.bedrooms}
            onChange={props.onRentChange}
            name="bedrooms"
            type="number"
          />

          <Input 
            placeholder="# of Bathrooms"
            value={props.info.rent.bathrooms}
            onChange={props.onRentChange}
            name="bathrooms"
            type="number"
          />
          <Button
            onClick={() => props.addOccupant()}
            variant="raised"
            style={{background: '#3c6d9d', color: 'white', marginTop: '20px', marginBottom: '10px', width: '60%'}}
          >
            Add Rent
          </Button>
        <div className="occupants-container">
        {props.info.occupants.map(occupant => 
          <div key={occupant.unit} className="occupant-container">
            <div className="item-contain">
              <div>Unit #</div>
              <div>{occupant.unit}</div>
            </div>
            <div className="item-contain">
              <div>Monthly Rent</div>
              <div>{occupant.monthlyRent}</div>
            </div>
            <div className="item-contain">
              <div># of bedrooms</div>
              <div>{occupant.bedrooms}</div>
            </div>
            <div className="item-contain">
              <div># of bathrooms</div>
              <div>{occupant.bathrooms}</div>
            </div>
            <div className="delete-occupant" onClick={() => props.removeOccupant(occupant.unit)}>x</div>
          </div>
          )
        }
        </div>
        </FormSections>
        <FormSections sectionHeader="Expenses">
        <Input 
          placeholder="Marketing"
          name="marketing"
          type="number"
          value={props.info.expenses.marketing}
          onChange={props.onExpenseChange}
        />

        <Input 
          placeholder="Taxes"
          name="taxes"
          type="number"
          value={props.info.expenses.taxes}
          onChange={props.onExpenseChange}
        />

        <Input 
          placeholder="Insurance"
          name="insurance"
          type="number"
          value={props.info.expenses.insurance}
          onChange={props.onExpenseChange}
        />

        <Input 
          placeholder="Repairs"
          name="repairs"
          type="number"
          value={props.info.expenses.repairs}
          onChange={props.onExpenseChange}
        />

        <Input 
          placeholder="Administarion"
          name="administration"
          type="number"
          value={props.info.expenses.administration}
          onChange={props.onExpenseChange}
        />

        <Input 
          placeholder="Payroll"
          name="payroll"
          type="number"
          value={props.info.expenses.payroll}
          onChange={props.onExpenseChange}        
        />

        <Input 
          placeholder="Utilities"
          name="utilities"
          type="number"
          value={props.info.expenses.utilities}
          onChange={props.onExpenseChange}
        />

        <Input 
          placeholder="Management"
          name="management"
          type="number"
          value={props.info.expenses.management}
          onChange={props.onExpenseChange}
        />
      </FormSections>

      <FormSections sectionHeader="Purchase Price">
      <Input 
        placeholder="Purchase Price"
        name="purchase"
        type="number"
        value={props.info.purchase}
        onChange={props.onInputChange}
      />
    </FormSections>
      <Button onClick={() => props.onSubmit()} variant="raised" style={{background: '#3c6d9d', color: 'white', marginTop: '20px', marginLeft: '10px', marginBottom: '10px'}}>
        Submit
      </Button>
      </form>    
    );
  }

export default LoanForm;