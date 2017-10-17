import { combineReducers } from 'redux'

import { number } from './num'
import { user } from './user'

const reducer = combineReducers({
	number,
	user,
})

export default reducer;