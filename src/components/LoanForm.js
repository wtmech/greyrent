import React, { Component } from 'react';

import Input from './global/Input';
import FormSections from './global/formSection/FormSections';

import {Button} from '@material-ui/core';


class LoanForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: {
        street: '',
        city: '',
        state: '',
        county: '',
        zip: ''
      },
      annualTotal: '',
      rent: [],
      terms: []
    }

    this.onChangeAddress = this.onChangeAddress.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

  }

  onChangeAddress(e) {
    this.setState({
        address: {...this.state.address, [e.target.name]: e.target.value}
    })
  }

  addRent() {

  }

  // onSubmit(event) {
  //   event.preventDefault();
  //   const data = {
  //     income: this.state.income,
  //     expenses: this.state.expenses,
  //     rate:  this.state.rate,
  //     noi:  this.state.noi,
  //     address: {
  //       street:  this.state.street,
  //       city:  this.state.city,
  //       state:  this.state.state,
  //       county:  this.state.county, 
  //       zip: this.state.zip
  //     }
  //   }
    
  //   fetch("https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec", {
  //     method: 'POST',
  //     body: data,
  //   }).then((res, req)=>{
  //     return res.json();
  //   }).then((data)=>{
  //     this.setState({terms: data.terms})
  //   })
  // }



  render() {
    return (
      <form onSubmit={this.props.formSubmit}>
        <div className="app-title">{this.props.title}</div>
        <FormSections sectionHeader="Address">
          <Input 
            placeholder="Street"
            value={this.state.address.street}
            onChange={this.onChangeAddress}
            name="street"
            type="text"
          />

          <Input 
            placeholder="City"
            value={this.state.address.city}
            onChange={this.onChangeAddresss}
            name="city"
            type="text"
          />

          <Input 
            placeholder="State"
            value={this.state.address.state}
            onChange={this.onChangeAddress}
            name="state"
            type="text"
          />

          <Input 
            placeholder="County"
            value={this.state.address.county}
            onChange={this.onChangeAddress}
            name="county"
            type="text"
          />

          <Input 
            placeholder="Zip Code"
            value={this.state.address.zip}
            onChange={this.onChangeAddress}
            name="zip"
            type="text"
          />
        </FormSections>

        <FormSections sectionHeader="Rent Roll">
          <Input 
            placeholder="Monthly Rent"
            value=""
            onChange={this.onChange}
            name="monthly rent"
          />

          <Input 
            placeholder="Unit #"
            value=""
            onChange={this.onChange}
            name="unit"
          />

          <Input 
            placeholder="# of Bedrooms"
            value=""
            onChange={this.onChange}
            name="bedrooms"
          />

          <Input 
            placeholder="# of Bathrooms"
            value=""
            onChange={this.onChange}
            name="bathrooms"
          />
          <Button variant="raised" style={{background: '#4b8ddf', color: 'white', marginTop: '20px', marginBottom: '10px', width: '60%'}}>
        Add Rent
      </Button>
        </FormSections>

        <FormSections sectionHeader="Expenses">
        <Input 
          placeholder="Marketing"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Taxes"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Insurance"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Repairs"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Administarion"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Payroll"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Utilities"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Administarion"
          value=""
          onChange={this.onChange}
          name=""
        />

        <Input 
          placeholder="Management"
          value=""
          onChange={this.onChange}
          name=""
        />
      </FormSections>
      
      <Button variant="raised" type="submit" style={{background: '#4b8ddf', color: 'white', marginTop: '20px', marginLeft: '10px', marginBottom: '10px'}}>
        Submit
      </Button>
      </form>    
    );
  }
}

export default LoanForm;