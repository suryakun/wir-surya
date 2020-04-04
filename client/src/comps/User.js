import React from 'react';
import {connect} from 'react-redux';
import {getContact} from '../actions/actionCreators';
import {Link} from 'react-router-dom';

class User extends React.Component{

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.getContact(id);
	}

	render(){

		return(
			<div>
				<h1>{this.props.state.name} is {this.props.state.phone}</h1> | <br/>
				<Link to={`/edit/${this.props.state._id}`}>Edit User </Link>
			</div>
		)


	}



}

const mapStateToProps = state =>({
	state: state.state.state
})


export default connect(mapStateToProps,{getContact})(User);