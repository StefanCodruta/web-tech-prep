import React from 'react';
import AddTransaction from './AddTransaction';

export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
    }

    itemAdded=(item)=>{
        let items=this.state.data;
        items.push(item);
        this.setState({
            data: items
        })
    }
    render() {
        return (
            <div>
                <AddTransaction itemAdded={this.itemAdded}/>
            </div>
        );
    }
}