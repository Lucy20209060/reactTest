import * as actionTypes from '../constants/types'

let item = 0;
export const number = (state = item,action = {}) => {
	switch(action.type){
		case actionTypes.INCREMENT:
			return state + 1;
		case actionTypes.DECREMENT:
			return state - 1;
		default:
			return state;
	}
}