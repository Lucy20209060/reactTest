
let item = 0;

export const number = (state = item,action = {}) => {
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}