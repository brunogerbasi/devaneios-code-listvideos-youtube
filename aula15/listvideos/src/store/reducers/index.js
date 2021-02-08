import { combineReducers } from 'redux'

import search from './searchRD'
import startVideo  from './startVideoRD'

const getReducer = combineReducers({
    search,
    startVideo
})

export default getReducer