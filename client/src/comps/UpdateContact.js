import React from 'react';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../actions/actionCreators';
import { Button, Checkbox, Form, Grid, Container, Card, FormInput } from 'semantic-ui-react'
import Avatar from './Avatar'

class UpdateContact extends React.Component {

	state = {
		name: '',
		phone: '',
		address: '',
		image: ''
	}

	componentWillReceiveProps(nextProps, nextState) {
		this.setState({
			name: nextProps.user.name,
			phone: nextProps.user.phone,
			address: nextProps.user.address,
			image: nextProps.user.image
		})
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getContact(id);
	}

	onNameChange = e => this.setState({ name: e.target.value });
	onPhoneChange = e => this.setState({ phone: e.target.value });
	onAddressChange = e => this.setState({ address: e.target.value });
	onImageUpload = path => this.setState({image: path})

	onSubmit = e => {

		e.preventDefault();

		const { id } = this.props.match.params;
		const updUser = {
			id,
			name: this.state.name,
			phone: this.state.phone,
			address: this.state.address,
			image: this.state.image
		}

		this.props.updateContact(updUser);
		this.props.history.replace('/')
	}


	render() {
		return (
			<Container >
				<Card fluid>
				<h1>DETAIL CONTACT</h1>
				<div style={{marginLeft: "auto", marginRight: "auto", paddingBottom: "4rem"}}>
					<Avatar id={this.props.match.params.id} image={this.state.image} onUpload={this.onImageUpload}/>
				</div>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<FormInput label="Name" type='text' name='name' value={this.state.name} onChange={this.onNameChange} />
					</Form.Field>
					<Form.Field>
						<label>Phone</label>
						<input type='text' name='phone' value={this.state.phone} onChange={this.onPhoneChange} />
					</Form.Field>
					<Form.Field>
						<label>Address</label>
						<input type='text' name='address' value={this.state.address} onChange={this.onAddressChange} />
					</Form.Field>
					<Button type='submit'>Update</Button>
				</Form>
				</Card>
			</Container>
		)


	}



}

const mapStateToProps = state => ({
	user: state.state.user
})

export default connect(mapStateToProps, { getContact, updateContact })(UpdateContact);