import React from 'react';

export default class AddVacation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            destination: '',
            locationType: '',
            price: 0
        };
    }

    handleChange= (evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }

    
    render(){
        return (
        <div>
          <input type="text" id="vacation-destination"value="vacation-destination" onClick={e=>this.handleChange(e)}/>
          <input type="text" id="vacation-location-type"value="vacation-location-type" onClick={e=>this.handleChange(e)}/>
          <input type="text" id="vacation-price"value="vacation-price" onClick={e=>this.handleChange(e)}/>
            <input type="button" value="add vacation" onClick={this.addVacation}/>

        </div>
        );
    }

    addVacation = () => {
        this.props.itemAdded(this.state);
    }
}