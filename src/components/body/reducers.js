import {
    PUSHLIKE
} from './action-types'
const likeList = JSON.parse(localStorage.getItem('likeList')) || {
    uId: []
}
const defaultState = {
    likeList: likeList.uId
}

export default (state = defaultState, action) => {
    console.log(action.data)
    switch (action.type) {
        case PUSHLIKE:
            if (state.likeList.indexOf(action.data) === -1) {
                return {
                    likeList: [
                        ...state.likeList,
                        action.data
                    ]
                }
            } else {

                for (var i = 0; i < likeList.uId.length; i++) {

                    if (likeList.uId[i] === action.data) {
                        likeList.uId.splice(i, 1);

                        break;

                    }
                }
                return {
                    likeList: likeList.uId
                }
            }

            default:
                return state
    }
}