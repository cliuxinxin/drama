import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import DramaStore from '../../stores/DramaStore'
import DramaService from '../../services/DramaService'
import DramaDividerThumbnail from './DramaDividerThumbnail'

class Dramas extends Component {
	constructor() {
		super();
		this.state = this._getDramasState();
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		if(!this.state.dramas) {
			this.getDramas();
		}

		DramaStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		DramaStore.removeChangeListener(this._onChange);
	}

	getDramas() {
		DramaService.getDramas();
	}

	_getDramasState() {
		return {
			dramas: DramaStore.dramas
		}
	}

	_onChange() {
		this.setState(this._getDramasState());
	}

	render() {
		var dramas = this.state.dramas;
		if(dramas && dramas !== null) {
			return (
				<Grid>
					{dramas.map(function(drama, index) {
						return (
							<Col xs={6} md={4} key={index}>			
								<DramaDividerThumbnail key={index} drama={drama} />
							</Col>
						)
			        })}
				</Grid>
			)
		}else{
			return (
				null
			)
		}
	}
}

export default Dramas