import store from '../store/index'

export const add = () => {
	store.dispatch({ type: 'INCREMENT' });
}

export const cut = () => {
	store.dispatch({ type: 'DECREMENT' });
}