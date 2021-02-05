import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotDetails from './RobotDetails'

// TODO : adăugați posibilitatea de a vizualiza detaliile unui robot
// RobotList are 2 stări una de detalii și una de listă
// se poate trece în starea de detalii printr-un buton pe fiecare robot
// se poate trece înapoi la listă printr-un buton de anulare

class RobotList extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			showDetails: false,
			index: null
		}

	}
	componentDidMount() {
		this.store = new RobotStore()
		this.setState({
			robots: this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots: this.store.getRobots(),
			})
		})
	}

	onSelect = (idx) => {
		this.setState({
			showDetails: !this.state.showDetails,
			index: idx
		});
	}

	render() {
		return (
			<div>
			{ 
			this.state.showDetails === false ?
				this.state.robots.map((e, i) => 
					<div key={i}>
						<Robot item={e} key={i} onSelect={
							()=>{this.onSelect(i)}
						} />
					</div>
				)
			: <RobotDetails item={this.state.robots[this.state.index]}
			onSelect={()=>{this.onSelect(-1)}}
			/>
			}
		
		</div>
		)
	}
}

export default RobotList
