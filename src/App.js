import React, { Component, Fragment } from 'react';
import LoanContainer from './containers/LoanContainer';
import RateContainer from './containers/RateContainer';
import './App.css';


class App extends Component {
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
      income: 0,
      expenses: {
        marketing: '',
        taxes: '',
        insurance: '',
        repairs: '',
        administration: '',
        payroll: '',
        utilities: '',
        management: ''
      },
      expensesTotal: 0,
      occupants: [],
      rent: {
        monthlyRent: '',
        unit: '',
        bedrooms: '',
        bathrooms: '',
      },
      purchase: '',
      capRate: '',
      terms: [],
      loading: false
    }

    this.onAddressChange = this.onAddressChange.bind(this);
    this.onRentChange = this.onRentChange.bind(this);
    this.onExpenseChange = this.onExpenseChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.addOccupant = this.addOccupant.bind(this);
    this.removeOccupant = this.removeOccupant.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.calculateIncome = this.calculateIncome.bind(this);
    

  }

  onAddressChange(e) {
    this.setState({
        address: {...this.state.address, [e.target.name]: e.target.value}
    })
  }

  onExpenseChange(e) {
    this.setState({
        expenses: {...this.state.expenses, [e.target.name]: parseInt(e.target.value, 10)}
    })
  }

  onRentChange(e) {
    this.setState({
      rent: {...this.state.rent, [e.target.name]: e.target.value}
    })
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10)
    })
  }

  addOccupant() {
    let data = {
      monthlyRent: parseInt(this.state.rent.monthlyRent, 10),
      unit: this.state.rent.unit,
      bedrooms: this.state.rent.bedrooms,
      bathrooms: this.state.rent.bathrooms
    }
    this.setState({
      occupants: [...this.state.occupants, data],
      rent: {
        monthlyRent: '',
        unit: '',
        bedrooms: '',
        bathrooms: '',
      },
    })
  }

  removeOccupant(unit) {
    this.setState({
      occupants: this.state.occupants.filter((occupant) => occupant.unit !== unit)
    })
  }

  addExpenses() {
    let expense = this.state.expenses;
    let total;
    total = expense.marketing + expense.taxes + expense.insurance + expense.repairs + expense.administration + expense.payroll + expense.utilities + expense.management;
    
    this.setState({
      expensesTotal: total
    })
  }

  calculateIncome() {
    this.state.occupants.map(occupant => {
      return occupant.monthlyRent
    }).reduce((x, y) => {
      return this.setState({
        income: (x + y) * 12
      })
    })
  }

  onSubmit() {
    this.calculateIncome();
    this.addExpenses();

    this.setState({
      loading: true
    })
    
    const data = {
      income: this.state.income,
      expenses: this.state.expensesTotal,
      rate:  this.state.income / this.state.purchase,
      noi: this.state.income - this.state.expensesTotal,
      address: {
        street:  this.state.street,
        city:  this.state.city,
        state:  this.state.state,
        county:  this.state.county, 
        zip: this.state.zip
      }
    }
    
    fetch("https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec", {
      method: 'POST',
      body: data,
    }).then((res, req) =>{
      return res.json();
    }).then((data) => {
      this.setState({terms: data.terms, loading: false})
    })
  }

  render() {
    return (
      <Fragment>
      <LoanContainer
        info={this.state}
        onAddressChange={this.onAddressChange}
        onRentChange={this.onRentChange}
        addOccupant={this.addOccupant}
        getOccupants={this.getOccupants}
        removeOccupant={this.removeOccupant}
        addExpenses={this.addExpenses}
        onExpenseChange={this.onExpenseChange}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
      <RateContainer terms={this.state.terms} loading={this.state.loading}/>
      </Fragment>
    );
  }
}

export default App;