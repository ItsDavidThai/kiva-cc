import React, { Component } from 'react';
import LoanItem from './LoanItemComponent.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanData:[],
      sector: 'All'
    }
  }

  componentDidMount() {
    axios.get('http://api.kivaws.org/v1/lenders/jeremy/loans.json').then(function(result){
      this.setState({ loanData: result })
    }.bind(this))
  }

  handleFundOptionChange(event) {
    this.setState({sector:event.target.value})
  }

  render() {
    let info = <div></div>;

    if (this.state.loanData.data){
      let filteredBySector = this.state.loanData.data.loans.filter((loan) => loan.sector === this.state.sector)
      console.log(this.state.loanData)
      if(this.state.sector === 'All'){
        info = this.state.loanData.data.loans.map((loan) => <LoanItem data={loan} />, this)
      } else {
        info = filteredBySector.map((loan) => <LoanItem data={loan} />, this)
      }
    }

    return (
      <div>
          <h2>Coding Challenge</h2>
      <div>
      <select value={this.state.sector} onChange={this.handleFundOptionChange.bind(this)}>

        <option value="All">All</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Arts">Arts</option>
        <option value="Clothing">Clothing</option>
        <option value="Construction">Construction</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food">Food</option>
        <option value="Health">Health</option>
        <option value="Housing">Housing</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Personal use">Personal use</option>
        <option value="Retail">Retail</option>
        <option value="Services">Services</option>
        <option value="Wholesale">Wholesale</option>
      </select>

      </div>
          {info}
      </div>

    );
  }
}

export default App;
