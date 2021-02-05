import React from 'react';

export default class AddTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transactionNumber: '',
            transactionType: '',
            amount: 0
        };
    }
    handleAdd = () => {
        
        this.props.itemAdded(this.state);
    }
    render(){
        return (
        <div>
            <input type="text" value="transaction-number" id="transaction-number" onClick={e=> this.handleChange(e)}/>
            <input type="text" value="transaction-type" id="transaction-type" onClick={e=> this.handleChange(e)}/>
            <input type="text" value="transaction-amount" id="transaction-amount" onClick={e=> this.handleChange(e)}/>
            <input type="button" value="add transaction" onClick={this.handleAdd}/>
        </div>
        );
    }


}