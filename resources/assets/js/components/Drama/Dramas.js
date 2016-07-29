import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import Pager from 'react-pager'
import AuthenticatedComponent from '../Auth/AuthenticatedComponent'
import Loading from '../Loading'
import DramaStore from '../../stores/DramaStore'
import DramaService from '../../services/DramaService'
import DramaThumbnail from './DramaThumbnail'

class Dramas extends React.Component {
	constructor(props) {
		super(props);
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
		this.setState({loading: true});
		DramaService.getDramas(this.state.page, this.props.jwt);
	}

	_getDramasState() {
		if(!this.props.params.page || this.props.params.page === 'NaN'){
			this.props.params.page = 1;
		}
		return {
			page: this.props.params.page,
			visiblePages: 5,
			loading: DramaStore.loading,
			totalPages: DramaStore.totalPages,
			dramas: DramaStore.dramas
		}
	}

	_onChange() {
		this.setState(this._getDramasState());
	}

	handlePageClick = (data) => {
		let selected = data;
		let requestPage = selected + 1;
		
		hashHistory.push('/dramas/' + requestPage);
		this.setState({page: requestPage}, () => {
			this.getDramas();
		});
	};

	render() {
		if(this.state.loading){
			return <Loading />
		} else {
			let dramas = this.state.dramas;
			if(dramas && dramas !== null) {
				return (
					<div>
						<Grid>
							{dramas.map(function(drama, index) {
								return (
									<Col xs={6} md={4} key={index}>			
										<DramaThumbnail key={index} drama={drama} auth />
									</Col>
								)
					        })}
						</Grid>
						<Row>
							<Pager 
								total =   {this.state.totalPages}
								current = {this.state.page - 1}
								titles = {{
									first:   '首页',
									prev:    '\u00AB',
									prevSet: '...',
									nextSet: '...',
									next:    '\u00BB',
									last:    '末页'
								}}
								visiblePages = {this.state.visiblePages}
								onPageChanged={this.handlePageClick}
							 />
				        </Row>
					</div>
				)
			}else{
				return (
					null
				)
			}
		}
	}
}

export default AuthenticatedComponent(Dramas)