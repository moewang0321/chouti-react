import {
    combineReducers
} from 'redux'
import {
    reducers as list
} from '../pages/home/index'

export default combineReducers({
    home: list
})