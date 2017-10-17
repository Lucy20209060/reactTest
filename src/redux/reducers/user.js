
let item;

export const user = (state = item,action = {}) => {
	console.log(action)
	switch(action.type){
		case 'RETUSER':
			// return state + 1;
			return
		case 'SETUSER':
			// return state - 1;
			return
		default:
			// return state;
			return
	}
}