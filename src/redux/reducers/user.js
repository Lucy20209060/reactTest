import Immutable from 'immutable';


const initialState = Immutable.fromJS({
  a: null,
  b: null
});

export const user = (state = initialState,action = {}) => {
	// console.log(initialState)
	// return
	switch(action.type){
		case 'RETUSER':
			// return state + 1;
			return state.set(
		        'a': action.action.a
		      );
		case 'SETUSER':
			return state -1;
		default:
			return state;
	}
}