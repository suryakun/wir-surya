import {GET_CONTACTS, GET_CONTACT, ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT, FILTER_CONTACT} from '../actions/types';

const initialState = {
	data: [],
	users: [],
	user: {}
}

export default function(state=initialState, action){
	switch(action.type){
		case GET_CONTACTS:
			return{
				...state,
				data: action.payload,
				users: action.payload
			}
		case GET_CONTACT:
			return{
				...state,
				user: action.payload
			}
		case ADD_CONTACT:
			return{
				...state,
				users: [...state.users, action.payload]
			}
		case REMOVE_CONTACT:
			return{
				...state,
				users: state.users.filter(state=>
					state.id !== action.payload)
			}
		case UPDATE_CONTACT:
			return{
				...state,
				users: state.users.map(state=>
					state._id === action.payload.id ? (state = action.payload) : state)
			}
		case FILTER_CONTACT:
			return {
				...state,
				users: state.data.filter(user => 
					user.name.indexOf(action.payload) > -1
				)
			}
		default:
			return{
				...state
			}
	}
}