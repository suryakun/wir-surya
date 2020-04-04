import React from 'react';
import {connect} from 'react-redux';
import {addContact} from '../actions/actionCreators';


class AddContact extends React.Component{

	state ={
		name: '',
		phone: ''
	}

	onNameChange = e => this.setState({name: e.target.value});
	onPhoneChange = e => this.setState({phone: e.target.value});

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			phone: this.state.phone
		}

		this.props.addContact(newUser);
	}

	render(){

		return(
			<div>
				<h1>Add Contact</h1>
				<form onSubmit={this.onSubmit}>
					<input type='text' name='name' value={this.state.name} onChange={this.onNameChange}/>
					<input type='text' name='phone' value={this.state.phone} onChange={this.onPhoneChange}/>
					<input type='submit' name='submit' value='submit'/>
				</form>
			</div>
		)


	}



}


export default connect(null,{addContact})(AddContact);