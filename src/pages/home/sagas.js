import {
    put
} from 'redux-saga/effects'

import * as types from './action-types'

import {
    get
} from '../../utils/http'

function* loadData(action) {
    try {
        const result = yield get({
            url: '/api/m/link/hot',
            params: {
                afterTime: 0
            }
        })
        console.log('page/sagas:')
        console.log(result.data)
        yield put({
            type: types.LOADDATA,
            data: result.data
        })
    } catch (e) {

    }

}

export {
    types,
    loadData as action
}