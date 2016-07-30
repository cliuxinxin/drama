import React, { Component } from 'react'
import { Thumbnail, Button } from 'react-bootstrap'
import AuthenticatedComponent from '../Auth/AuthenticatedComponent'
import DramaStore from '../../stores/DramaStore'
import DramaService from '../../services/DramaService'

class DramaThumbnail extends Component {
	constructor(props) {
		super(props);
		this.state = this._getDramaFollowState();
		this._onChange = this._onChange.bind(this);
		this.handleDramaFollow = this.handleDramaFollow.bind(this);
	}

	componentDidMount() {
		DramaStore.addChangeListener(this._onChange);
		this.setState({followed: this.props.drama.user_follow})
	}

	componentWillUnmount() {
		DramaStore.removeChangeListener(this._onChange);
	}

	_getDramaFollowState() {
		return {
			followed: DramaStore.followed
		}
	}

	_onChange() {
		this.setState(this._getDramaFollowState());
	}

	handleDramaFollow() {
		DramaService.dramaFollow(this.props.drama.id, this.state.followed, this.props.jwt);
	}

	render() {
		return (
			<Thumbnail src={this.props.drama.imgurl} alt="242x200">
				<h4>{this.props.drama.name}</h4>
				<p dangerouslySetInnerHTML={{__html: this.props.drama.type}}></p>
				<p>
					<Button 
						bsStyle = {this.state.followed ? "danger" : "primary"}
						onClick = {this.handleDramaFollow}
					>
						{ this.props.drama.user_follow ? (
							<i className="fa fa-heart" aria-hidden="true">&nbsp;已跟</i>
						) : (
							<i className="fa fa-heart-o" aria-hidden="true">&nbsp;跟剧</i>
						)}
					</Button>
				</p>
			</Thumbnail>
		)
	}
}

export default AuthenticatedComponent(DramaThumbnail)