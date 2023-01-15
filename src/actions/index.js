import * as api from '../api';
import { ADD_VISITOR } from '../constants/actionTypes';

export const addVisitor = (formData) => async (dispatch) => {
    try {
        const data = await api.addVisitor(formData);
        dispatch({type: ADD_VISITOR, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const buttonClicked = async (e) => {
    const name = e.currentTarget.dataset.name;
    const visitor = JSON.parse(localStorage.getItem('visitor'));
    try {
        if(visitor && visitor._id){
            await api.updateRate(visitor._id, {name});
        }
    } catch (error) {
        console.log(error);
    }
}