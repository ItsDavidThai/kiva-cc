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
    let that = this;
    axios.get('https://api.kivaws.org/v1/lenders/jeremy/loans.json').then(function(result){
      that.setState({ loanData: result.data.loans })
    })
    .then(function(){
      axios.get('https://api.kivaws.org/v1/lenders/jeremy/loans.json?page=2').then(function(result){
        let loanData = that.state.loanData;
        that.setState({ loanData: loanData.concat(result.data.loans) })
      })
    })
  }
  handleFundOptionChange(event) {
    this.setState({sector:event.target.value});
  }
  render() {
    let info;

    if (this.state.loanData.length >= 1) {
      let filteredBySector = this.state.loanData.filter((loan) => loan.sector === this.state.sector)
      if(this.state.sector === 'All') {
        info = this.state.loanData.map((loan) => <LoanItem data={loan} />, this);
      } else {
        info = filteredBySector.map((loan) => <LoanItem data={loan} />, this);
        info = info.length >= 1 ? info : <div>No results for this Sector</div>;
      }
    }
    return (
      <div>
        <div>
            <h2>Coding Challenge</h2>
        </div>
        <div>
          <label>Sector:</label>
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
        <div>
            {info}
        </div>
      </div>
    )
  };
};

export default App;
