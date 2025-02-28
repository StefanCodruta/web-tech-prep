import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

// TODO : adăugați o componentă RobotForm 
// RobotForm ar să permită adăugarea unui robot


class RobotList extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
		this.add = (robot) => {
			this.store.addRobot(robot);
		}
	}
	componentDidMount() {
		this.store = new RobotStore()
		this.setState({
			robots: this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots: this.store.getRobots()
			})
		})
	}
	render() {
		return (
			<div>
				 
				<RobotForm onAdd={this.add}/>
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
