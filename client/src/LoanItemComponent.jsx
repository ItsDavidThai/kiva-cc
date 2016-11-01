import React, { Component } from 'react';
import moment from 'moment'
import { Panel } from 'react-bootstrap';

class LoanItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props)
    return(
      <Panel>
        <p>Status: {this.props.data.status}</p>
        <p>Funded Amount: {this.props.data.funded_amount}/{this.props.data.loan_amount}</p>
        <p>Loaned To: {this.props.data.name}</p>
        <p>Loan For: {this.props.data.use}</p>
        <p>Date: {moment(this.props.data.posted_date).format('YYYY MM DD')}</p>
        <p>Expiration: {moment(this.props.data.planned_expiration_date).format('YYYY MM DD')}</p>
        <p> Sector: {this.props.data.sector} </p>
      </Panel>
    )
  }

};

export default LoanItem