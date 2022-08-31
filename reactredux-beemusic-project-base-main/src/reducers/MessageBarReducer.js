import {actionType} from "../Helper";
const InitialState = {

}

export const MessageBarReducer = (state = InitialState, action) => {
    switch (action.type){
        // case actionType.FETCH_ALL_SONGS:
        //     console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, action.payload)
        //     return state
        default:
            return state
    }
}