import store from '../store/index'

export const ret = (action) => {
	store.dispatch({ type: 'RETUSER' },action:action);
}

export const set = () => {
	store.dispatch({ type: 'SETUSER' });
}