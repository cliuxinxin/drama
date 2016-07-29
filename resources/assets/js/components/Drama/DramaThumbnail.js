import React, { Component } from 'react'
import { Thumbnail, Button } from 'react-bootstrap'
import AuthenticatedComponent from '../auth/AuthenticatedComponent'
import DramaStore from '../../stores/DramaStore'
import DramaService from '../../services/DramaService'

class DramaThumbnail extends Component {
	render() {
		return (
			<Thumbnail src={this.props.drama.imgurl} alt="242x200">
				<h4>{this.props.drama.name}</h4>
				<p dangerouslySetInnerHTML={{__html: this.props.drama.type}}></p>
				<p>
					<Button bsStyle="primary">
						<i className="fa fa-heart-o" aria-hidden="true"></i>&nbsp;跟剧
					</Button>
				</p>
			</Thumbnail>
		)
	}
}

export default DramaThumbnail