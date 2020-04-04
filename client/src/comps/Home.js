import React from 'react';
import Users from './Users';
import Search from './Search'
import { connect } from 'react-redux';
import { getContacts, removeContact } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import { Grid, Segment, Container } from 'semantic-ui-react'

class Home extends React.Component {

	componentDidMount() {
		this.props.getContacts();
	}

	render() {

		return (
			<Container>
				<Grid>
					<Grid.Row >
						<Grid.Column>
							<Segment>CONTACT LIST</Segment>
							<Search />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column stretched>
							<Users />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		)


	}



}

const mapStateToProps = state => ({
	state: state.state.state
})

export default connect(mapStateToProps, { getContacts, removeContact })(Home);