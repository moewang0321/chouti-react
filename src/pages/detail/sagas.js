import {
    put
} from 'redux-saga/effects'
import * as types from './action-types'

import {
    get
} from '../../utils/http'

function* loadItem(action) {
    try {
        const result = yield get({
            url: `/api/m/link/${action.id}`
        })

        yield put({
            type: types.LOADITEM,
            data: result.data
        })

    } catch (e) {

    }
}

function* loadComment(action) {
    try {
        const result = yield get({
            url: '/api/m/comments/show',
            params: {
                id: action.id
            }
        })

        yield put({
            type: types.LOADCOMMENT,
            data: result.data
        })
    } catch (e) {

    }
}

function* refresh(action) {
    try {
        yield put({
            type: types.EMPTYDATA
        })
    } catch (e) {

    }
}

export {
    types,
    loadItem,
    loadComment,
    refresh
}