import {
    combineReducers
} from 'redux'
import {
    reducers as list
} from '../pages/home/index'
import {
    reducers as detail
} from '../pages/detail/index'
// import {
//     reducers as like
// } from '../components/body/index'

export default combineReducers({
    home: list,
    detail,
    // like
})