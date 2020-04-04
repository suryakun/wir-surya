import React from 'react'
import {connect} from 'react-redux';
import {filterContacts} from '../actions/actionCreators';
import { Input } from 'semantic-ui-react'

const Search = (props) => <Input icon='search' placeholder='Search...' onChange={e => props.filterContacts(e.target.value)}/>

export default connect(null, {filterContacts})(Search)