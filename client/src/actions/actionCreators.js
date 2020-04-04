import {GET_CONTACTS, GET_CONTACT, ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT, FILTER_CONTACT} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch=>{
	const res = await axios.get('/api/users/');
	dispatch({
		type: GET_CONTACTS,
		payload: res.data
	})
}

export const filterContacts = (key) => dispatch => {
	dispatch({
		type: FILTER_CONTACT,
		payload: key
	})
}

export const getContact = (id) => async dispatch=>{
	const res = await axios.get(`/api/users/${id}`);
	dispatch({
		type: GET_CONTACT,
		payload: res.data
	})
}

export const addContact = (user) => async dispatch=>{
	const config = {
		headers: {'Content-Type': 'application/json'}
	};
	const res = await axios.post('/api/users/', user, config);
	dispatch({
		type: ADD_CONTACT,
		payload: res.data
	})
}

export const removeContact = (id) => async dispatch=>{
	try{
		await axios.delete(`/api/users/${id}`);
		dispatch({
			type: REMOVE_CONTACT,
			payload: id
		})
	} catch(err){
		console.error(err);
		dispatch({
			type: REMOVE_CONTACT,
			payload: id
		})
	}
}

export const updateContact = (user) => async dispatch=>{
	console.log(user)
	const config = {
		headers:{'Content-Type':'application/json'}
	};
	const url = `/api/users/${user.id}`
	console.log(url)
	const res = await axios.put(url, user, config);
	dispatch({
		type: UPDATE_CONTACT,
		payload: res.data
	})
}