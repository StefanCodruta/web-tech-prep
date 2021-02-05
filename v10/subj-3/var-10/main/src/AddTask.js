import React from 'react';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
            taskPriority: 'low',
            taskDuration: 0
        };
    }

    handleChange= (evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }
    
    addTask = () => {
        
        this.props.taskAdded(this.state);
    }
    render(){
        return (
        <div>
            <input type="text" name="task-name" id="task-name"onClick={e=> this.handleChange(e)}></input>
            <input type="text" name="task-priority" id="task-priority"onClick={e=> this.handleChange(e)}></input>
            <input type="text" name="task-duration" id="task-duration"onClick={e=> this.handleChange(e)}></input>
            <button value="add task" onClick={this.addTask}>add task</button>
        </div>
        );
    }

 }
