import React, {Component} from 'react';

class About extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render(){
		return(
			<div className="about-us">
				About Us
			</div>
		);
	}
}

export default About;