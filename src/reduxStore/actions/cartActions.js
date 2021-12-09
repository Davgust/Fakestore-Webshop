import * as actionTypes from './actionTypes';

export const resetCart = (payload) => {
	return { type: actionTypes.RESET_CART };
};

export const calculateTotalCartAmount = (params) => {};

export const incramentProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload: payload });
		// dispatch(calculateTotalCartAmount());
	};
};

export const decramentProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload: payload });
		//dispatch(calculateTotalCartAmount());
	};
};
