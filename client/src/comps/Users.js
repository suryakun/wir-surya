import React from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../actions/actionCreators';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Users extends React.Component {

	render() {
		const { users } = this.props
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{users.map((user, i) => (
						<Table.Row key={i}>
							<Table.Cell>
								{user.name}
							</Table.Cell>
							<Table.Cell>{user.phone}</Table.Cell>
							<Table.Cell textAlign="right">
								<Link to={`/edit/${user._id}`} >
								<Button icon labelPosition='left'>
									<Icon name='edit' />
									Edit
    							</Button>
								</Link>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan='3'>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		)
	}
}

const mapStateToProps = state => ({
	users: state.state.users
})

export default connect(mapStateToProps, { removeContact })(Users);