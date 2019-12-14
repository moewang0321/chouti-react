import {
    takeEvery
} from 'redux-saga/effects'

import {
    sagas as home
} from '../pages/home/index'
import {
    sagas as detail
} from '../pages/detail/index'
// import {
//     sagas as like
// } from '../components/body/index'
let {
    GETLIST,
    REFRESH
} = home.types

let {
    GETITEM,
    GETCOMMENT,
    EMPTY
} = detail.types

// let {
//     SETLIKE
// } = like.types
// console.log(home.type)


function* sagas() {
    yield takeEvery(GETLIST, home.action)
    yield takeEvery(REFRESH, home.refresh)
    yield takeEvery(GETITEM, detail.loadItem)
    yield takeEvery(GETCOMMENT, detail.loadComment)
    yield takeEvery(EMPTY, detail.refresh)
    // yield takeEvery(SETLIKE, like.action)
}
export default sagas