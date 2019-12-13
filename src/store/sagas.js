import {
    takeEvery
} from 'redux-saga/effects'

import {
    sagas as home
} from '../pages/home/index'
import {
    sagas as detail
} from '../pages/detail/index'
let {
    GETLIST,
    REFRESH
} = home.types

let {
    GETITEM,
    GETCOMMENT,
    EMPTY
} = detail.types
// console.log(home.type)


function* sagas() {
    yield takeEvery(GETLIST, home.action)
    yield takeEvery(REFRESH, home.refresh)
    yield takeEvery(GETITEM, detail.loadItem)
    yield takeEvery(GETCOMMENT, detail.loadComment)
    yield takeEvery(EMPTY, detail.refresh)
}
export default sagas