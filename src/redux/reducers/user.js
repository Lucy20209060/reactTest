// import Immutable from 'immutable';

import Immutable from 'seamless-immutable'

const initialState = Immutable({
  a: null,
  b: null,
  c: null
});

export const user = (state = initialState,action = {}) => {
	// console.log(action.action)
	switch(action.type){
		case 'RETUSER':
			return state.merge({
				'a':action.action.a,
				'b':action.action.b,
				'c':{
					d:'dd',
					f:'ff'
				}
			})
		case 'SETUSER':
			return state.setIn('a', action.action.a);
		default:
			return state;
	}
}