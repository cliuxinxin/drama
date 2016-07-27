import React, { Component } from 'react'
import { Thumbnail, Button } from 'react-bootstrap'

class DramaDividerThumbnail extends Component {
	render() {
		return (
			<Thumbnail src={this.props.drama.imgurl} alt="242x200">
				<h3>{this.props.drama.name}</h3>
				<p dangerouslySetInnerHTML={{__html: this.props.drama.summary}}></p>
				<p>
					<Button bsStyle="primary">Button</Button>&nbsp;
					<Button bsStyle="default">Button</Button>
				</p>
			</Thumbnail>
		)
	}
}

export default DramaDividerThumbnail