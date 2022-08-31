import {actionType} from "../Helper";

const songs = [
    {id: 1, name: 'One kiss', artist: 'Taylor', length: '03:34', cover: 'img/gai.jpg'},
    {id: 2, name: 'One kiss2', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 3, name: 'One kiss3', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 4, name: 'One kiss4', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 5, name: 'One kiss5', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 6, name: 'One kiss6', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 7, name: 'One kiss7', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
    {id: 8, name: 'One kiss8', artist: 'Taylor', length: '03:34',cover: 'img/gai.jpg'},
]

// action creator,
const fetchAllSongs = () => {
    console.log(`[action] ${actionType.FETCH_ALL_SONGS}`)
    return{
        type: actionType.FETCH_ALL_SONGS,
        payload: songs.map(s => ({...s, liked: false, playing: false, checked: false}))
            // liked, playing, checked
            // ... three dots operator, spread operator
            // copy compounded data structure, object, array, obj{...s}, [...songs]
            // mdn: spread operators

        // map, filter, find, sort, push, slice, forEach, some, findIndex
    }
}
const SelectSongs = id => {
    console.log(`[action] ${actionType.SELECT_SONG}`)
    return{
        type: actionType.SELECT_SONG,
        payload: id
    }
}

const LikedSongs = id => {
    console.log(`[action] ${actionType.LIKED_SONG}`)
    return{
        type: actionType.LIKED_SONG,
        payload: id
    }
}

const PlayingSongs = id => {
    console.log(`[action] ${actionType.PLAYING_SONG}`)
    return{
        type: actionType.PLAYING_SONG,
        payload: id
    }
}


export default {
    fetchAllSongs,
    SelectSongs,
    LikedSongs,
    PlayingSongs
}