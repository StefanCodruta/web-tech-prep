import React from 'react';
import AddBook from './AddBook';

export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
    }


       taskAdded=(book)=>{
        let books=this.state.data;
        books.push(book);
        this.setState({
            data: books
        })
    }
    render() {
        return (
            <div>
                <AddBook taskAdded={this.taskAdded}/>
            </div>
        );
    }
}