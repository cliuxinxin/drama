import React, { Component } from 'react'
import { Thumbnail, Button } from 'react-bootstrap'

class DramaDividerThumbnail extends Component {
	render() {
		return (
			<Thumbnail src={this.props.drama.imgurl} alt="242x200">
				<h4>{this.props.drama.name}</h4>
				<p dangerouslySetInnerHTML={{__html: this.props.drama.type}}></p>
				<p>
					<Button bsStyle="primary">Button</Button>&nbsp;
					<Button bsStyle="default">Button</Button>
				</p>
			</Thumbnail>
		)
	}
}

export default DramaDividerThumbnail