import React from 'react';

export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookTitle: '',
            bookType: '',
            bookPrice: 0
        };
    }
    handleChange= (evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }
    
    addBook = () => {   
        this.props.taskAdded(this.state);
    }
    
    render(){
        return (
        <div>
            <input type="text" name="book-title" id="book-title" onClick={e=> this.handleChange(e)}/>
            <input type="text" name="book-type" id="book-type" onClick={e=> this.handleChange(e)}/>
            <input type="text" name="book-price" id="book-price"onClick={e=> this.handleChange(e)}/>
            <input tyipe="button" value="add book" id="addbutton" onClick={this.addBook}/>
        </div>
        );
    }

  
}