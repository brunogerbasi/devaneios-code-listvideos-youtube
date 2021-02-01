import { combineReducers } from 'redux'

import search from './searchRD'

const getReducer = combineReducers({
    search
})

export default getReducer