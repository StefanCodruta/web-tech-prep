import React from 'react';

export class AddCoupon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            discount: '',
            availability: ''
        };
    }

    addCoupon = () => {
       
        this.props.onAdd(this.state);
    }
    handleChange=(e)=>{
        this.setState({
            [e.state.name]:e.state.value
        });
    }

    render(){
        return(
            <div>
            <input type="text" name="category" id="category"onClick={e=> this.handleChange(e)}></input>
            <input type="text" name="discount" id="discount" onClick={e=> this.handleChange(e)}></input>
            <input type="text" name="availability" id="availability"onClick={e=> this.handleChange(e)}></input>
            <button value="add coupon" onClick={this.addCoupon}>add cupon</button>
            </div>
        )
    }
}