import {
    LOADDATA,
    REFRESHDATA
} from './action-types'
const defaultState = {
    list: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOADDATA:
            if (JSON.stringify(action.data) === JSON.stringify(state.list)) {

                return {
                    list: action.data


                }
            } else {
                return {
                    list: [
                        ...state.list,
                        ...action.data

                    ]
                }

            }
            case REFRESHDATA:
                return {
                    list: action.data
                }
                default:
                    return state
    }
}