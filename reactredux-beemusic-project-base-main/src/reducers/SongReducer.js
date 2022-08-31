import {actionType} from "../Helper";
import actions from "../actions";
// state shape
const InitialState = {
    rawSongList: [],
    id: undefined,
}

export const SongReducer = (state = InitialState, actions) => {
    let id = actions.payload
    let newSongList = [...state.rawSongList]
    switch (actions.type) {

        case actionType.FETCH_ALL_SONGS:
            console.log(`[reducer] ${actionType.FETCH_ALL_SONGS}`, actions.payload)
            // we need to update it to the state
            // state immutable
            // copy state, update the copy
            // return the copy
            // object, array,

            // let newState = {...state}
            // newState.rawSongList = actions.payload
            // return newState

            return {...state, rawSongList: actions.payload}

        case actionType.SELECT_SONG:
            console.log(`[reducer] ${actionType.SELECT_SONG}`, actions.payload)
            newSongList = newSongList.map(s => s.id === id ? {...s, checked: !s.checked} : s)
            return {...state, rawSongList: newSongList}


        case actionType.LIKED_SONG:
            console.log(`[reducer] ${actionType.LIKED_SONG}`, actions.payload)

            /*
            newSongList = newSongList.map(s => {
                if (s.id === id){
                    return {...s, liked: !s.liked}
                }else {
                    return s
                }
            })*/

            newSongList = newSongList.map(s => s.id === id ? {...s, liked: !s.liked} : s)

            return {...state, rawSongList: newSongList}

        case actionType.PLAYING_SONG:
            console.log(`[reducer] ${actionType.PLAYING_SONG}`, actions.payload)

            /*
            newSongList = newSongList.map(s => {
                if (s.id === id){
                    return {...s, liked: !s.liked}
                }else {
                    return s
                }
            })*/

            newSongList = newSongList.map(s => s.id === id ? {...s, playing: !s.playing} : s)

            return {...state, rawSongList: newSongList}

        default:
            return state
    }
}