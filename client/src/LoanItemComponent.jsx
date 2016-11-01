import React, { Component } from 'react';


class LoanItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props)
    return(
      <div>
      <p>Funded Amount: {this.props.data.funded_amount}</p>
      <p>Loaned To: {this.props.data.name}</p>
      <p>Loan For: {this.props.data.use}</p>
      <p>Date: {this.props.data.date}</p>
      <p> Sector: {this.props.data.sector} </p>
      </div>

    )
  }

};

export default LoanItem