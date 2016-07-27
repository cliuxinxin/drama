import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import Loading from '../Loading'
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
		// this.setState({loading: true});
		if(!this.props.params.page){
			this.props.params.page = 1;
		}
		DramaService.getDramas(this.props.params.page);
	}

	_getDramasState() {
		return {
			loading: DramaStore.loading,
			totalPages: DramaStore.totalPages,
			dramas: DramaStore.dramas
		}
	}

	_onChange() {
		this.setState(this._getDramasState());
	}

	handlePageClick = (data) => {
		let selected = data.selected;
		let requestPage = selected + 1;
		
		hashHistory.push('/dramas/' + requestPage);
		this.setState({page: requestPage}, () => {
			this.getDramas();
			$('html,body').animate({scrollTop:0},0); 
		});
	};

	render() {
		if(this.state.loading){
			return <Loading />
		} else {
			var dramas = this.state.dramas;
			if(dramas && dramas !== null) {
				return (
					<div>
						<Grid>
							{dramas.map(function(drama, index) {
								return (
									<Col xs={6} md={4} key={index}>			
										<DramaDividerThumbnail key={index} drama={drama} />
									</Col>
								)
					        })}
						</Grid>
						<Row>
							<ReactPaginate previousLabel={"上一页"}
		                       nextLabel={"下一页"}
		                       breakLabel={<Link to="">...</Link>}
		                       breakClassName={"break-me"}
		                       pageNum={this.state.totalPages}
		                       initialSelected={parseInt(this.props.params.page) - 1}
		                       marginPagesDisplayed={2}
		                       pageRangeDisplayed={5}
		                       clickCallback={this.handlePageClick}
		                       containerClassName={"pagination"}
		                       subContainerClassName={"pages pagination"}
		                       activeClassName={"active"} />
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

export default Dramas