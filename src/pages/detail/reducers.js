import {
    LOADITEM,
    LOADCOMMENT,
    EMPTYDATA
} from './action-types'

const defaultState = {
    item: {},
    comment: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case LOADITEM:
            return {
                item: action.data,
                    comment: state.comment
            }
            case LOADCOMMENT:
                return {
                    item: state.item,
                        comment: action.data
                }
                case EMPTYDATA:
                    return {
                        item: {},
                            comment: {}
                    }
                    default:
                        return state
    }
}