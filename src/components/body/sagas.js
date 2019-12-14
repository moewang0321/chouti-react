import {
    put
} from 'redux-saga/effects'

import * as types from './action-types'

function* setLike(action) {
    try {
        //存储点赞id 

        yield put({
            type: types.PUSHLIKE,
            data: action.id
        })
    } catch (e) {

    }
}

export {
    types,
    setLike as action
}