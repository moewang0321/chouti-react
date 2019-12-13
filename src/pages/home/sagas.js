import {
    put
} from 'redux-saga/effects'

import * as types from './action-types'

import {
    get
} from '../../utils/http'
//第一页请求数据
function* loadData(action) {
    try {
        const result = yield get({
            url: action.url || '/api/m/link/hot',
            params: {
                [action.params]: action.paramsValue
            }
        })
        yield put({
            type: types.LOADDATA,
            data: result.data
        })
    } catch (e) {

    }

}
//刷新时先清空列表
function* refresh(action) {
    try {

        yield put({
            type: types.REFRESHDATA,
            data: []
        })
    } catch (e) {

    }

}


export {
    types,
    loadData as action,
    refresh

}