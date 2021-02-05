import React, { Component } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'

class CompanyList extends Component {
	constructor() {
		super()
		this.state = {
			companies: []
		}

		this.save = (chapterId, chapter) => {
			this.store.saveOne(chapterId, chapter)
		}
	}

	componentDidMount() {
		this.store = new CompanyStore()
		this.setState({
			companies: this.store.getAll()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				companies: this.store.getAll()
			})
		})
	}
	
	render() {
		return (
			<div>
				{
					this.state.companies.map((e, i) =>
						<Company item={e} key={i} onSave={this.save}/>
					)
				}
      </div>
		)
	}
}

export default CompanyList
