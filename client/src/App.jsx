import React, { Component } from 'react';
import LoanItem from './LoanItemComponent.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanData:[]
    }
  }

  componentDidMount() {
    axios.get('http://api.kivaws.org/v1/lenders/jeremy/loans.json').then(function(result){
      this.setState({ loanData: result })
    }.bind(this))
  }

  render() {
    let info = <div></div>;

    if (this.state.loanData.data){
      console.log(this.state.loanData)
      info = this.state.loanData.data.loans.map((loan) => <LoanItem data={loan} />, this)
    }

    return (
      <div>
          <h2>Coding Challenge</h2>
      <div>

      </div>
          {info}
      </div>

    );
  }
}

export default App;
