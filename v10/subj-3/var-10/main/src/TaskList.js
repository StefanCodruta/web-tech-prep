import React from 'react';
import AddTask from './AddTask'


export default class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
    }

    taskAdded =(task)=>{
        let tasks=this.state.data;
        tasks.push(task);
        this.setState({
            data: tasks
        })
    }
    render() {
        return (
            <div>
                 <AddTask taskAdded={this.taskAdded} />
            </div>
        )
    }
}
